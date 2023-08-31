import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteSubjectsScheduleDTO = {
  id_jadwal_mapel: number;
};

type DeleteSubjectsScheduleResponse = {
  message: string;
};

export async function deleteSubjectsSchedule({
  id_jadwal_mapel,
}: DeleteSubjectsScheduleDTO) {
  const res = await axios.delete<DeleteSubjectsScheduleResponse>(
    `/jadwalMapel/${id_jadwal_mapel}`
  );

  return res.data;
}

type UseDeleteSubjectsScheduleOptions = {
  config?: MutationConfig<typeof deleteSubjectsSchedule>;
};

export function useDeleteSubjectsSchedule({
  config,
}: UseDeleteSubjectsScheduleOptions = {}) {
  return useMutation(deleteSubjectsSchedule, {
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
