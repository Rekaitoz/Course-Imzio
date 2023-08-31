import { TextInput, Select, FileInput, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconCalendar, IconSchool, IconUser } from "@tabler/icons-react";
import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div className="-mt-6 mb-10">
      <h2 className="text-black text-[40px] font-bold mb-5">Lengkapi Data</h2>
      <div className="grid lg:grid-cols-2 gap-y-8 gap-x-12">
        <div>
          <span className="flex items-center gap-x-1 mb-4">
            <IconUser className="w-5 -ml-1" />
            <div className="text-black text-xs font-bold">Biodata Pribadi</div>
          </span>
          <div className="space-y-6">
            <TextInput
              label="Nama Lengkap"
              radius="xs"
              required
              withAsterisk={false}
            />
            <Select
              label="Jenis Kelamin"
              radius="xs"
              required
              withAsterisk={false}
              data={[
                { value: "man", label: "Laki-laki" },
                { value: "women", label: "Perempuan" },
              ]}
            />
            <TextInput
              label="Tempat Lahir"
              radius="xs"
              required
              withAsterisk={false}
            />
            <DateInput
              value={value}
              onChange={setValue}
              label="Tanggal Lahir"
              mx="auto"
              rightSection={
                <IconCalendar size="1rem" className="text-gray-600" />
              }
            />
            <TextInput
              label="No Telepon"
              radius="xs"
              required
              withAsterisk={false}
            />
          </div>
        </div>
        <div>
          <span className="flex items-center gap-x-1 mb-4">
            <IconSchool className="w-5 -ml-1" />
            <div className="text-black text-xs font-bold">
              Riwayat Pendidikan
            </div>
          </span>
          <div className="space-y-6">
            <Select
              label="Tingkat Pendidikan"
              radius="xs"
              required
              withAsterisk={false}
              data={[
                { value: "man", label: "Sarjana" },
                { value: "women", label: "tidak berpendidikan" },
              ]}
            />
            <TextInput
              label="Nama Sekolah/Universitas"
              radius="xs"
              required
              withAsterisk={false}
            />
            <TextInput
              label="NISN/NIM"
              radius="xs"
              required
              withAsterisk={false}
            />
            <FileInput label="Foto Profile" withAsterisk={false} required />
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-x-3 justify-end">
        <Button
          className="bg-white hover:bg-slate-200 text-black border border-black"
          type="submit"
          radius="md"
        >
          Batal
        </Button>
        <Button
          className="bg-sky-900 hover:bg-sky-800"
          type="submit"
          radius="md"
        >
          Simpan
        </Button>
      </div>
    </div>
  );
};
export default Form;
