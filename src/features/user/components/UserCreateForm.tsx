import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { CreateUserDTO, useCreateUser } from "../api";
import { IconUser } from "@tabler/icons-react";

interface Props {
  onSuccess: VoidFunction;
}

const UserCreateForm: React.FC<Props> = ({ onSuccess }) => {
  const form = useForm<CreateUserDTO["data"]>({
    initialValues: {
      role: "",
      username: "",
      password: "",
    },
  });
  const { mutateAsync, isLoading } = useCreateUser({
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

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync({ data: values });
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
        <Button
          type="submit"
          loading={isLoading}
          className="bg-green-900 hover:bg-green-800"
        >
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default UserCreateForm;
