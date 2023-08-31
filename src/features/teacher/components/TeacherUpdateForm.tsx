import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdateTeacherDTO, useUpdateTeacher } from "../api";
import { DateInput } from "@mantine/dates";
import { dayjs } from "lib/dayjs";
// import { Teacher } from "../types";

interface Props {
  teacher: {
    id_guru: number;
    nama_guru: string;
    NIP: string;
    TTL: string;
    email: string;
    jabatan: string;
    tempat_lahir: string;
    tgl_lahir: Date | string;
    alamat: string;
    jenis_kelamin: string;
    no_telp: string;
    username: string;
    password: string;
    operator?: any;
  };
  onSuccess: VoidFunction;
}

const TeacherUpdateForm: React.FC<Props> = ({ teacher, onSuccess }) => {
  const form = useForm<UpdateTeacherDTO["data"]>({
    initialValues: {
      nama_guru: teacher.nama_guru,
      nip: teacher.NIP,
      jabatan: teacher.jabatan,
      tempat_lahir: teacher.tempat_lahir,
      tgl_lahir: new Date(teacher.tgl_lahir),
      alamat: teacher.alamat,
      jenis_kelamin: teacher.jenis_kelamin,
      no_telp: teacher.no_telp,
      username: teacher.username,
      password: "",
      operator: 1,
    },
  });

  const { mutateAsync, isLoading } = useUpdateTeacher({
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
      id_guru: teacher.id_guru,
      data: {
        ...data,
        // password: !!data.password ? data.password : undefined,
      },
    });
  });

  return (
    <form className="relative px-7 pb-5" onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-2 gap-x-5 space-y-3 lg:space-y-0">
        <div className="space-y-3">
          <TextInput
            label="Nama"
            required
            {...form.getInputProps("nama_guru")}
          />
          <TextInput label="NIP" required {...form.getInputProps("nip")} />
          <TextInput
            label="Jabatan"
            required
            {...form.getInputProps("jabatan")}
          />
          <TextInput
            label="Tempat Lahir"
            required
            {...form.getInputProps("tempat_lahir")}
          />
          <DateInput
            label="Tanggal Lahir"
            required
            {...form.getInputProps("tgl_lahir")}
          />
          <Textarea label="Alamat" required {...form.getInputProps("alamat")} />
        </div>
        <div className="space-y-3">
          <Select
            label="Jenis Kelamin"
            placeholder=""
            searchable
            required
            data={[
              { value: "L", label: "Laki-laki" },
              { value: "P", label: "Perempuan" },
            ]}
            {...form.getInputProps("jenis_kelamin")}
          />

          <TextInput
            label="No. Telp"
            required
            {...form.getInputProps("no_telp")}
          />
          <TextInput
            label="Username"
            required
            {...form.getInputProps("username")}
          />
          <PasswordInput
            label="Password"
            placeholder="Tidak Perlu diisi jika tidak diganti"
            {...form.getInputProps("password")}
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

export default TeacherUpdateForm;
