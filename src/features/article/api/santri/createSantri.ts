import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateSantriDTO = {
  data: {
    santriname: string;
    password: string;
    role: string;
  };
};

type CreateSantriResponse = {
  message: string;
};

export async function createSantri({ data }: CreateSantriDTO) {
  const res = await axios.post<CreateSantriResponse>("/santri", data);

  return res.data;
}

type UseCreateSantriOptions = {
  config?: MutationConfig<typeof createSantri>;
};

export function useCreateSantri({ config }: UseCreateSantriOptions = {}) {
  return useMutation(createSantri, {
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
