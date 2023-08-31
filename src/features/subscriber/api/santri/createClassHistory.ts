import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateClassHistoryDTO = {
  id_santri: number;
  data: {
    id_semester: number | null;
    id_kelas: number | null;
  };
};

type CreateClassHistoryResponse = {
  message: string;
};

export async function createClassHistory({
  id_santri,
  data,
}: CreateClassHistoryDTO) {
  const res = await axios.post<CreateClassHistoryResponse>(
    `/riwayatKelasSantri/${id_santri}`,
    data
  );

  return res.data;
}

type UseCreateClassHistoryOptions = {
  config?: MutationConfig<typeof createClassHistory>;
};

export function useCreateClassHistory({
  config,
}: UseCreateClassHistoryOptions = {}) {
  return useMutation(createClassHistory, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["santris"]);
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
