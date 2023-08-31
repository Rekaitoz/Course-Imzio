import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdateProgramDTO, useUpdateProgram } from "../api";
import { IconUser } from "@tabler/icons-react";
// import { Program } from "../types";

interface Props {
  program: {
    id_program: number;
    nama_program: string;
    deskripsi: string;
    jenis: string;
  };
  onSuccess: VoidFunction;
}

const ProgramUpdateForm: React.FC<Props> = ({ program, onSuccess }) => {
  const form = useForm<UpdateProgramDTO["data"]>({
    initialValues: {
      nama_program: program.nama_program,
      jenis: program.jenis,
      deskripsi: program.deskripsi,
    },
  });
  const { mutateAsync, isLoading } = useUpdateProgram({
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
      id_program: program.id_program,
      data: {
        ...data,
        // password: !!data.password ? data.password : undefined,
      },
    });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
      <div className="grid gap-y-4 lg:space-y-0">
        <TextInput
          label="Nama Program"
          required
          {...form.getInputProps("nama_program")}
        />
        <Select
          label="Jenis"
          placeholder=""
          required
          data={[
            { value: "Umum", label: "Umum" },
            { value: "Tahfiz", label: "Tahfiz" },
          ]}
          {...form.getInputProps("jenis")}
        />
        <Textarea
          label="Deskripsi"
          required
          {...form.getInputProps("deskripsi")}
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

export default ProgramUpdateForm;
