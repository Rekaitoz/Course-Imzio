import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdateUserDTO, useUpdateUser } from "../api";
import { IconUser } from "@tabler/icons-react";
// import { User } from "../types";

interface Props {
  user: { id: number; lastName: string; username: string; age: number };
  onSuccess: VoidFunction;
}

const UserUpdateForm: React.FC<Props> = ({ user, onSuccess }) => {
  const form = useForm<UpdateUserDTO["data"]>({
    initialValues: {
      id: user.id,
      username: user.username,
      lastName: user.lastName,
      age: user.age,
    },
  });
  const { mutateAsync, isLoading } = useUpdateUser({
    config: {
      onError({ response }) {
        form.setErrors((response?.data as any).errors);
      },
      onSuccess() {
        closeAllModals();
        onSuccess();
      },
    },
  });

  const handleSubmit = form.onSubmit(async (data) => {
    await mutateAsync({
      username: user.username,
      data: {
        ...data,
        // password: !!data.password ? data.password : undefined,
      },
    });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
      <div className="grid gap-y-4 lg:space-y-0">
        <TextInput
          label="Username"
          required
          rightSection={<IconUser className="h-4 text-slate-500 ml-1" />}
          {...form.getInputProps("username")}
        />
        <PasswordInput
          placeholder="*Tidak Perlu Diisi Jika tidak diganti"
          label="Password"
          required
          {...form.getInputProps("password")}
        />
        <Select
          label="Level"
          placeholder=""
          searchable
          required
          data={[
            { value: "SuperAdmin", label: "Super Admin" },
            { value: "Admin", label: "Admin" },
            { value: "Kasir", label: "Kasirv" },
          ]}
        />
      </div>

      <div className="flex items-center justify-end gap-4 mt-4">
        <Button
          type="button"
          variant="default"
          onClick={() => closeAllModals()}
          loading={isLoading}
        >
          Tutup
        </Button>
        <Button type="submit" loading={isLoading} className="bg-green-900">
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default UserUpdateForm;
