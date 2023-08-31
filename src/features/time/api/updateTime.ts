import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateTimeDTO = {
  id_jam_pelajaran: number;
  data: {
    hari: string;
    jam_mulai: string;
    jam_selesai: string;
  };
};

type UpdateTimeResponse = {
  message: string;
};

export async function updateTime({ id_jam_pelajaran, data }: UpdateTimeDTO) {
  const res = await axios.put<UpdateTimeResponse>(
    `/jamPelajaran/${id_jam_pelajaran}`,
    data
  );

  return res.data;
}

type UseUpdateTimeOptions = {
  config?: MutationConfig<typeof updateTime>;
};

export function useUpdateTime({ config }: UseUpdateTimeOptions = {}) {
  return useMutation(updateTime, {
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
