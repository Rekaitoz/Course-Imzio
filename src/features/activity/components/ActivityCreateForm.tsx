import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { CreateActivityDTO, useCreateActivity } from "../api";
import { IconActivity } from "@tabler/icons-react";
import { DateInput } from "@mantine/dates";

interface Props {
  onSuccess: VoidFunction;
}

const ActivityCreateForm: React.FC<Props> = ({ onSuccess }) => {
  const form = useForm<CreateActivityDTO["data"]>({
    initialValues: {
      role: "",
      activityname: "",
      password: "",
    },
  });
  const { mutateAsync, isLoading } = useCreateActivity({
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
    <form className="static px-3 pb-5" onSubmit={handleSubmit}>
      <div className="grid gap-y-10 pb-52 lg:space-y-0">
        <TextInput
          label="Nama Kegiatan"
          required
          {...form.getInputProps("name")}
        />
        <DateInput
          label="Tanggal Mulai"
          required
          {...form.getInputProps("startDate")}
        />
        <DateInput
          label="Tanggal Berakhir"
          required
          {...form.getInputProps("endDate")}
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

export default ActivityCreateForm;
