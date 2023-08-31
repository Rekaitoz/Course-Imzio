import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateMushafDTO = {
  data: {
    jenis_mushaf: string;
    juz: number | null;
    dari_halaman: number | null;
    sampai_halaman: number | null;
  };
};

type CreateMushafResponse = {
  message: string;
};

export async function createMushaf({ data }: CreateMushafDTO) {
  const res = await axios.post<CreateMushafResponse>("/mushaf", data);

  return res.data;
}

type UseCreateMushafOptions = {
  config?: MutationConfig<typeof createMushaf>;
};

export function useCreateMushaf({ config }: UseCreateMushafOptions = {}) {
  return useMutation(createMushaf, {
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
