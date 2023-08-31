import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateAttendanceDTO = {
  data: {
    attendancename: string;
    password: string;
    role: string;
  };
};

type CreateAttendanceResponse = {
  message: string;
};

export async function createAttendance({ data }: CreateAttendanceDTO) {
  const res = await axios.post<CreateAttendanceResponse>("/attendance", data);

  return res.data;
}

type UseCreateAttendanceOptions = {
  config?: MutationConfig<typeof createAttendance>;
};

export function useCreateAttendance({
  config,
}: UseCreateAttendanceOptions = {}) {
  return useMutation(createAttendance, {
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
