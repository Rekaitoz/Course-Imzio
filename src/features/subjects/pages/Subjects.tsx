import { Center, Loader } from "@mantine/core";
import { useSubjectss, useCategorys } from "../api";
import { SubjectsTable } from "../components";
import { IconHome } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Subjects: React.FC = () => {
  const { data: categoryData, isLoading: catLoading } = useCategorys();
  const { data, isLoading } = useSubjectss();
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
        <div>Kurikulum Umum</div>
        <div>
          <IconChevronRight size={15} />
        </div>
        <div className="text-green-800 font-bold">Mata Pelajaran</div>
      </div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-3xl pb-1 font-bold text-gray-800">
          Manajemen Mata Pelajaran
        </h1>
      </div>
      <section className="">
        {isLoading && catLoading ? (
          <Center className="w-full h-full bg-body">
            <Loader color="green" />
          </Center>
        ) : (
          <SubjectsTable data={data} categoryData={categoryData} />
        )}
      </section>
    </main>
  );
};

export default Subjects;
