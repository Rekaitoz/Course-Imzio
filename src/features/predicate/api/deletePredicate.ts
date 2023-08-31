import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeletePredicateDTO = {
  id: number;
};

type DeletePredicateResponse = {
  message: string;
};

export async function deletePredicate({ id }: DeletePredicateDTO) {
  const res = await axios.delete<DeletePredicateResponse>(`/predikat/${id}`);

  return res.data;
}

type UseDeletePredicateOptions = {
  config?: MutationConfig<typeof deletePredicate>;
};

export function useDeletePredicate({ config }: UseDeletePredicateOptions = {}) {
  return useMutation(deletePredicate, {
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
