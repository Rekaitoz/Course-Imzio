import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateTeacherDTO = {
  data: {
    nama_guru: string;
    nip: string;
    jabatan: string;
    tempat_lahir: string;
    tgl_lahir: Date | string;
    alamat: string;
    jenis_kelamin: string;
    no_telp: string;
    username: string;
    password: string;
    operator?: any;
  };
};

type CreateTeacherResponse = {
  message: string;
};

export async function createTeacher({ data }: CreateTeacherDTO) {
  // const formData = new FormData();
  // Object.entries(data).forEach(([key, value]) => {
  //   formData.append(key, value);
  // });
  const res = await axios.post<CreateTeacherResponse>("/guru", data);
  console.log(res);

  return res.data;
}

type UseCreateTeacherOptions = {
  config?: MutationConfig<typeof createTeacher>;
};

export function useCreateTeacher({ config }: UseCreateTeacherOptions = {}) {
  return useMutation(createTeacher, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["teachers"]);
      showNotification({
        message: args[0].message,
        color: "green",
        icon: IconCheck({}),
      });

      if (config?.onSuccess) {
        config.onSuccess(...args);
      }
    },
  });
}
