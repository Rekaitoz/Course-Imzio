import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteSantriDTO = {
  id: number;
};

type DeleteSantriResponse = {
  message: string;
};

export async function deleteSantri({ id }: DeleteSantriDTO) {
  const res = await axios.delete<DeleteSantriResponse>(`/santri/${id}`);

  return res.data;
}

type UseDeleteSantriOptions = {
  config?: MutationConfig<typeof deleteSantri>;
};

export function useDeleteSantri({ config }: UseDeleteSantriOptions = {}) {
  return useMutation(deleteSantri, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["santris"]);
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
