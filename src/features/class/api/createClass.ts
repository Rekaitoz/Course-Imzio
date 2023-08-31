import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateClassDTO = {
  data: {
    nama_kelas: string;
    jenis: string;
    id_wali_kelas: number | null;
    operator: any;
  };
};

type CreateClassResponse = {
  message: string;
};

export async function createClass({ data }: CreateClassDTO) {
  const res = await axios.post<CreateClassResponse>("/kelas", data);

  return res.data;
}

type UseCreateClassOptions = {
  config?: MutationConfig<typeof createClass>;
};

export function useCreateClass({ config }: UseCreateClassOptions = {}) {
  return useMutation(createClass, {
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
