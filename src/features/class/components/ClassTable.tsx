import React, { useEffect, useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import {
  IconTrash,
  IconEdit,
  IconPlus,
  IconSearch,
  IconHeartbeat,
  IconUsers,
} from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { ClassCreateForm, ClassUpdateForm, ClassSantriForm } from ".";
import { useDeleteClass } from "../api";

const columns = [
  { id: "no", label: "No" },
  { id: "jenis", label: "Jenis" },
  { id: "nama_kelas", label: "Nama Kelas" },
  { id: "nama_wali_kelas", label: "Wali Kelas" },
  { id: "", label: "Tahun Ajaran" },
];

const ClassTable = ({ data, titleClass }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [datas, setDatas] = useState([]);
  const { mutateAsync } = useDeleteClass({
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
          Tambah Kelas Kurikulum {titleClass}
        </div>
      ),

      children: (
        <ClassCreateForm onSuccess={closeAllModals} titleClass={titleClass} />
      ),
    });
  }

  function handleUpdate(classs: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Update Kelas kurikulum {titleClass}
        </div>
      ),
      size: "100%",
      children: (
        <ClassUpdateForm
          onSuccess={closeAllModals}
          classs={classs}
          titleClass={titleClass}
        />
      ),
    });
  }

  function handleSantri(classs: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Santri Kelas {classs.nama_kelas}
        </div>
      ),
      size: "100%",
      children: (
        <ClassSantriForm
          onSuccess={closeAllModals}
          classs={classs}
          titleClass={titleClass}
        />
      ),
    });
  }

  function handleRemove(id_kelas: number) {
    openConfirmModal({
      title: "Hapus Class",
      children: (
        <Text size="sm">Apakah anda yakin untuk menghapus Kelas ini?</Text>
      ),
      centered: true,
      closeOnConfirm: false,
      confirmProps: { color: "red" },
      onConfirm: async () => {
        await mutateAsync({ id_kelas });
      },
    });
  }

  return (
    <div className="">
      <div className="pb-3 flex gap-x-5 mb-3">
        <TextInput
          className="font-medium "
          placeholder="Cari Kelas"
          onChange={handleSearch}
          icon={<IconSearch size="23" className="text-green-800" />}
        />
        <Button
          variant="default"
          leftIcon={<IconPlus size="28" className="text-green-800" />}
          className="font-medium"
          onClick={handleAdd}
        >
          Tambah Kelas
        </Button>
      </div>
      <Table2
        header={columns}
        items={datas}
        searchTerm={searchTerm}
        renderItem={(classs) => (
          <tr key={classs.id} className="">
            {columns.map((column) =>
              column.id != "" ? (
                <td
                  key={column.id}
                  className="py-5 px-4 font-normal text-sm text-gray-700 "
                >
                  {classs[column.id as keyof typeof classs]}
                </td>
              ) : (
                <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
                  <IconUsers
                    onClick={() => handleSantri(classs)}
                    className="border-2 rounded-md text-blue-500 hover:bg-blue-50 cursor-pointer"
                  />
                  <IconEdit
                    onClick={() => handleUpdate(classs)}
                    className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                  />
                  <IconTrash
                    onClick={() => handleRemove(classs.id_kelas)}
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

export default ClassTable;
