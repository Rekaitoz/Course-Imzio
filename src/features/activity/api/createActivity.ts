import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateActivityDTO = {
  data: {
    activityname: string;
    password: string;
    role: string;
  };
};

type CreateActivityResponse = {
  message: string;
};

export async function createActivity({ data }: CreateActivityDTO) {
  const res = await axios.post<CreateActivityResponse>("/activity", data);

  return res.data;
}

type UseCreateActivityOptions = {
  config?: MutationConfig<typeof createActivity>;
};

export function useCreateActivity({ config }: UseCreateActivityOptions = {}) {
  return useMutation(createActivity, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["activitys"]);
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
