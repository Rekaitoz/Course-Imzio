import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateSubjectsDTO = {
  id_mapel: number;
  data: {
    nama_mapel: string;
    id_kategori_mapel: number | null;
    id_program: number | null;
    id_guru: number | null;
    jenis: string;
    operator: number;
  };
};

type UpdateSubjectsResponse = {
  message: string;
};

export async function updateSubjects({ id_mapel, data }: UpdateSubjectsDTO) {
  const res = await axios.put<UpdateSubjectsResponse>(
    `/mapel/${id_mapel}`,
    data
  );

  return res.data;
}

type UseUpdateSubjectsOptions = {
  config?: MutationConfig<typeof updateSubjects>;
};

export function useUpdateSubjects({ config }: UseUpdateSubjectsOptions = {}) {
  return useMutation(updateSubjects, {
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
