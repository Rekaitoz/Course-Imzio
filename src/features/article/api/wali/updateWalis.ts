import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateWaliDTO = {
  waliname: string;
  data: {
    id: number;
    lastName: string;
    waliname: string;
    age: number;
  };
};

type UpdateWaliResponse = {
  message: string;
};

export async function updateWali({ waliname, data }: UpdateWaliDTO) {
  const res = await axios.patch<UpdateWaliResponse>(`/wali/${waliname}`, data);

  return res.data;
}

type UseUpdateWaliOptions = {
  config?: MutationConfig<typeof updateWali>;
};

export function useUpdateWali({ config }: UseUpdateWaliOptions = {}) {
  return useMutation(updateWali, {
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
