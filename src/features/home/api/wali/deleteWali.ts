import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteWaliDTO = {
  id: number;
};

type DeleteWaliResponse = {
  message: string;
};

export async function deleteWali({ id }: DeleteWaliDTO) {
  const res = await axios.delete<DeleteWaliResponse>(`/wali/${id}`);

  return res.data;
}

type UseDeleteWaliOptions = {
  config?: MutationConfig<typeof deleteWali>;
};

export function useDeleteWali({ config }: UseDeleteWaliOptions = {}) {
  return useMutation(deleteWali, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["walis"]);
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
