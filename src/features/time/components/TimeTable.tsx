import React, { useEffect, useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import { IconTrash, IconEdit, IconPlus, IconSearch } from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { TimeCreateForm, TimeUpdateForm } from ".";
import { useDeleteTime } from "../api";

const columns = [
  { id: "no", label: "No" },
  { id: "hari", label: "Hari" },
  { id: "jam_mulai", label: "Jam Mulai" },
  { id: "jam_selesai", label: "Jam Berakhir" },
  { id: "", label: "Opsi" },
];

const TimeTable = ({ data }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [datas, setDatas] = useState([]);
  const { mutateAsync, isLoading } = useDeleteTime({
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
          Tambah Jam Pelajaran
        </div>
      ),
      children: <TimeCreateForm onSuccess={closeAllModals} />,
    });
  }

  function handleUpdate(time: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Update Jam Pelajaran
        </div>
      ),
      children: <TimeUpdateForm onSuccess={closeAllModals} time={time} />,
    });
  }

  function handleRemove(id: number) {
    openConfirmModal({
      title: "Hapus Jam Pelajaran",
      children: (
        <Text size="sm">
          Apakah anda yakin untuk menghapus Mata Pelajaran ini?
        </Text>
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
          placeholder="Cari Jam Pelajaran"
          onChange={handleSearch}
          icon={<IconSearch size="23" className="text-green-800" />}
        />
        <Button
          variant="default"
          leftIcon={<IconPlus size="28" className="text-green-800" />}
          className="font-medium"
          onClick={handleAdd}
        >
          Tambah Jam Pelajaran
        </Button>
      </div>
      <Table2
        header={columns}
        items={datas}
        searchTerm={searchTerm}
        renderItem={(time) => (
          <tr key={time.id} className="">
            {columns.map((column) =>
              column.id != "" ? (
                <td
                  key={column.id}
                  className="py-5 px-4 font-normal text-sm text-gray-700 "
                >
                  {time[column.id as keyof typeof time]}
                </td>
              ) : (
                <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
                  <IconEdit
                    onClick={() => handleUpdate(time)}
                    className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                  />
                  <IconTrash
                    onClick={() => handleRemove(time.id_jam_pelajaran)}
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

export default TimeTable;
