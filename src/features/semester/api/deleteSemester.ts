import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteSemesterDTO = {
  id: number;
};

type DeleteSemesterResponse = {
  message: string;
};

export async function deleteSemester({ id }: DeleteSemesterDTO) {
  const res = await axios.delete<DeleteSemesterResponse>(`/semester/${id}`);

  return res.data;
}

type UseDeleteSemesterOptions = {
  config?: MutationConfig<typeof deleteSemester>;
};

export function useDeleteSemester({ config }: UseDeleteSemesterOptions = {}) {
  return useMutation(deleteSemester, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["semesters"]);
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
