import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdateWarungDTO, useUpdateWarung } from "../api";
import { IconUser } from "@tabler/icons-react";
// import { Warung } from "../types";

interface Props {
  warung: { id: number; lastName: string; warungname: string; age: number };
  onSuccess: VoidFunction;
}

const WarungLimitForm: React.FC<Props> = ({ warung, onSuccess }) => {
  const form = useForm<UpdateWarungDTO["data"]>({
    initialValues: {
      id: warung.id,
      warungname: warung.warungname,
      lastName: warung.lastName,
      age: warung.age,
    },
  });
  const { mutateAsync, isLoading } = useUpdateWarung({
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
      warungname: warung.warungname,
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
          label={
            <div className="mb-4 text-xs">
              Silahkan pilih kembali limitasi santri untuk warung ini
            </div>
          }
          placeholder=""
          withAsterisk={false}
          defaultValue="aktif"
          required
          data={[
            { value: "aktif", label: "Aktif" },
            { value: "nonaktif", label: "NonAktif" },
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
        <Button type="submit" loading={isLoading} className="bg-green-900">
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default WarungLimitForm;
