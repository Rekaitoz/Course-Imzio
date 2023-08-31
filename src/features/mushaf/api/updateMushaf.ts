import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateMushafDTO = {
  id: number;
  data: {
    jenis_mushaf: string;
    juz: number | null;
    halaman: number | null;
  };
};

type UpdateMushafResponse = {
  message: string;
};

export async function updateMushaf({ id, data }: UpdateMushafDTO) {
  const res = await axios.put<UpdateMushafResponse>(`/mushaf/${id}`, data);

  return res.data;
}

type UseUpdateMushafOptions = {
  config?: MutationConfig<typeof updateMushaf>;
};

export function useUpdateMushaf({ config }: UseUpdateMushafOptions = {}) {
  return useMutation(updateMushaf, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["mushafs"]);
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
