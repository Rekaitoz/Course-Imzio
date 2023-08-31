import {
  Button,
  NumberInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdateMushafDTO, useUpdateMushaf } from "../api";
import { DateInput } from "@mantine/dates";

// import { Mushaf } from "../types";

interface Props {
  mushaf: { id: number; jenis_mushaf: string; juz: string; halaman: string };
  onSuccess: VoidFunction;
}

const MushafUpdateForm: React.FC<Props> = ({ mushaf, onSuccess }) => {
  const form = useForm<UpdateMushafDTO["data"]>({
    initialValues: {
      jenis_mushaf: mushaf.jenis_mushaf,
      juz: parseInt(mushaf.juz),
      halaman: parseInt(mushaf.halaman),
    },
  });

  const { mutateAsync, isLoading } = useUpdateMushaf({
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
      id: mushaf.id,
      data: {
        ...data,
      },
    });
  });

  return (
    <form className="relative px-7 pb-5" onSubmit={handleSubmit}>
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
        <NumberInput
          label="Juz"
          min={1}
          max={30}
          placeholder=""
          required
          {...form.getInputProps("juz")}
        />
        <NumberInput
          label="Halaman"
          min={1}
          placeholder=""
          required
          {...form.getInputProps("halaman")}
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

export default MushafUpdateForm;
