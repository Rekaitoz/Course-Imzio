import React, { useEffect, useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import {
  IconTrash,
  IconEdit,
  IconPlus,
  IconSearch,
  IconActivity,
} from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { ChooseClass, SemesterCreateForm, SemesterUpdateForm } from ".";
import { useDeleteSemester } from "../api";
import { useNavigate } from "react-router-dom";
import { useUpdateActiveSemester } from "../api/updateActive";
import { dayjs } from "lib/dayjs";

const columns = [
  { id: "no", label: "No" },
  { id: "semester", label: "Semester" },
  { id: "tanggal_awal", label: "Tanggal Dimulai" },
  { id: "tanggal_akhir", label: "Tanggal Berakhir" },
  // { id: "year", label: "Tahun Ajaran" },
  { id: "", label: "Opsi" },
];

const SemesterTable = ({ data }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [datas, setDatas] = useState([]);
  const { mutateAsync, isLoading } = useDeleteSemester({
    config: {
      onSuccess() {
        closeAllModals();
      },
    },
  });
  const { mutateAsync: mutateAsync1, isLoading: isLoading1 } =
    useUpdateActiveSemester({
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
          return {
            ...item,
            no: index + 1,
            year:
              item.semester == "Ganjil"
                ? dayjs(item.tanggal_awal).format("YYYY")
                : dayjs(item.tanggal_akhir).format("YYYY"),
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
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Tambah Semester
        </div>
      ),
      children: <SemesterCreateForm onSuccess={closeAllModals} />,
    });
  }

  function handleUpdate(semester: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Update Semester
        </div>
      ),
      children: (
        <SemesterUpdateForm onSuccess={closeAllModals} semester={semester} />
      ),
    });
  }
  function handleClass(semester: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Pilih Kelas dari Semester {semester.semester}, {semester.year}
        </div>
      ),
      children: (
        <ChooseClass
          onSuccess={closeAllModals}
          handleClick={handleClick}
          semester={semester}
        />
      ),
    });
  }

  function handleRemove(id: number) {
    openConfirmModal({
      title: "Hapus Semester",
      children: (
        <Text size="sm">Apakah anda yakin untuk menghapus Semester ini?</Text>
      ),
      centered: true,
      closeOnConfirm: false,
      confirmProps: { color: "red" },
      onConfirm: async () => {
        await mutateAsync({ id });
      },
    });
  }
  function handleActive(id: number) {
    openConfirmModal({
      title: "Aktifkan Semester",
      children: (
        <Text size="sm">
          Apakah anda yakin untuk Mengaktifkan Semester ini?
        </Text>
      ),
      centered: true,
      closeOnConfirm: false,
      confirmProps: { color: "green" },
      onConfirm: async () => {
        await mutateAsync1({ id });
      },
    });
  }

  const navigate = useNavigate();
  const handleClick = (idSemester: number, idKelas: number) => {
    navigate(`/jadwal-mata-pelajaran-umum/${idSemester}/${idKelas}`);
  };

  return (
    <div className="">
      <div className="pb-3 flex gap-x-5 mb-3">
        <TextInput
          className="font-medium "
          placeholder="Cari Semester"
          onChange={handleSearch}
          icon={<IconSearch size="23" className="text-green-800" />}
        />
        <Button
          variant="default"
          leftIcon={<IconPlus size="28" className="text-green-800" />}
          className="font-medium"
          onClick={handleAdd}
        >
          Tambah Semester
        </Button>
      </div>
      <Table2
        header={columns}
        items={datas}
        searchTerm={searchTerm}
        renderItem={(semester) => (
          <tr
            key={semester.id}
            className={`group ${semester.actived == 1 ? "bg-green-50" : ""}`}
          >
            {columns.map((column) =>
              column.id != "" ? (
                column.id != "semester" ? (
                  <td
                    onClick={() => handleClass(semester)}
                    key={column.id}
                    className="py-5 px-4 font-normal text-sm text-gray-700 hover:bg-gray-50 cursor-pointer group-hover:bg-gray-50"
                  >
                    {semester[column.id as keyof typeof semester]}
                  </td>
                ) : (
                  <td
                    onClick={() => handleClass(semester)}
                    key={column.id}
                    className="py-5 px-4 font-medium text-sm text-blue-600 hover:text-blue-800 hover:bg-gray-50 cursor-pointer group-hover:bg-gray-50"
                  >
                    {semester[column.id as keyof typeof semester]}
                  </td>
                )
              ) : (
                <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
                  <IconActivity
                    onClick={() => handleActive(semester.id_semester)}
                    className={`border-2 rounded-md cursor-pointer ${
                      semester.actived == 1
                        ? "text-green-500 hover:bg-green-50"
                        : "text-gray-500 hover:bg-gray-50 "
                    }`}
                  />
                  <IconEdit
                    onClick={() => handleUpdate(semester)}
                    className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                  />
                  <IconTrash
                    onClick={() => handleRemove(semester.id_semester)}
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

export default SemesterTable;
