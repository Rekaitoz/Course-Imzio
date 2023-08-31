import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteTeacherDTO = {
  id: number;
};

type DeleteTeacherResponse = {
  message: string;
};

export async function deleteTeacher({ id }: DeleteTeacherDTO) {
  const res = await axios.delete<DeleteTeacherResponse>(`/guru/${id}`);

  return res.data;
}

type UseDeleteTeacherOptions = {
  config?: MutationConfig<typeof deleteTeacher>;
};

export function useDeleteTeacher({ config }: UseDeleteTeacherOptions = {}) {
  return useMutation(deleteTeacher, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["teachers"]);
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
