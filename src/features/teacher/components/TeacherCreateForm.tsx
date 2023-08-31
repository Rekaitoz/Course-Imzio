import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { CreateTeacherDTO, useCreateTeacher } from "../api";
import { DateInput } from "@mantine/dates";
import { useAuth } from "features/auth";
import { dayjs } from "lib/dayjs";

interface Props {
  onSuccess: VoidFunction;
}

const TeacherCreateForm: React.FC<Props> = ({ onSuccess }) => {
  const form = useForm<CreateTeacherDTO["data"]>({
    initialValues: {
      nama_guru: "",
      nip: "",
      jabatan: "",
      tempat_lahir: "",
      tgl_lahir: "",
      alamat: "",
      jenis_kelamin: "",
      no_telp: "",
      username: "",
      password: "",
      operator: 1,
    },
  });

  const { mutateAsync, isLoading } = useCreateTeacher({
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

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync({
      data: {
        ...values,
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
            required
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

export default TeacherCreateForm;
