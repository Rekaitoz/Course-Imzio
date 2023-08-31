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
import { UpdateClassDTO, useUpdateClass } from "../api";
import { IconPlus, IconUser, IconX } from "@tabler/icons-react";
import { useState, useMemo } from "react";
import { useTeachers } from "features/teacher";
// import { Class } from "../types";

interface Props {
  classs: {
    id_kelas: number;
    nama_kelas: string;
    jenis: string;
    id_wali_kelas: number;
  };
  onSuccess: VoidFunction;
  titleClass: string;
}

const ClassUpdateForm: React.FC<Props> = ({
  classs,
  onSuccess,
  titleClass,
}) => {
  const form = useForm<UpdateClassDTO["data"]>({
    initialValues: {
      nama_kelas: classs.nama_kelas,
      jenis: classs.jenis,
      id_wali_kelas: classs.id_wali_kelas,
      operator: 1,
    },
  });

  const { data: waliKelas } = useTeachers();

  const { mutateAsync, isLoading } = useUpdateClass({
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

  const wali = useMemo(() => {
    return (waliKelas ?? []).map(({ nama_guru, id_guru }: any) => ({
      label: nama_guru,
      value: id_guru,
    }));
  }, [waliKelas]);

  const handleSubmit = form.onSubmit(async (data) => {
    await mutateAsync({
      id_kelas: classs.id_kelas,
      data: {
        ...data,
        // password: !!data.password ? data.password : undefined,
      },
    });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
      <div className=" gap-y-4 lg:space-y-0">
        <div className="grid gap-y-5 pb-10 mb-5">
          <Select
            label="Wali Kelas"
            placeholder=""
            searchable
            required
            data={wali}
            {...form.getInputProps("id_wali_kelas")}
          />
          <TextInput
            label="Nama Kelas"
            required
            {...form.getInputProps("nama_kelas")}
          />
          {/* <Select
            label="Jenis"
            placeholder=""
            searchable
            required
            data={[
              { value: "umum", label: "Umum" },
              { value: "tahfiz", label: "Tahfiz" },
            ]}
            {...form.getInputProps("jenis")}
          /> */}
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

export default ClassUpdateForm;
