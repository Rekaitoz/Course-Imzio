import {
  Button,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { CreateMushafDTO, useCreateMushaf } from "../api";
import { DateInput } from "@mantine/dates";

interface Props {
  onSuccess: VoidFunction;
}

const MushafCreateForm: React.FC<Props> = ({ onSuccess }) => {
  const form = useForm<CreateMushafDTO["data"]>({
    initialValues: {
      jenis_mushaf: "Standar Ustmani",
      juz: 1,
      dari_halaman: 1,
      sampai_halaman: 1,
    },
  });
  const { mutateAsync, isLoading } = useCreateMushaf({
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
    <form className="relative px-5 pb-5" onSubmit={handleSubmit}>
      <div className="grid gap-x-5 gap-y-5 pb-20 lg:space-y-0">
        <Select
          label="Jenis Mushaf"
          placeholder=""
          searchable
          required
          data={[
            { value: "Standar Ustmani", label: "Standar Ustmani" },
            { value: "Standar Bahriyah", label: "Standar Bahriyah" },
            { value: "Standar Braille", label: "Standar Braille" },
          ]}
          {...form.getInputProps("jenis_mushaf")}
        />
        <Select
          label="Juz"
          placeholder=""
          searchable
          required
          data={Array(30)
            .fill(1)
            .map((_, index) => `${index + 1}`)}
          {...form.getInputProps("juz")}
        />
        <div className="flex items-center gap-x-4 text-sm pt-4">
          Halaman
          <NumberInput
            min={1}
            required
            defaultValue={1}
            className="w-16"
            {...form.getInputProps("dari_halaman")}
          />
          Sampai{" "}
          <NumberInput
            min={1}
            defaultValue={1}
            required
            className="w-16"
            {...form.getInputProps("sampai_halaman")}
          />
        </div>
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

export default MushafCreateForm;
