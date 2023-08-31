import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateCategoryDTO = {
  data: {
    nama_kategori: string;
    operator: number;
  };
};

type CreateCategoryResponse = {
  message: string;
};

export async function createCategory({ data }: CreateCategoryDTO) {
  const res = await axios.post<CreateCategoryResponse>("/kategoriMapel", data);

  return res.data;
}

type UseCreateCategoryOptions = {
  config?: MutationConfig<typeof createCategory>;
};

export function useCreateCategory({ config }: UseCreateCategoryOptions = {}) {
  return useMutation(createCategory, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["categorys"]);
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
