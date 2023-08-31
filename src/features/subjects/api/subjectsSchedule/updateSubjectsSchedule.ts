import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateSubjectsScheduleDTO = {
  id_jadwal_mapel: number;
  data: {
    id_kelas: number | null;
    id_mapel: number | null;
    id_guru: number | null;
    id_semester: number | null;
    id_jam_pelajaran: number | null;
    tgl_mulai: string | Date;
    tgl_selesai: string | Date;
    operator: number;
  };
};

type UpdateSubjectsScheduleResponse = {
  message: string;
};

export async function updateSubjectsSchedule({
  id_jadwal_mapel,
  data,
}: UpdateSubjectsScheduleDTO) {
  const res = await axios.put<UpdateSubjectsScheduleResponse>(
    `/jadwalMapel/${id_jadwal_mapel}`,
    data
  );

  return res.data;
}

type UseUpdateSubjectsScheduleOptions = {
  config?: MutationConfig<typeof updateSubjectsSchedule>;
};

export function useUpdateSubjectsSchedule({
  config,
}: UseUpdateSubjectsScheduleOptions = {}) {
  return useMutation(updateSubjectsSchedule, {
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
