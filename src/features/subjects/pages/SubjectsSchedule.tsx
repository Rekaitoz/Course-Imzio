import { Center, Loader } from "@mantine/core";
import { useSubjectsSchedules } from "../api";
import { SubjectsScheduleTable } from "../components";
import { IconHome } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";

const SubjectsSchedule: React.FC<{ parent: string }> = ({ parent }) => {
  let { idSemester } = useParams();
  let { idKelas } = useParams();

  const { data, isLoading } = useSubjectsSchedules(
    idSemester as any,
    idKelas as any
  );

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
        <div>Semester</div>
        <div>
          <IconChevronRight size={15} />
        </div>
        <div>Guru</div>
        <div>
          <IconChevronRight size={15} />
        </div>
        <div className="text-green-800 font-bold">Jadwal Mata Pelajaran</div>
      </div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-3xl pb-1 font-bold text-gray-800">
          Manajemen Jadwal Mata Pelajaran
        </h1>
      </div>
      <section className="">
        {isLoading ? (
          <Center className="w-full h-full bg-body">
            <Loader color="green" />
          </Center>
        ) : (
          <SubjectsScheduleTable
            data={data?.jadwal_mapel}
            semester={data?.semester}
            kelas={data?.kelas}
            titleSchedule={titleSchedule}
          />
        )}
      </section>
    </main>
  );
};

export default SubjectsSchedule;
