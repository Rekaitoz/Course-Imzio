import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateScheduleDTO = {
  data: {
    jadwal_mapel: {
      id_jadwal_mapel: number;
      id_mapel: number;
      id_guru: number;
    }[];
  };
};

type UpdateScheduleResponse = {
  message: string;
};

export async function updateSchedule({ data }: UpdateScheduleDTO) {
  const res = await axios.post<UpdateScheduleResponse>(`/jadwalMapel`, data);

  return res.data;
}

type UseUpdateScheduleOptions = {
  config?: MutationConfig<typeof updateSchedule>;
};

export function useUpdateSchedule({ config }: UseUpdateScheduleOptions = {}) {
  return useMutation(updateSchedule, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["subjectsSchedules"]);
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
