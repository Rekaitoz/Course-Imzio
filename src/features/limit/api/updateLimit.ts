import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateLimitDTO = {
  limitname: string;
  data: {
    id: number;
    lastName: string;
    limitname: string;
    age: number;
  };
};

type UpdateLimitResponse = {
  message: string;
};

export async function updateLimit({ limitname, data }: UpdateLimitDTO) {
  const res = await axios.patch<UpdateLimitResponse>(
    `/limit/${limitname}`,
    data
  );

  return res.data;
}

type UseUpdateLimitOptions = {
  config?: MutationConfig<typeof updateLimit>;
};

export function useUpdateLimit({ config }: UseUpdateLimitOptions = {}) {
  return useMutation(updateLimit, {
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
