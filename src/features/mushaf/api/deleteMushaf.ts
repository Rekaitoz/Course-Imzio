import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteMushafDTO = {
  id: number;
};

type DeleteMushafResponse = {
  message: string;
};

export async function deleteMushaf({ id }: DeleteMushafDTO) {
  const res = await axios.delete<DeleteMushafResponse>(`/mushaf/${id}`);

  return res.data;
}

type UseDeleteMushafOptions = {
  config?: MutationConfig<typeof deleteMushaf>;
};

export function useDeleteMushaf({ config }: UseDeleteMushafOptions = {}) {
  return useMutation(deleteMushaf, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["mushafs"]);
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
