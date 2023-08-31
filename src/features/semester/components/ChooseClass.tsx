import { Button, Select, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdateSemesterDTO, useUpdateSemester } from "../api";
import { useMemo, useState } from "react";
import { useClasss } from "features/class";
import { IconSearch } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  semester: {
    id_semester: number;
    semester: string;
    tahun_awal: string;
    tahun_akhir: string;
  };
  onSuccess: VoidFunction;
  handleClick: (idSemester: number, idKelas: number) => void;
}

const ChooseClass: React.FC<Props> = ({ semester, onSuccess, handleClick }) => {
  const form = useForm({
    initialValues: {
      semester: semester.semester,
      tahun_awal: parseInt(semester.tahun_awal),
      tahun_akhir: parseInt(semester.tahun_akhir),
    },
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const { data: kelas } = useClasss();

  const filteredData = kelas?.filter((item: any) => {
    const itemValues = Object.values(item);

    return itemValues.some((value) => {
      if (typeof value === "string" || typeof value === "number") {
        return String(value).toLowerCase().includes(searchTerm.toLowerCase());
      }

      return false;
    });
  });

  return (
    <form className="relative px-3 pb-5">
      <div className="space-y-3">
        <TextInput
          className="font-medium pb-2"
          placeholder="Cari Kelas"
          onChange={handleSearch}
          icon={<IconSearch size="23" className="text-green-800" />}
        />
        {filteredData?.map((item: any) => (
          <div
            onClick={() => {
              closeAllModals();
              onSuccess();
              handleClick(semester.id_semester, item.id_kelas);
            }}
            key={item.id_kelas}
            className="bg-white drop-shadow py-2 px-4 border-y border-slate-100 rounded hover:bg-slate-50 cursor-pointer"
          >
            {item.nama_kelas}
          </div>
        ))}
      </div>
    </form>
  );
};

export default ChooseClass;
