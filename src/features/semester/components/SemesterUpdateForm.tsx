import { Button, Select, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdateSemesterDTO, useUpdateSemester } from "../api";
import { DateInput } from "@mantine/dates";

interface Props {
  semester: {
    id_semester: number;
    semester: string;
    tanggal_awal: string;
    tanggal_akhir: string;
  };
  onSuccess: VoidFunction;
}

const SemesterUpdateForm: React.FC<Props> = ({ semester, onSuccess }) => {
  const form = useForm({
    initialValues: {
      semester: semester.semester,
      tanggal_awal: new Date(semester.tanggal_awal),
      tanggal_akhir: new Date(semester.tanggal_akhir),
    },
  });
  const { mutateAsync, isLoading } = useUpdateSemester({
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
      id_semester: semester.id_semester,
      data: data,
    });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
      <div className="grid gap-y-4 pb-14">
        <DateInput
          label="Tanggal Dimulai"
          required
          {...form.getInputProps("tanggal_awal")}
        />
        <DateInput
          label="Tanggal Berakhir"
          required
          {...form.getInputProps("tanggal_akhir")}
        />
        <Select
          label="Semester"
          placeholder=""
          required
          data={[
            { value: "Ganjil", label: "Ganjil" },
            { value: "Genap", label: "Genap" },
          ]}
          {...form.getInputProps("semester")}
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

export default SemesterUpdateForm;
