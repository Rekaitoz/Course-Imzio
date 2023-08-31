import React, { useEffect, useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import { IconTrash, IconEdit, IconPlus, IconSearch } from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { PredicateCreateForm, PredicateUpdateForm } from ".";
import { useDeletePredicate } from "../api";

const columns = [
  { id: "no", label: "No" },
  { id: "nama_predikat", label: "Predikat" },
  { id: "keterangan", label: "Keterangan" },
  { id: "", label: "Opsi" },
];

const PredicateTable = ({ data }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [datas, setDatas] = useState([]);

  const { mutateAsync, isLoading } = useDeletePredicate();

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
          Tambah Predikat
        </div>
      ),
      children: <PredicateCreateForm onSuccess={closeAllModals} />,
    });
  }

  function handleUpdate(predicate: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Update Predikat
        </div>
      ),
      children: (
        <PredicateUpdateForm onSuccess={closeAllModals} predicate={predicate} />
      ),
    });
  }

  function handleRemove(id: number) {
    openConfirmModal({
      title: "Hapus Predikat",
      children: (
        <Text size="sm">Apakah anda yakin untuk menghapus Predikat ini?</Text>
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
          placeholder="Cari Predikat"
          onChange={handleSearch}
          icon={<IconSearch size="23" className="text-green-800" />}
        />
        <Button
          variant="default"
          leftIcon={<IconPlus size="28" className="text-green-800" />}
          className="font-medium"
          onClick={handleAdd}
        >
          Tambah Predikat
        </Button>
      </div>
      <Table2
        header={columns}
        items={datas}
        searchTerm={searchTerm}
        renderItem={(predicate) => (
          <tr key={predicate.id} className="">
            {columns.map((column) =>
              column.id != "" ? (
                <td
                  key={column.id}
                  className="py-5 px-4 font-normal text-sm text-gray-700 "
                >
                  {predicate[column.id as keyof typeof predicate]}
                </td>
              ) : (
                <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
                  <IconEdit
                    onClick={() => handleUpdate(predicate)}
                    className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                  />
                  <IconTrash
                    onClick={() => handleRemove(predicate.id)}
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

export default PredicateTable;
