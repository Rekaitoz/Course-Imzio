import {
  ActionIcon,
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { CreateTimeDTO, useCreateTime } from "../api";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import { useRef } from "react";

interface Props {
  onSuccess: VoidFunction;
}

const TimeCreateForm: React.FC<Props> = ({ onSuccess }) => {
  const ref = useRef<HTMLInputElement>();
  const ref1 = useRef<HTMLInputElement>();
  const form = useForm<CreateTimeDTO["data"]>({
    initialValues: {
      hari: "",
      jam_mulai: "",
      jam_selesai: "",
    },
  });
  const { mutateAsync, isLoading } = useCreateTime({
    config: {
      onError({ response }) {
        form.setErrors((response?.data as any).messages);
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
        <Select
          label="Hari"
          placeholder=""
          searchable
          required
          data={[
            { value: "senin", label: "Senin" },
            { value: "selasa", label: "Selasa" },
            { value: "rabu", label: "Rabu" },
            { value: "kamis", label: "Kamis" },
            { value: "jumat", label: "Jumat" },
            { value: "sabtu", label: "Sabtu" },
            { value: "minggu", label: "Minggu" },
          ]}
          {...form.getInputProps("hari")}
        />
        <TimeInput
          required
          label="Jam Mulai"
          ref={ref as any}
          rightSection={
            <ActionIcon onClick={() => ref.current?.showPicker()}>
              <IconClock size="1rem" stroke={1.5} />
            </ActionIcon>
          }
          {...form.getInputProps("jam_mulai")}
        />
        <TimeInput
          required
          label="Jam Berakhir"
          ref={ref1 as any}
          rightSection={
            <ActionIcon onClick={() => ref1.current?.showPicker()}>
              <IconClock size="1rem" stroke={1.5} />
            </ActionIcon>
          }
          {...form.getInputProps("jam_selesai")}
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

export default TimeCreateForm;
