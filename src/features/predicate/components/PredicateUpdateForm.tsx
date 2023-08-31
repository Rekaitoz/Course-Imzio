import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdatePredicateDTO, useUpdatePredicate } from "../api";
// import { Predicate } from "../types";

interface Props {
  predicate: {
    id: number;
    nama_predikat: string;
    keterangan: string;
  };
  onSuccess: VoidFunction;
}

const PredicateUpdateForm: React.FC<Props> = ({ predicate, onSuccess }) => {
  const form = useForm<UpdatePredicateDTO["data"]>({
    initialValues: {
      nama_predikat: predicate.nama_predikat,
      keterangan: predicate.keterangan,
    },
  });
  const { mutateAsync, isLoading } = useUpdatePredicate({
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
      id: predicate.id,
      data: {
        ...data,
      },
    });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
      <div className="grid gap-y-4 lg:space-y-0">
        <TextInput
          label="Predikat"
          required
          {...form.getInputProps("nama_predikat")}
        />
        <TextInput
          label="Keterangan"
          required
          {...form.getInputProps("keterangan")}
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

export default PredicateUpdateForm;
