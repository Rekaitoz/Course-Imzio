import { Button, NumberInput, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { CreateSemesterDTO, useCreateSemester } from "../api";
import { useState } from "react";
import { DateInput, YearPickerInput } from "@mantine/dates";

interface Props {
  onSuccess: VoidFunction;
}

const SemesterCreateForm: React.FC<Props> = ({ onSuccess }) => {
  const form = useForm<CreateSemesterDTO["data"]>({
    initialValues: {
      semester: "ganjil",
      tanggal_awal: "",
      tanggal_akhir: "",
    },
  });
  const { mutateAsync, isLoading } = useCreateSemester({
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
      data: values,
    });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
      <div className="grid gap-y-4 pb-14">
        <DateInput
          label="Tanggal Dimulai"
          required
          {...form.getInputProps("tanggal_awal")}
        />
        <DateInput
          label="Tanggal Berakhir"
          required
          {...form.getInputProps("tanggal_akhir")}
        />
        <Select
          label="Semester"
          placeholder=""
          required
          data={[
            { value: "ganjil", label: "Ganjil" },
            { value: "genap", label: "Genap" },
          ]}
          {...form.getInputProps("semester")}
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

export default SemesterCreateForm;
