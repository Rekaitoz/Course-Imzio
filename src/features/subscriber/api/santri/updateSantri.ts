import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateSantriDTO = {
  santriname: string;
  data: {
    id: number;
    lastName: string;
    santriname: string;
    age: number;
  };
};

type UpdateSantriResponse = {
  message: string;
};

export async function updateSantri({ santriname, data }: UpdateSantriDTO) {
  const res = await axios.patch<UpdateSantriResponse>(
    `/santri/${santriname}`,
    data
  );

  return res.data;
}

type UseUpdateSantriOptions = {
  config?: MutationConfig<typeof updateSantri>;
};

export function useUpdateSantri({ config }: UseUpdateSantriOptions = {}) {
  return useMutation(updateSantri, {
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
