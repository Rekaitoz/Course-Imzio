import React, { useEffect, useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import { IconTrash, IconEdit, IconPlus, IconSearch } from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import {
  CategoryCreateForm,
  CategoryUpdateForm,
  SubjectsCreateForm,
  SubjectsUpdateForm,
} from ".";
import { useDeleteSubjects } from "../api";

const columns = [
  { id: "no", label: "No" },
  { id: "nama_mapel", label: "Mata Pelajaran" },
  { id: "nama_kategori", label: "Kategori" },
  { id: "nama_program", label: "Program" },
  { id: "nama_guru", label: "Guru" },
  { id: "", label: "Opsi" },
];
const columnsKategori = [
  { id: "no", label: "No" },
  { id: "nama_kategori", label: "Nama Kategori" },
  { id: "", label: "Opsi" },
];

const SubjectsTable = ({ data, categoryData }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermCategory, setSearchTermCategory] = useState("");
  const [datas, setDatas] = useState([]);
  const [dataKategori, setDataKategori] = useState([]);
  const { mutateAsync } = useDeleteSubjects({
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
    if (categoryData) {
      setDataKategori(
        categoryData.map((item: any, index: number) => {
          return { ...item, no: index + 1 };
        })
      );
    }
  }, [data, categoryData]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTermCategory(event.target.value);
  };

  function handleAdd() {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Tambah Mata Pelajaran
        </div>
      ),
      children: <SubjectsCreateForm onSuccess={closeAllModals} />,
    });
  }
  function handleAddCategory() {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Tambah Kategori
        </div>
      ),
      children: <CategoryCreateForm onSuccess={closeAllModals} />,
    });
  }

  function handleUpdate(subjects: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Update Mata Pelajaran
        </div>
      ),
      children: (
        <SubjectsUpdateForm onSuccess={closeAllModals} subjects={subjects} />
      ),
    });
  }
  function handleUpdateCategory(category: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Update Kategori
        </div>
      ),
      children: (
        <CategoryUpdateForm onSuccess={closeAllModals} category={category} />
      ),
    });
  }

  function handleRemove(id_mapel: number) {
    openConfirmModal({
      title: "Hapus Subjects",
      children: (
        <Text size="sm">
          Apakah anda yakin untuk menghapus Mata Pelajaran ini?
        </Text>
      ),
      centered: true,
      closeOnConfirm: false,
      confirmProps: { color: "red" },
      onConfirm: async () => {
        await mutateAsync({ id_mapel });
      },
    });
  }

  return (
    <div>
      <div className=" pb-5">
        <h2 className="text-2xl pb-3 font-semibold  text-green-800">
          KATEGORI
        </h2>
        <div className="pb-3 flex gap-x-5 mb-3">
          <TextInput
            className="font-medium "
            placeholder="Cari Kategori"
            onChange={handleSearchCategory}
            icon={<IconSearch size="23" className="text-green-800" />}
          />
          <Button
            variant="default"
            leftIcon={<IconPlus size="28" className="text-green-800" />}
            className="font-medium"
            onClick={handleAddCategory}
          >
            Tambah Kategori
          </Button>
        </div>
        <Table2
          header={columnsKategori}
          items={dataKategori}
          searchTerm={searchTermCategory}
          renderItem={(category) => (
            <tr key={category.id} className="">
              <td
                key={columnsKategori[0].id}
                className="py-5 px-4 font-normal text-sm text-gray-700 w-36"
              >
                {category[columnsKategori[0].id as keyof typeof category]}
              </td>
              <td
                key={columnsKategori[1].id}
                className="py-5 px-4 font-normal text-sm text-gray-700   !whitespace-normal"
              >
                {category[columnsKategori[1].id as keyof typeof category]}
              </td>
              <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
                <IconEdit
                  onClick={() => handleUpdateCategory(category)}
                  className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                />
              </td>
            </tr>
          )}
        />
        <hr className="mt-5 mx-4 text-slate-400" />
      </div>
      <div className="mt-3">
        <h2 className="text-2xl pb-3 font-semibold  text-green-800">
          MATA PELAJARAN
        </h2>
        <div className="pb-3 flex gap-x-5 mb-3">
          <TextInput
            className="font-medium "
            placeholder="Cari Mata Pelajaran"
            onChange={handleSearch}
            icon={<IconSearch size="23" className="text-green-800" />}
          />
          <Button
            variant="default"
            leftIcon={<IconPlus size="28" className="text-green-800" />}
            className="font-medium"
            onClick={handleAdd}
          >
            Tambah Mata Pelajaran
          </Button>
        </div>
        <Table2
          header={columns}
          items={datas}
          searchTerm={searchTerm}
          renderItem={(subjects) => (
            <tr key={subjects.id} className="">
              {columns.map((column) =>
                column.id != "" ? (
                  <td
                    key={column.id}
                    className="py-5 px-4 font-normal text-sm text-gray-700 "
                  >
                    {subjects[column.id as keyof typeof subjects]}
                  </td>
                ) : (
                  <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
                    <IconEdit
                      onClick={() => handleUpdate(subjects)}
                      className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                    />
                    <IconTrash
                      onClick={() => handleRemove(subjects.id_mapel)}
                      className="border-2 rounded-md text-red-500 hover:bg-red-50 cursor-pointer"
                    />
                  </td>
                )
              )}
            </tr>
          )}
        />
      </div>
    </div>
  );
};

export default SubjectsTable;
