import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateTimeDTO = {
  data: {
    hari: string;
    jam_mulai: string;
    jam_selesai: string;
  };
};

type CreateTimeResponse = {
  message: string;
};

export async function createTime({ data }: CreateTimeDTO) {
  // const formData = new FormData();
  // Object.entries(data).forEach(([key, value]) => {
  //   formData.append(key, value);
  // });

  const res = await axios.post<CreateTimeResponse>("/jamPelajaran", data);

  return res.data;
}

type UseCreateTimeOptions = {
  config?: MutationConfig<typeof createTime>;
};

export function useCreateTime({ config }: UseCreateTimeOptions = {}) {
  return useMutation(createTime, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["times"]);
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
