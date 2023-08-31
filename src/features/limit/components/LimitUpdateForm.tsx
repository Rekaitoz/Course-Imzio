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
import { UpdateLimitDTO, useUpdateLimit } from "../api";
// import { Limit } from "../types";

interface Props {
  limit: { id: number; lastName: string; limitname: string; age: number };
  onSuccess: VoidFunction;
}

const LimitUpdateForm: React.FC<Props> = ({ limit, onSuccess }) => {
  const form = useForm<UpdateLimitDTO["data"]>({
    initialValues: {
      id: limit.id,
      limitname: limit.limitname,
      lastName: limit.lastName,
      age: limit.age,
    },
  });
  const { mutateAsync, isLoading } = useUpdateLimit({
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
      limitname: limit.limitname,
      data: {
        ...data,
        // password: !!data.password ? data.password : undefined,
      },
    });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
      <div className="grid gap-y-4 lg:space-y-0">
        <NumberInput
          label="Nominal"
          required
          min={0}
          icon={<span className="text-slate-700 font-medium">Rp</span>}
          {...form.getInputProps("nominal")}
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

export default LimitUpdateForm;
