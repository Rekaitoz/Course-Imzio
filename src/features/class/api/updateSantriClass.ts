import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateSantriDTO = {
  data: {
    id_kelas: number;
    santri: { id_santri: number | null }[];
  };
};

type UpdateSantriResponse = {
  message: string;
};

export async function updateSantri({ data }: UpdateSantriDTO) {
  const res = await axios.post<UpdateSantriResponse>(
    `/riwayatKelasSantri`,
    data
  );

  return res.data;
}

type UseUpdateSantriOptions = {
  config?: MutationConfig<typeof updateSantri>;
};

export function useUpdateSantri({ config }: UseUpdateSantriOptions = {}) {
  return useMutation(updateSantri, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["classs"]);
      queryClient.invalidateQueries(["tahfizs"]);
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
