import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateAttendanceDTO = {
  attendancename: string;
  data: {
    id: number;
    lastName: string;
    attendancename: string;
    age: number;
  };
};

type UpdateAttendanceResponse = {
  message: string;
};

export async function updateAttendance({
  attendancename,
  data,
}: UpdateAttendanceDTO) {
  const res = await axios.patch<UpdateAttendanceResponse>(
    `/attendance/${attendancename}`,
    data
  );

  return res.data;
}

type UseUpdateAttendanceOptions = {
  config?: MutationConfig<typeof updateAttendance>;
};

export function useUpdateAttendance({
  config,
}: UseUpdateAttendanceOptions = {}) {
  return useMutation(updateAttendance, {
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
