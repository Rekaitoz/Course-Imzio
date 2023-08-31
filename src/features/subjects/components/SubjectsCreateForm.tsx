import {
  Accordion,
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { CreateSubjectsDTO, useCategorys, useCreateSubjects } from "../api";
import { IconPlus } from "@tabler/icons-react";
import { useTeachers } from "features/teacher";
import { useMemo } from "react";
import { usePrograms } from "features/program";

interface Props {
  onSuccess: VoidFunction;
}

const SubjectsCreateForm: React.FC<Props> = ({ onSuccess }) => {
  const form = useForm<CreateSubjectsDTO["data"]>({
    initialValues: {
      nama_mapel: "",
      id_kategori_mapel: null,
      id_program: null,
      id_guru: null,
      jenis: "umum",
      operator: 1,
    },
  });

  const { data: teacher } = useTeachers();
  const { data: category } = useCategorys();
  const { data: programs } = usePrograms();

  const { mutateAsync, isLoading } = useCreateSubjects({
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

  const guru = useMemo(() => {
    return (teacher ?? []).map(({ nama_guru, id_guru }: any) => ({
      label: nama_guru,
      value: id_guru,
    }));
  }, [teacher]);

  const kategori = useMemo(() => {
    return (category ?? []).map(
      ({ nama_kategori, id_kategori_mapel }: any) => ({
        label: nama_kategori,
        value: id_kategori_mapel,
      })
    );
  }, [category]);

  const program = useMemo(() => {
    return (programs ?? []).map(({ nama_program, id_program }: any) => ({
      label: nama_program,
      value: id_program,
    }));
  }, [programs]);

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync({ data: values });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
      <div className="grid gap-y-4 lg:space-y-0">
        <TextInput
          label="Mata Pelajaran"
          required
          {...form.getInputProps("nama_mapel")}
        />
        <Select
          label="Program"
          placeholder=""
          searchable
          required
          data={program}
          {...form.getInputProps("id_program")}
        />
        <Select
          label="Kategori"
          placeholder=""
          searchable
          required
          data={kategori}
          {...form.getInputProps("id_kategori_mapel")}
        />
        <Select
          label="Guru"
          placeholder=""
          searchable
          required
          data={guru}
          {...form.getInputProps("id_guru")}
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

export default SubjectsCreateForm;
