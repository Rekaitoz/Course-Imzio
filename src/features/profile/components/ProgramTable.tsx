import React, { useEffect, useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import { IconTrash, IconEdit, IconPlus, IconSearch } from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { ProgramCreateForm, ProgramUpdateForm } from ".";
import { useDeleteProgram } from "../api";

const columns = [
  { id: "no", label: "No" },
  { id: "nama_program", label: "Nama Program" },
  { id: "jenis", label: "Jenis" },
  { id: "deskripsi", label: "Deskripsi" },
  { id: "", label: "Opsi" },
];

const ProgramTable = ({ data }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [datas, setDatas] = useState([]);
  const { mutateAsync, isLoading } = useDeleteProgram({
    config: {
      onSuccess() {
        closeAllModals();
      },
    },
  });

  useEffect(() => {
    if (data) {
      setDatas(
        data.map((item: any, index: number) => {
          return { ...item, no: index + 1 };
        })
      );
    }
  }, [data]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  function handleAdd() {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Tambah Program
        </div>
      ),
      children: <ProgramCreateForm onSuccess={closeAllModals} />,
    });
  }

  function handleUpdate(program: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Update Program
        </div>
      ),
      children: (
        <ProgramUpdateForm onSuccess={closeAllModals} program={program} />
      ),
    });
  }

  function handleRemove(id: number) {
    openConfirmModal({
      title: "Hapus Program",
      children: (
        <Text size="sm">Apakah anda yakin untuk menghapus program ini?</Text>
      ),
      centered: true,
      closeOnConfirm: false,
      confirmProps: { color: "red" },
      onConfirm: async () => {
        await mutateAsync({ id });
      },
    });
  }

  return (
    <div className="">
      <div className="pb-3 flex gap-x-5 mb-3">
        <TextInput
          className="font-medium "
          placeholder="Cari Program"
          onChange={handleSearch}
          icon={<IconSearch size="23" className="text-green-800" />}
        />
        <Button
          variant="default"
          leftIcon={<IconPlus size="28" className="text-green-800" />}
          className="font-medium"
          onClick={handleAdd}
        >
          Tambah Program
        </Button>
      </div>
      <Table2
        header={columns}
        items={datas}
        searchTerm={searchTerm}
        renderItem={(program) => (
          <tr key={program.id} className="">
            <td
              key={columns[0].id}
              className="py-5 px-4 font-normal text-sm text-gray-700"
            >
              {program[columns[0].id as keyof typeof program]}
            </td>
            <td
              key={columns[1].id}
              className="py-5 px-4 font-normal text-sm text-gray-700"
            >
              {program[columns[1].id as keyof typeof program]}
            </td>
            <td
              key={columns[2].id}
              className="py-5 px-4 font-normal text-sm text-gray-700"
            >
              {program[columns[2].id as keyof typeof program]}
            </td>

            <td
              key={columns[3].id}
              className="py-5 px-4 font-normal text-sm text-gray-700 min-w-[20rem] !whitespace-normal"
            >
              {program[columns[3].id as keyof typeof program]}
            </td>

            <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
              <IconEdit
                onClick={() => handleUpdate(program)}
                className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
              />
              <IconTrash
                onClick={() => handleRemove(program.id_program)}
                className="border-2 rounded-md text-red-500 hover:bg-red-50 cursor-pointer"
              />
            </td>
          </tr>
        )}
      />
    </div>
  );
};

export default ProgramTable;
