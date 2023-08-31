import { Center, Loader } from "@mantine/core";
import { useSemesters } from "../api";
import { SemesterTable } from "../components";
import { IconHome } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Semester: React.FC<{ parent: string }> = ({ parent }) => {
  const { data, isLoading } = useSemesters();
  const navigate = useNavigate();
  const titleSchedule = parent == "umum" ? "Umum" : "Tahfiz";

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
        <div>Kurikulum {titleSchedule}</div>
        <div>
          <IconChevronRight size={15} />
        </div>
        <div className="text-green-800 font-bold">Jadwal Mata Pelajaran</div>
      </div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-3xl pb-1 font-bold text-gray-800">
          Manajemen Semester
        </h1>
      </div>
      <section className="">
        {isLoading ? (
          <Center className="w-full h-full bg-body">
            <Loader color="green" />
          </Center>
        ) : (
          <SemesterTable data={data} />
        )}
      </section>
    </main>
  );
};

export default Semester;
