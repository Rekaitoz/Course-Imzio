import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteActivityDTO = {
  id: number;
};

type DeleteActivityResponse = {
  message: string;
};

export async function deleteActivity({ id }: DeleteActivityDTO) {
  const res = await axios.delete<DeleteActivityResponse>(`/activity/${id}`);

  return res.data;
}

type UseDeleteActivityOptions = {
  config?: MutationConfig<typeof deleteActivity>;
};

export function useDeleteActivity({ config }: UseDeleteActivityOptions = {}) {
  return useMutation(deleteActivity, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["activitys"]);
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
