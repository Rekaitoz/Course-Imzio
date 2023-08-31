import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { CreateAttendanceDTO, useCreateAttendance } from "../api";

interface Props {
  onSuccess: VoidFunction;
}

const AttendanceCreateForm: React.FC<Props> = ({ onSuccess }) => {
  const form = useForm<CreateAttendanceDTO["data"]>({
    initialValues: {
      role: "",
      attendancename: "",
      password: "",
    },
  });
  const { mutateAsync, isLoading } = useCreateAttendance({
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
          label="Mata Pelajaran"
          required
          {...form.getInputProps("attendance")}
        />
        <Select
          label="Guru"
          placeholder=""
          searchable
          required
          data={[
            { value: "Rizky", label: "Rizky" },
            { value: "Iman", label: "Iman" },
            { value: "Dana", label: "Dana" },
          ]}
        />
        <Select
          label="Kategori"
          placeholder=""
          searchable
          required
          data={[
            { value: "Umum", label: "Umum" },
            { value: "Tahfidz", label: "Tahfidz" },
          ]}
        />
        <Select
          label="Jenis Penilaian"
          placeholder=""
          searchable
          required
          data={[
            { value: "Umum", label: "Umum" },
            { value: "Utama", label: "Utama" },
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

export default AttendanceCreateForm;
