import React, { useEffect, useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import {
  IconTrash,
  IconEdit,
  IconPlus,
  IconSearch,
  IconArrowRight,
} from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { MushafCreateForm, MushafUpdateForm } from ".";
import { useDeleteMushaf } from "../api";

const columns = [
  { id: "no", label: "No" },
  { id: "jenis_mushaf", label: "Jenis Mushaf" },
  { id: "juz", label: "Juz" },
  { id: "halaman", label: "Halaman" },
  { id: "", label: "Opsi" },
];

const MushafTable = ({ data }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [datas, setDatas] = useState([]);
  const { mutateAsync, isLoading } = useDeleteMushaf();
  useEffect(() => {
    if (data) {
      setDatas(
        data.map((item: any, index: number) => {
          return {
            ...item,
            no: index + 1,
          };
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
        <div className="text-2xl font-bold text-slate-600 px-5 pt-4">
          Tambah Data Mushaf
        </div>
      ),
      children: <MushafCreateForm onSuccess={closeAllModals} />,
    });
  }

  function handleUpdate(mushaf: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-600 px-5 pt-4">
          Update Data Mushaf
        </div>
      ),
      children: <MushafUpdateForm onSuccess={closeAllModals} mushaf={mushaf} />,
    });
  }

  function handleRemove(id: number) {
    openConfirmModal({
      title: "Hapus Mushaf",
      children: (
        <Text size="sm">Apakah anda yakin untuk menghapus mushaf ini?</Text>
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
          placeholder="Cari Mushaf"
          onChange={handleSearch}
          icon={<IconSearch size="23" className="text-green-800" />}
        />
        <Button
          variant="default"
          leftIcon={<IconPlus size="28" className="text-green-800" />}
          className="font-medium"
          onClick={handleAdd}
        >
          Tambah Mushaf
        </Button>
      </div>
      <Table2
        header={columns}
        items={datas}
        searchTerm={searchTerm}
        renderItem={(mushaf) => (
          <tr key={mushaf.id} className="">
            {columns.map((column) =>
              column.id != "" ? (
                <td
                  key={column.id}
                  className="py-5 px-4 font-normal text-sm text-gray-700 "
                >
                  {mushaf[column.id as keyof typeof mushaf]}
                </td>
              ) : (
                <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
                  <IconEdit
                    onClick={() => handleUpdate(mushaf)}
                    className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                  />
                  <IconTrash
                    onClick={() => handleRemove(mushaf.id)}
                    className="border-2 rounded-md text-red-500 hover:bg-red-50 cursor-pointer"
                  />
                </td>
              )
            )}
          </tr>
        )}
      />
    </div>
  );
};

export default MushafTable;
