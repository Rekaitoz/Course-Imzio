import {
  Button,
  Checkbox,
  Progress,
  Rating,
  Switch,
  TextInput,
  Tabs,
  Select,
  FileInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import {
  IconCalendar,
  IconDotsVertical,
  IconHeart,
  IconPointFilled,
  IconSchool,
  IconSearch,
  IconShoppingCart,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";

const Profile: React.FC = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <main className="mt-16 max-w-8xl  mx-auto px-5 sm:px-7 lg:px-11">
      <section className="flex flex-col lg:flex-row mt-5 gap-y-5">
        <div className="w-full mt-5">
          <div className="text-black text-[40px] font-bold">
            Profil dan Pengaturan
          </div>
          <Tabs defaultValue="gallery" color="dark">
            <Tabs.List className="space-x-10">
              <Tabs.Tab value="gallery" className="text-sm font-semibold px-0">
                Profil Pengguna
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs">
              <div className="my-5 space-y-7">
                <div className="flex  space-x-4  md:space-x-16 border-b pb-10">
                  <img
                    className="w-[170px] h-[226px] rounded-[10px]"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  />
                  <div>
                    <div className="text-black text-4xl font-semibold">
                      Halimatus Sa’diyah
                    </div>
                    <div className="grid grid-cols-2 gap-y-3 mt-5">
                      <div className="text-black text-sm font-normal">
                        User Id
                      </div>
                      <div className="text-black text-sm font-normal">
                        <span className="pr-1">:</span> #6673
                      </div>
                      <div className="text-black text-sm font-normal">
                        Tingkat Pendidikan :
                      </div>
                      <div className="text-black text-sm font-normal">
                        <span className="pr-1">:</span> Universitas
                      </div>
                      <div className="text-black text-sm font-normal">
                        Nama Sekolah / Universitas :
                      </div>
                      <div className="text-black text-sm font-normal">
                        <span className="pr-1">:</span> Universitas Lambung
                        Mangkurat
                      </div>
                    </div>
                    <Button
                      className="bg-sky-900 hover:bg-sky-800 mt-5"
                      type="submit"
                      radius="md"
                      size="xs"
                    >
                      Ganti Foto
                    </Button>
                  </div>
                </div>
                <div
                  id="form-profile"
                  className="grid lg:grid-cols-2 gap-y-8 gap-x-12"
                >
                  <div>
                    <span className="flex items-center gap-x-1 mb-4">
                      <IconUser className="w-5 -ml-1" />
                      <div className="text-black text-xs font-bold">
                        Biodata Pribadi
                      </div>
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
                      <FileInput
                        label="Foto Profile"
                        withAsterisk={false}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex gap-x-3 justify-end mb-20">
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
            </Tabs.Panel>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default Profile;
