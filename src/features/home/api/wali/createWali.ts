import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateWaliDTO = {
  data: {
    waliname: string;
    password: string;
    role: string;
  };
};

type CreateWaliResponse = {
  message: string;
};

export async function createWali({ data }: CreateWaliDTO) {
  const res = await axios.post<CreateWaliResponse>("/wali", data);

  return res.data;
}

type UseCreateWaliOptions = {
  config?: MutationConfig<typeof createWali>;
};

export function useCreateWali({ config }: UseCreateWaliOptions = {}) {
  return useMutation(createWali, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["walis"]);
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
