import React, { useEffect, useState } from "react";
import { TextInput, Button, Text, Select } from "@mantine/core";
import { IconTrash, IconEdit, IconPlus, IconSearch } from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { AttendanceCreateForm, AttendanceUpdateForm } from ".";

const columns = [
  { id: "no", label: "No" },
  { id: "no_induk", label: "NIS" },
  { id: "nama_santri", label: "Nama Santri" },
  { id: "hadir", label: "Hadir" },
  { id: "izin", label: "Izin" },
  { id: "sakit", label: "Sakit" },
  { id: "alpha", label: "Alpha" },
  { id: "abdi", label: "Abdi" },
];

const AttendanceTable = ({ data }: any) => {
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
          Tambah Mata Pelajaran
        </div>
      ),
      children: <AttendanceCreateForm onSuccess={closeAllModals} />,
    });
  }

  function handleUpdate(attendance: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Update Mata Pelajaran
        </div>
      ),
      children: (
        <AttendanceUpdateForm
          onSuccess={closeAllModals}
          attendance={attendance}
        />
      ),
    });
  }

  function handleRemove(attendancename: string) {
    openConfirmModal({
      title: "Hapus Attendance",
      children: (
        <Text size="sm">
          Apakah anda yakin untuk menghapus Mata Pelajaran ini?
        </Text>
      ),
      centered: true,
      closeOnConfirm: false,
      confirmProps: { color: "red" },
      onConfirm: async () => {
        // await deleteMutation.mutateAsync({ attendancename });
      },
    });
  }

  return (
    <div className="">
      <div className="pb-3 flex gap-x-5 mb-3">
        <TextInput
          className="font-medium "
          placeholder="Cari Santri"
          onChange={handleSearch}
          icon={<IconSearch size="23" className="text-green-800" />}
        />
        {/* <Select
          className="font-medium"
          placeholder="Pilih Kelas"
          data={["Bufitri", "PaDodon"]}
        /> */}
      </div>
      <Table2
        header={columns}
        items={datas}
        searchTerm={searchTerm}
        renderItem={(attendance) => (
          <tr key={attendance.id} className="">
            {columns.map((column) =>
              column.id != "" ? (
                <td
                  key={column.id}
                  className="py-5 px-4 font-normal text-sm text-gray-700 "
                >
                  {attendance[column.id as keyof typeof attendance]}
                </td>
              ) : (
                <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
                  <IconEdit
                    onClick={() => handleUpdate(attendance)}
                    className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                  />
                  <IconTrash
                    onClick={() => handleRemove(attendance.id)}
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

export default AttendanceTable;
