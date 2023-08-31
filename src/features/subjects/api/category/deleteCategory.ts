import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

type DeleteCatedeleteCategoryDTO = {
  id: number;
};

type DeleteCatedeleteCategoryResponse = {
  message: string;
};

export async function deleteCategory({ id }: DeleteCatedeleteCategoryDTO) {
  const res = await axios.delete<DeleteCatedeleteCategoryResponse>(
    `/catedeleteCategory/${id}`
  );

  return res.data;
}

type UseDeleteCatedeleteCategoryOptions = {
  config?: MutationConfig<typeof deleteCategory>;
};

export function useDeleteCatedeleteCategory({
  config,
}: UseDeleteCatedeleteCategoryOptions = {}) {
  return useMutation(deleteCategory, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["catedeleteCategorys"]);
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
