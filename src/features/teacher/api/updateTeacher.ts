import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateTeacherDTO = {
  id_guru: number;
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

type UpdateTeacherResponse = {
  message: string;
};

export async function updateTeacher({ id_guru, data }: UpdateTeacherDTO) {
  // const formData = new FormData();
  // Object.entries(data).forEach(([key, value]) => {
  //   formData.append(key, value);
  // });
  const res = await axios.put<UpdateTeacherResponse>(`/guru/${id_guru}`, data);

  return res.data;
}

type UseUpdateTeacherOptions = {
  config?: MutationConfig<typeof updateTeacher>;
};

export function useUpdateTeacher({ config }: UseUpdateTeacherOptions = {}) {
  return useMutation(updateTeacher, {
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
