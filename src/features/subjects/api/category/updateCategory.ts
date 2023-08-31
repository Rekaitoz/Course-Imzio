import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateCategoryDTO = {
  id_kategori_mapel: number;
  data: {
    nama_kategori: string;
    operator: number;
  };
};

type UpdateCategoryResponse = {
  message: string;
};

export async function updateCategory({
  id_kategori_mapel,
  data,
}: UpdateCategoryDTO) {
  const res = await axios.put<UpdateCategoryResponse>(
    `/kategoriMapel/${id_kategori_mapel}`,
    data
  );

  return res.data;
}

type UseUpdateCategoryOptions = {
  config?: MutationConfig<typeof updateCategory>;
};

export function useUpdateCategory({ config }: UseUpdateCategoryOptions = {}) {
  return useMutation(updateCategory, {
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
