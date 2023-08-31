import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type UpdateActiveSemesterDTO = {
  id: number;
};

type UpdateActiveSemesterResponse = {
  message: string;
};

export async function updateActiveSemester({ id }: UpdateActiveSemesterDTO) {
  const res = await axios.put<UpdateActiveSemesterResponse>(
    `/changeActivedSemester/${id}`
  );

  return res.data;
}

type UseUpdateActiveSemesterOptions = {
  config?: MutationConfig<typeof updateActiveSemester>;
};

export function useUpdateActiveSemester({
  config,
}: UseUpdateActiveSemesterOptions = {}) {
  return useMutation(updateActiveSemester, {
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
