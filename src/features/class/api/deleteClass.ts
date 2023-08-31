import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteClassDTO = {
  id_kelas: number;
};

type DeleteClassResponse = {
  message: string;
};

export async function deleteClass({ id_kelas }: DeleteClassDTO) {
  const res = await axios.delete<DeleteClassResponse>(`/kelas/${id_kelas}`);

  return res.data;
}

type UseDeleteClassOptions = {
  config?: MutationConfig<typeof deleteClass>;
};

export function useDeleteClass({ config }: UseDeleteClassOptions = {}) {
  return useMutation(deleteClass, {
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
