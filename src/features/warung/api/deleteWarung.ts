import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteWarungDTO = {
  id: number;
};

type DeleteWarungResponse = {
  message: string;
};

export async function deleteWarung({ id }: DeleteWarungDTO) {
  const res = await axios.delete<DeleteWarungResponse>(`/warung/${id}`);

  return res.data;
}

type UseDeleteWarungOptions = {
  config?: MutationConfig<typeof deleteWarung>;
};

export function useDeleteWarung({ config }: UseDeleteWarungOptions = {}) {
  return useMutation(deleteWarung, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["warungs"]);
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
