import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateWarungDTO = {
  data: {
    warungname: string;
    password: string;
    role: string;
  };
};

type CreateWarungResponse = {
  message: string;
};

export async function createWarung({ data }: CreateWarungDTO) {
  const res = await axios.post<CreateWarungResponse>("/warung", data);

  return res.data;
}

type UseCreateWarungOptions = {
  config?: MutationConfig<typeof createWarung>;
};

export function useCreateWarung({ config }: UseCreateWarungOptions = {}) {
  return useMutation(createWarung, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["warungs"]);
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
