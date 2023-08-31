import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateActivityDTO = {
  activityname: string;
  data: {
    id: number;
    lastName: string;
    activityname: string;
    age: number;
  };
};

type UpdateActivityResponse = {
  message: string;
};

export async function updateActivity({
  activityname,
  data,
}: UpdateActivityDTO) {
  const res = await axios.patch<UpdateActivityResponse>(
    `/activity/${activityname}`,
    data
  );

  return res.data;
}

type UseUpdateActivityOptions = {
  config?: MutationConfig<typeof updateActivity>;
};

export function useUpdateActivity({ config }: UseUpdateActivityOptions = {}) {
  return useMutation(updateActivity, {
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
