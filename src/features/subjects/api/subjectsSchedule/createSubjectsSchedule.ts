import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateSubjectsScheduleDTO = {
  data: {
    id_kelas: number | null;
    id_mapel: number | null;
    id_guru: number | null;
    id_semester: number | null;
    id_jam_pelajaran: number | null;
    tgl_mulai: string;
    tgl_selesai: string;
    operator: 1;
  };
};

type CreateSubjectsScheduleResponse = {
  message: string;
};

export async function createSubjectsSchedule({
  data,
}: CreateSubjectsScheduleDTO) {
  const res = await axios.post<CreateSubjectsScheduleResponse>(
    "/jadwalMapel",
    data
  );

  return res.data;
}

type UseCreateSubjectsScheduleOptions = {
  config?: MutationConfig<typeof createSubjectsSchedule>;
};

export function useCreateSubjectsSchedule({
  config,
}: UseCreateSubjectsScheduleOptions = {}) {
  return useMutation(createSubjectsSchedule, {
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
