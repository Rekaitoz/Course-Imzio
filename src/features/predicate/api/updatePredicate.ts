import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdatePredicateDTO = {
  id: number;
  data: {
    nama_predikat: string;
    keterangan: string;
  };
};

type UpdatePredicateResponse = {
  message: string;
};

export async function updatePredicate({ id, data }: UpdatePredicateDTO) {
  const res = await axios.put<UpdatePredicateResponse>(`/predikat/${id}`, data);

  return res.data;
}

type UseUpdatePredicateOptions = {
  config?: MutationConfig<typeof updatePredicate>;
};

export function useUpdatePredicate({ config }: UseUpdatePredicateOptions = {}) {
  return useMutation(updatePredicate, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["predicates"]);
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
