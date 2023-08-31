import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreatePredicateDTO = {
  data: {
    nama_predikat: string;
    keterangan: string;
  };
};

type CreatePredicateResponse = {
  message: string;
};

export async function createPredicate({ data }: CreatePredicateDTO) {
  const res = await axios.post<CreatePredicateResponse>("/predikat", data);

  return res.data;
}

type UseCreatePredicateOptions = {
  config?: MutationConfig<typeof createPredicate>;
};

export function useCreatePredicate({ config }: UseCreatePredicateOptions = {}) {
  return useMutation(createPredicate, {
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
