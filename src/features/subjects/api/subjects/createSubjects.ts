import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateSubjectsDTO = {
  data: {
    nama_mapel: string;
    id_kategori_mapel: number | null;
    id_program: number | null;
    id_guru: number | null;
    jenis: string;
    operator: number;
  };
};

type CreateSubjectsResponse = {
  message: string;
};

export async function createSubjects({ data }: CreateSubjectsDTO) {
  const res = await axios.post<CreateSubjectsResponse>("/mapel", data);

  return res.data;
}

type UseCreateSubjectsOptions = {
  config?: MutationConfig<typeof createSubjects>;
};

export function useCreateSubjects({ config }: UseCreateSubjectsOptions = {}) {
  return useMutation(createSubjects, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["subjectss"]);
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
