import { showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { MutationConfig, queryClient } from "lib/react-query";

export type UpdateUserDTO = {
  username: string;
  data: {
    id: number;
    lastName: string;
    username: string;
    age: number;
  };
};

type UpdateUserResponse = {
  message: string;
};

export async function updateUser({ username, data }: UpdateUserDTO) {
  const res = await axios.patch<UpdateUserResponse>(`/user/${username}`, data);

  return res.data;
}

type UseUpdateUserOptions = {
  config?: MutationConfig<typeof updateUser>;
};

export function useUpdateUser({ config }: UseUpdateUserOptions = {}) {
  return useMutation(updateUser, {
    ...config,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(["users"]);
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
