import { Center, Loader } from "@mantine/core";
import { useClasss } from "../api";
import { ClassTable } from "../components";
import { IconHome } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useTahfizs } from "../api/getTahfiz";

const Class: React.FC<{ parent: string }> = ({ parent }) => {
  const { data, isLoading } = parent == "umum" ? useClasss() : useTahfizs();

  const navigate = useNavigate();
  const titleClass = parent == "umum" ? "Umum" : "Tahfiz";

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
        <div>Kurikulum {titleClass}</div>
        <div>
          <IconChevronRight size={15} />
        </div>
        <div className="text-green-800 font-bold">Kelas</div>
      </div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-3xl pb-1 font-bold text-gray-800">
          Manajemen Data Kelas {titleClass}
        </h1>
      </div>
      <section className="">
        {isLoading ? (
          <Center className="w-full h-full bg-body">
            <Loader color="green" />
          </Center>
        ) : (
          <ClassTable data={data} titleClass={titleClass} />
        )}
      </section>
    </main>
  );
};

export default Class;
