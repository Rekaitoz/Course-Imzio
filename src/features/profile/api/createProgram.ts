import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type CreateProgramDTO = {
  data: {
    nama_program: string;
    deskripsi: string;
    jenis: string;
  };
};

type CreateProgramResponse = {
  message: string;
};

export async function createProgram({ data }: CreateProgramDTO) {
  const res = await axios.post<CreateProgramResponse>("/program", data);

  return res.data;
}

type UseCreateProgramOptions = {
  config?: MutationConfig<typeof createProgram>;
};

export function useCreateProgram({ config }: UseCreateProgramOptions = {}) {
  return useMutation(createProgram, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["programs"]);
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
