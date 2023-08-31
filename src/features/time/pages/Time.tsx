import { Center, Loader } from "@mantine/core";
import { useTimes } from "../api";
import { TimeTable } from "../components";
import { IconHome } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Time: React.FC = () => {
  const { data, isLoading } = useTimes();
  const navigate = useNavigate();

  return (
    <main className="mt-3">
      <div className="flex items-center text-xs text-slate-500 mb-7">
        <div>
          <IconHome fill="#4D4D4D" strokeWidth="1.5" color="#ffff" size={15} />
        </div>
        <div>
          <IconChevronRight size={15} />
        </div>
        <div>Data Master</div>
        <div>
          <IconChevronRight size={15} />
        </div>
        <div>Pengaturan</div>
        <div>
          <IconChevronRight size={15} />
        </div>
        <div className="text-green-800 font-bold">Jam Pelajaran</div>
      </div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-3xl pb-1 font-bold text-gray-800">
          Manajemen Jam Pelajaran
        </h1>
      </div>
      <section className="">
        {isLoading ? (
          <Center className="w-full h-full bg-body">
            <Loader color="green" />
          </Center>
        ) : (
          <TimeTable data={data} />
        )}
      </section>
    </main>
  );
};

export default Time;
