import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateWarungDTO = {
  warungname: string;
  data: {
    id: number;
    lastName: string;
    warungname: string;
    age: number;
  };
};

type UpdateWarungResponse = {
  message: string;
};

export async function updateWarung({ warungname, data }: UpdateWarungDTO) {
  const res = await axios.patch<UpdateWarungResponse>(
    `/warung/${warungname}`,
    data
  );

  return res.data;
}

type UseUpdateWarungOptions = {
  config?: MutationConfig<typeof updateWarung>;
};

export function useUpdateWarung({ config }: UseUpdateWarungOptions = {}) {
  return useMutation(updateWarung, {
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
