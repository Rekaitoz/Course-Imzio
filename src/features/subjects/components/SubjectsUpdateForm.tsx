import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdateSubjectsDTO, useCategorys, useUpdateSubjects } from "../api";
import { useTeachers } from "features/teacher";
import { usePrograms } from "features/program";
import { useMemo } from "react";
// import { Subjects } from "../types";

interface Props {
  subjects: {
    id_mapel: number;
    nama_mapel: string;
    id_kategori_mapel: number;
    id_program: number;
    id_guru: number;
    jenis: string;
    operator: 1;
  };
  onSuccess: VoidFunction;
}

const SubjectsUpdateForm: React.FC<Props> = ({ subjects, onSuccess }) => {
  const form = useForm<UpdateSubjectsDTO["data"]>({
    initialValues: {
      nama_mapel: subjects.nama_mapel,
      id_kategori_mapel: subjects.id_kategori_mapel,
      id_program: subjects.id_program,
      id_guru: subjects.id_guru,
      jenis: "umum",
      operator: 1,
    },
  });
  const { mutateAsync, isLoading } = useUpdateSubjects({
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

  const { data: teacher } = useTeachers();
  const { data: category } = useCategorys();
  const { data: programs } = usePrograms();

  const handleSubmit = form.onSubmit(async (data) => {
    await mutateAsync({
      id_mapel: subjects.id_mapel,
      data: {
        ...data,
        // password: !!data.password ? data.password : undefined,
      },
    });
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
        <Button type="submit" loading={isLoading} className="bg-green-900">
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default SubjectsUpdateForm;
