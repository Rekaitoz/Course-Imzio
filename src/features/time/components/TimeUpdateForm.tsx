import {
  Button,
  ActionIcon,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdateTimeDTO, useUpdateTime } from "../api";
import { TimeInput } from "@mantine/dates";
import { IconClock } from "@tabler/icons-react";
import { useRef } from "react";
// import { Time } from "../types";

interface Props {
  time: {
    id_jam_pelajaran: number;
    hari: string;
    jam_mulai: string;
    jam_selesai: string;
  };
  onSuccess: VoidFunction;
}

const TimeUpdateForm: React.FC<Props> = ({ time, onSuccess }) => {
  const ref = useRef<HTMLInputElement>();
  const ref1 = useRef<HTMLInputElement>();
  const form = useForm<UpdateTimeDTO["data"]>({
    initialValues: {
      hari: time.hari,
      jam_mulai: time.jam_mulai,
      jam_selesai: time.jam_selesai,
    },
  });
  const { mutateAsync, isLoading } = useUpdateTime({
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

  const handleSubmit = form.onSubmit(async (data) => {
    await mutateAsync({
      id_jam_pelajaran: time.id_jam_pelajaran,
      data: {
        ...data,
        // password: !!data.password ? data.password : undefined,
      },
    });
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
            { value: "Senin", label: "Senin" },
            { value: "Selasa", label: "Selasa" },
            { value: "Rabu", label: "Rabu" },
            { value: "Kamis", label: "Kamis" },
            { value: "Jumat", label: "Jumat" },
            { value: "Sabtu", label: "Sabtu" },
            { value: "Minggu", label: "Minggu" },
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
        <Button type="submit" loading={isLoading} className="bg-green-900">
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default TimeUpdateForm;
