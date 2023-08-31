import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteAttendanceDTO = {
  id: number;
};

type DeleteAttendanceResponse = {
  message: string;
};

export async function deleteAttendance({ id }: DeleteAttendanceDTO) {
  const res = await axios.delete<DeleteAttendanceResponse>(`/attendance/${id}`);

  return res.data;
}

type UseDeleteAttendanceOptions = {
  config?: MutationConfig<typeof deleteAttendance>;
};

export function useDeleteAttendance({
  config,
}: UseDeleteAttendanceOptions = {}) {
  return useMutation(deleteAttendance, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["attendances"]);
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
