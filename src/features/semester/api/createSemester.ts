import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateSemesterDTO = {
  data: {
    semester: string;
    tanggal_awal: Date | string;
    tanggal_akhir: Date | string;
  };
};

type CreateSemesterResponse = {
  message: string;
};

export async function createSemester({ data }: CreateSemesterDTO) {
  const res = await axios.post<CreateSemesterResponse>("/semester", data);

  return res.data;
}

type UseCreateSemesterOptions = {
  config?: MutationConfig<typeof createSemester>;
};

export function useCreateSemester({ config }: UseCreateSemesterOptions = {}) {
  return useMutation(createSemester, {
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
