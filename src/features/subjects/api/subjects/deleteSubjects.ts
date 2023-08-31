import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteSubjectsDTO = {
  id_mapel: number;
};

type DeleteSubjectsResponse = {
  message: string;
};

export async function deleteSubjects({ id_mapel }: DeleteSubjectsDTO) {
  const res = await axios.delete<DeleteSubjectsResponse>(`/mapel/${id_mapel}`);

  return res.data;
}

type UseDeleteSubjectsOptions = {
  config?: MutationConfig<typeof deleteSubjects>;
};

export function useDeleteSubjects({ config }: UseDeleteSubjectsOptions = {}) {
  return useMutation(deleteSubjects, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["subjectss"]);
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
