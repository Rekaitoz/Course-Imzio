import React, { useEffect, useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import {
  IconTrash,
  IconEdit,
  IconPlus,
  IconSearch,
  IconHeartbeat,
} from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { WarungCreateForm, WarungLimitForm, WarungUpdateForm } from ".";

const columns = [
  { id: "no", label: "No" },
  { id: "name", label: "Nama Warung" },
  { id: "account", label: "Nama Akun Warung" },
  { id: "limit", label: "Limit Harian Santri" },
];

const WarungTable = ({ data }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [datas, setDatas] = useState([]);

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
          Tambah Warung
        </div>
      ),
      size: "100%",
      children: <WarungCreateForm onSuccess={closeAllModals} />,
    });
  }

  function handleUpdate(warung: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Update Warung
        </div>
      ),
      size: "100%",
      children: <WarungUpdateForm onSuccess={closeAllModals} warung={warung} />,
    });
  }
  function handleLimit(warung: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Edit Limitasi Santri
        </div>
      ),
      children: <WarungLimitForm onSuccess={closeAllModals} warung={warung} />,
    });
  }

  function handleRemove(warungname: string) {
    openConfirmModal({
      title: "Hapus Warung",
      children: (
        <Text size="sm">Apakah anda yakin untuk menghapus warung ini?</Text>
      ),
      centered: true,
      closeOnConfirm: false,
      confirmProps: { color: "red" },
      onConfirm: async () => {
        // await deleteMutation.mutateAsync({ warungname });
      },
    });
  }

  return (
    <div className="">
      <div className="pb-3 flex gap-x-5 mb-3">
        <TextInput
          className="font-medium "
          placeholder="Cari Warung"
          onChange={handleSearch}
          icon={<IconSearch size="23" className="text-green-800" />}
        />
        <Button
          variant="default"
          leftIcon={<IconPlus size="28" className="text-green-800" />}
          className="font-medium"
          onClick={handleAdd}
        >
          Tambah Warung
        </Button>
      </div>
      <Table2
        header={columns}
        items={datas}
        searchTerm={searchTerm}
        renderItem={(warung) => (
          <tr key={warung.id} className="">
            {columns.map((column) => (
              <td
                key={column.id}
                className="py-5 px-4 font-normal text-sm text-gray-700 "
              >
                {warung[column.id as keyof typeof warung]}
              </td>
            ))}
            <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
              <IconEdit
                onClick={() => handleUpdate(warung)}
                className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
              />
              <IconHeartbeat
                onClick={() => handleLimit(warung)}
                className="border-2 rounded-md text-blue-500 hover:bg-blue-50 cursor-pointer"
              />
              <IconTrash
                onClick={() => handleRemove(warung.id)}
                className="border-2 rounded-md text-red-500 hover:bg-red-50 cursor-pointer"
              />
            </td>
          </tr>
        )}
      />
    </div>
  );
};

export default WarungTable;
