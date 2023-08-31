import React, { useEffect, useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import { IconTrash, IconEdit, IconPlus, IconSearch } from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { TeacherCreateForm, TeacherUpdateForm } from ".";
import { useDeleteTeacher } from "../api";
import { dayjs } from "lib/dayjs";

const columns = [
  { id: "no", label: "No" },
  { id: "nama_guru", label: "Nama Guru" },
  { id: "NIP", label: "NIP" },
  { id: "jabatan", label: "Jabatan" },
  { id: "tglFormat", label: "TTL" },
  { id: "alamat", label: "Alamat" },
  { id: "gender", label: "Jenis Kelamin" },
  { id: "no_telp", label: "No. Telepon" },
  { id: "username", label: "Username" },
  { id: "", label: "Opsi" },
];

const TeacherTable = ({ data }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (data) {
      setDatas(
        data.map((item: any, index: number) => {
          return {
            ...item,
            gender: item.jenis_kelamin == "L" ? "Laki-laki" : "Perempuan",
            tglFormat:
              item.tempat_lahir +
              ", " +
              dayjs(item.tgl_lahir).format("DD MMM YYYY"),
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
        <div className="text-2xl font-bold text-slate-600 px-7 pt-5">
          Tambah Data Guru
        </div>
      ),
      children: <TeacherCreateForm onSuccess={closeAllModals} />,
      size: "100%",
    });
  }

  function handleUpdate(teacher: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-600 px-7 pt-5">
          Update Data Guru
        </div>
      ),
      children: (
        <TeacherUpdateForm onSuccess={closeAllModals} teacher={teacher} />
      ),
      size: "100%",
    });
  }

  function handleRemove(id: number) {
    openConfirmModal({
      title: "Hapus Teacher",
      children: (
        <Text size="sm">Apakah anda yakin untuk menghapus User Guru ini?</Text>
      ),
      centered: true,
      closeOnConfirm: false,
      confirmProps: { color: "red" },
      onConfirm: async () => {
        await mutateAsync({ id });
      },
    });
  }

  const { mutateAsync, isLoading } = useDeleteTeacher({
    config: {
      onSuccess() {
        closeAllModals();
      },
    },
  });

  return (
    <div className="">
      <div className="pb-3 flex gap-x-5 mb-3">
        <TextInput
          className="font-medium "
          placeholder="Cari Guru"
          onChange={handleSearch}
          icon={<IconSearch size="23" className="text-green-800" />}
        />
        <Button
          variant="default"
          leftIcon={<IconPlus size="28" className="text-green-800" />}
          className="font-medium"
          onClick={handleAdd}
        >
          Tambah Guru
        </Button>
      </div>
      <Table2
        header={columns}
        items={datas}
        searchTerm={searchTerm}
        renderItem={(teacher) => (
          <tr key={teacher.id} className="">
            {columns.map((column) =>
              column.id != "" ? (
                <td
                  key={column.id}
                  className="py-5 px-4 font-normal text-sm text-gray-700 "
                >
                  {teacher[column.id as keyof typeof teacher]}
                </td>
              ) : (
                <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
                  <IconEdit
                    onClick={() => handleUpdate(teacher)}
                    className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                  />
                  <IconTrash
                    onClick={() => handleRemove(teacher.id_guru)}
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

export default TeacherTable;
