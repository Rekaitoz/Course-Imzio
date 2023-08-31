import React, { useEffect, useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import { IconTrash, IconEdit, IconPlus, IconSearch } from "@tabler/icons-react";
import Table2 from "components/elements/Table/Table2";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import { UserCreateForm, UserUpdateForm } from ".";

const columns = [
  { id: "no", label: "No" },
  { id: "username", label: "Username" },
  { id: "level", label: "Level" },
];

const UserTable = ({ data }: any) => {
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
          Tambah User
        </div>
      ),
      children: <UserCreateForm onSuccess={closeAllModals} />,
    });
  }

  function handleUpdate(user: any) {
    openModal({
      title: (
        <div className="text-2xl font-bold text-slate-700 px-3 pt-3">
          Update User
        </div>
      ),
      children: <UserUpdateForm onSuccess={closeAllModals} user={user} />,
    });
  }

  function handleRemove(username: string) {
    openConfirmModal({
      title: "Hapus User",
      children: (
        <Text size="sm">Apakah anda yakin untuk menghapus user ini?</Text>
      ),
      centered: true,
      closeOnConfirm: false,
      confirmProps: { color: "red" },
      onConfirm: async () => {
        // await deleteMutation.mutateAsync({ username });
      },
    });
  }

  return (
    <div className="">
      <div className="pb-3 flex gap-x-5 mb-3">
        <TextInput
          className="font-medium "
          placeholder="Cari User"
          onChange={handleSearch}
          icon={<IconSearch size="23" className="text-green-800" />}
        />
        <Button
          variant="default"
          leftIcon={<IconPlus size="28" className="text-green-800" />}
          className="font-medium"
          onClick={handleAdd}
        >
          Tambah User
        </Button>
      </div>
      <Table2
        header={columns}
        items={datas}
        searchTerm={searchTerm}
        renderItem={(user) => (
          <tr key={user.id} className="">
            {columns.map((column) => (
              <td
                key={column.id}
                className="py-5 px-4 font-normal text-sm text-gray-700 "
              >
                {user[column.id as keyof typeof user]}
              </td>
            ))}
            <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
              <IconEdit
                onClick={() => handleUpdate(user)}
                className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
              />
              <IconTrash
                onClick={() => handleRemove(user.id)}
                className="border-2 rounded-md text-red-500 hover:bg-red-50 cursor-pointer"
              />
            </td>
          </tr>
        )}
      />
    </div>
  );
};

export default UserTable;
