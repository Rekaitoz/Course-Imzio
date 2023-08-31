import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteProgramDTO = {
  id: number;
};

type DeleteProgramResponse = {
  message: string;
};

export async function deleteProgram({ id }: DeleteProgramDTO) {
  const res = await axios.delete<DeleteProgramResponse>(`/program/${id}`);

  return res.data;
}

type UseDeleteProgramOptions = {
  config?: MutationConfig<typeof deleteProgram>;
};

export function useDeleteProgram({ config }: UseDeleteProgramOptions = {}) {
  return useMutation(deleteProgram, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["programs"]);
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
