import {
  Button,
  Center,
  Checkbox,
  Loader,
  Switch,
  TextInput,
} from "@mantine/core";
import { usePrograms } from "../api";
import { ProgramTable } from "../components";
import {
  IconHeart,
  IconHome,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const ProgramShop: React.FC = () => {
  return (
    <main className="mt-16 max-w-8xl  mx-auto px-5 sm:px-7 lg:px-11">
      <section className="pt-8 ">
        <div className="flex gap-x-2 items-center">
          <TextInput
            className="w-[400px]"
            placeholder="Apa yang ingin dicari?"
            size="md"
            rightSection={<IconSearch />}
          />
          <Button className="bg-sky-900 hover:bg-sky-800">Jelajahi</Button>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row mt-5 gap-x-12 gap-y-5">
        <div className="rounded-[5px] border border-black border-opacity-40 p-5 w-fit h-fit">
          <div className="text-black text-sm font-normal mb-2">
            Tampilkan berdasarkan :
          </div>
          <div className="flex gap-x-4 border-b border-b-black pb-4 border-opacity-60 ">
            <Button
              radius="xl"
              className="bg-sky-900 hover:bg-sky-800 font-medium"
              size="xs"
            >
              Paling Sesuai
            </Button>
            <Button
              radius="xl"
              className="bg-zinc-300 text-black font-medium hover:bg-sky-800"
              size="xs"
            >
              Paling Baru
            </Button>
          </div>
          <div className="mt-4 space-y-2 border-b border-b-black pb-5 border-opacity-60">
            <div className="text-black text-sm font-normal mb-2">Tingkat</div>
            <Checkbox label="SD" radius="xs" />
            <Checkbox label="SMP / Sederajat" radius="xs" />
            <Checkbox label="SMA / Sederajat" radius="xs" />
            <Checkbox label="Kuliah" radius="xs" />
          </div>
          <div className="mt-4 ">
            <Switch label="Full Online" />
          </div>
        </div>
        <div className="w-full">
          <div className="text-black text-xl font-bold">Hasil 11.258</div>
          <div className="my-5 border-t border-black border-opacity-40">
            {new Array(6).fill(0).map((item) => (
              <div className="border-b border-black border-opacity-40 py-3 flex justify-between">
                <div className="flex items-center gap-x-4">
                  <img
                    className="w-[201px] h-[100px]"
                    src="https://assets-global.website-files.com/602eda09fc78af5a419706be/6418886aa141bdf3be9959ef_storj-blog-go-test1300w.jpg"
                    alt=""
                  />
                  <div className="space-y-1">
                    <div className=" text-black text-sm font-bold line-clamp-2">
                      Backend Master Class [Golang + Postgres + Kubernetes +
                      gRPC]
                    </div>
                    <div className=" text-black text-opacity-60 text-[10px] font-normal">
                      Ditawarkan oleh TECH SCHOOL
                    </div>
                    <div className="text-black text-[11px] font-bold">
                      5 Bulan
                    </div>
                    <div className=" text-black text-md font-bold">
                      Rp 449.000,-
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <IconShoppingCart className="hover:text-yellow-500 hover:cursor-pointer" />
                  <IconHeart className="hover:text-red-500 hover:cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramShop;
