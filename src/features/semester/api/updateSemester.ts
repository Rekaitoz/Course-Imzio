import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateSemesterDTO = {
  id_semester: number;
  data: {
    semester: string;
    tanggal_awal: Date | string;
    tanggal_akhir: Date | string;
  };
};

type UpdateSemesterResponse = {
  message: string;
};

export async function updateSemester({ id_semester, data }: UpdateSemesterDTO) {
  const res = await axios.put<UpdateSemesterResponse>(
    `/semester/${id_semester}`,
    data
  );

  return res.data;
}

type UseUpdateSemesterOptions = {
  config?: MutationConfig<typeof updateSemester>;
};

export function useUpdateSemester({ config }: UseUpdateSemesterOptions = {}) {
  return useMutation(updateSemester, {
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
