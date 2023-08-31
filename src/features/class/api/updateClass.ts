import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateClassDTO = {
  id_kelas: number;
  data: {
    nama_kelas: string;
    jenis: string;
    id_wali_kelas: number;
    operator: number;
  };
};

type UpdateClassResponse = {
  message: string;
};

export async function updateClass({ id_kelas, data }: UpdateClassDTO) {
  const res = await axios.put<UpdateClassResponse>(`/kelas/${id_kelas}`, data);

  return res.data;
}

type UseUpdateClassOptions = {
  config?: MutationConfig<typeof updateClass>;
};

export function useUpdateClass({ config }: UseUpdateClassOptions = {}) {
  return useMutation(updateClass, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["classs"]);
      queryClient.invalidateQueries(["tahfizs"]);
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
