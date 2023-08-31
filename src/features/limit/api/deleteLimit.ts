import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteLimitDTO = {
  id: number;
};

type DeleteLimitResponse = {
  message: string;
};

export async function deleteLimit({ id }: DeleteLimitDTO) {
  const res = await axios.delete<DeleteLimitResponse>(`/limit/${id}`);

  return res.data;
}

type UseDeleteLimitOptions = {
  config?: MutationConfig<typeof deleteLimit>;
};

export function useDeleteLimit({ config }: UseDeleteLimitOptions = {}) {
  return useMutation(deleteLimit, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["limits"]);
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
