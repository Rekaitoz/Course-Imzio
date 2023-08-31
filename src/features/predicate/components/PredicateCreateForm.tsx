import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { CreatePredicateDTO, useCreatePredicate } from "../api";

interface Props {
  onSuccess: VoidFunction;
}

const PredicateCreateForm: React.FC<Props> = ({ onSuccess }) => {
  const form = useForm<CreatePredicateDTO["data"]>({
    initialValues: {
      nama_predikat: "",
      keterangan: "",
    },
  });
  const { mutateAsync, isLoading } = useCreatePredicate({
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

export default PredicateCreateForm;
