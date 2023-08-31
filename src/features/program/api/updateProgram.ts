import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateProgramDTO = {
  id_program: number;
  data: {
    nama_program: string;
    deskripsi: string;
    jenis: string;
  };
};

type UpdateProgramResponse = {
  message: string;
};

export async function updateProgram({ id_program, data }: UpdateProgramDTO) {
  const res = await axios.put<UpdateProgramResponse>(
    `/program/${id_program}`,
    data
  );

  return res.data;
}

type UseUpdateProgramOptions = {
  config?: MutationConfig<typeof updateProgram>;
};

export function useUpdateProgram({ config }: UseUpdateProgramOptions = {}) {
  return useMutation(updateProgram, {
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
