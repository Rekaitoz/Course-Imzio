import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdateActivityDTO, useUpdateActivity } from "../api";
import { IconActivity } from "@tabler/icons-react";
import { DateInput } from "@mantine/dates";
// import { Activity } from "../types";

interface Props {
  activity: { id: number; lastName: string; activityname: string; age: number };
  onSuccess: VoidFunction;
}

const ActivityUpdateForm: React.FC<Props> = ({ activity, onSuccess }) => {
  const form = useForm<UpdateActivityDTO["data"]>({
    initialValues: {
      id: activity.id,
      activityname: activity.activityname,
      lastName: activity.lastName,
      age: activity.age,
    },
  });
  const { mutateAsync, isLoading } = useUpdateActivity({
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
      activityname: activity.activityname,
      data: {
        ...data,
        // password: !!data.password ? data.password : undefined,
      },
    });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
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
        <Button type="submit" loading={isLoading} className="bg-green-900">
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default ActivityUpdateForm;
