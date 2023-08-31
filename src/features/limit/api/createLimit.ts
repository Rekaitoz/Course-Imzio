import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateLimitDTO = {
  data: {
    limitname: string;
    password: string;
    role: string;
  };
};

type CreateLimitResponse = {
  message: string;
};

export async function createLimit({ data }: CreateLimitDTO) {
  const res = await axios.post<CreateLimitResponse>("/limit", data);

  return res.data;
}

type UseCreateLimitOptions = {
  config?: MutationConfig<typeof createLimit>;
};

export function useCreateLimit({ config }: UseCreateLimitOptions = {}) {
  return useMutation(createLimit, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["limits"]);
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
