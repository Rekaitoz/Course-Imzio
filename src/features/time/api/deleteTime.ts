import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteTimeDTO = {
  id: number;
};

type DeleteTimeResponse = {
  message: string;
};

export async function deleteTime({ id }: DeleteTimeDTO) {
  const res = await axios.delete<DeleteTimeResponse>(`/jamPelajaran/${id}`);

  return res.data;
}

type UseDeleteTimeOptions = {
  config?: MutationConfig<typeof deleteTime>;
};

export function useDeleteTime({ config }: UseDeleteTimeOptions = {}) {
  return useMutation(deleteTime, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["times"]);
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
