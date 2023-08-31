import {
  Button,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { CreateClassDTO, useCreateClass, useClasss } from "../api";
import { useTeachers } from "features/teacher";
import { IconPlus, IconUser, IconX } from "@tabler/icons-react";
import { useState, useMemo, useEffect } from "react";
import { useAuth } from "features/auth";

interface Props {
  onSuccess: VoidFunction;
  titleClass: string;
}

const ClassCreateForm: React.FC<Props> = ({ onSuccess, titleClass }) => {
  const type = titleClass == "tahfiz" ? "tahfiz" : "umum";

  const form = useForm<CreateClassDTO["data"]>({
    initialValues: {
      nama_kelas: "",
      jenis: titleClass,
      id_wali_kelas: null,
      operator: 1,
    },
  });

  const { data: waliKelas } = useTeachers();
  // const [inputProduct, setInputProduct] = useState([
  //   {
  //     id: 0,
  //     name: "",
  //   },
  // ]);

  // const [no, setNo] = useState(2);

  // const addInput = () => {
  //   setNo(no + 1);
  //   setInputProduct([
  //     ...inputProduct,
  //     {
  //       id: no,
  //       name: "",
  //     },
  //   ]);
  // };

  // const eraseInput = (itemId: number) => {
  //   setInputProduct(inputProduct.filter(({ id }) => id !== itemId));
  // };

  // const updateDataInput = (value: any, index: number, name: any) => {
  //   let newArr: any = [...inputProduct];

  //   newArr[index][name] = value;

  //   setInputProduct(newArr);
  // };

  const wali = useMemo(() => {
    return (waliKelas ?? []).map(({ nama_guru, id_guru }: any) => ({
      label: nama_guru,
      value: id_guru,
    }));
  }, [waliKelas]);

  const { mutateAsync, isLoading } = useCreateClass({
    config: {
      onError({ response }) {
        form.setErrors((response?.data as any).messages);
      },
      onSuccess() {
        closeAllModals();
        onSuccess();
      },
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await mutateAsync({ data: values });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
      <div className=" gap-y-4 lg:space-y-0">
        <div className="grid gap-y-5 pb-10 mb-5">
          <Select
            label="Wali Kelas"
            placeholder=""
            searchable
            required
            data={wali}
            {...form.getInputProps("id_wali_kelas")}
          />
          <TextInput
            label="Nama Kelas"
            required
            {...form.getInputProps("nama_kelas")}
          />
          {/* <Select
            label="Jenis"
            placeholder=""
            searchable
            required
            data={[
              { value: "umum", label: "Umum" },
              { value: "tahfiz", label: "Tahfiz" },
            ]}
            {...form.getInputProps("jenis")}
          /> */}
        </div>
        {/* <div className="pt-2 rounded-lg  col-span-12 w-full z-10">
          <h1 className="font-bold text-2xl text-slate-800 pb-6">
            Tambah Santri
          </h1>
          <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-gray-50">
            <table className="table-auto col-span-12 w-full">
              <thead className="border-t border-b-[1.5px] border-gray-300 mx-4">
                <tr>
                  <th
                    key={1}
                    scope="col"
                    className="py-3 px-5 text-left w-max text-xs uppercase whitespace-nowrap"
                  >
                    Daftar Santri
                  </th>
                  <th
                    key={2}
                    scope="col"
                    className="py-3 px-5 text-left w-max text-xs uppercase whitespace-nowrap"
                  ></th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium divide-y divide-gray-300 [&_td]:whitespace-nowrap [&_td]:px-5 [&_td]:py-3">
                {inputProduct.map((item, index, length) => (
                  <tr key={item.id + "_" + index}>
                    <td className="min-w-[14rem]">
                      <Select
                        required
                        name="name"
                        placeholder=""
                        data={[
                          { value: "zaidan", label: "Zaidan" },
                          { value: "kamil", label: "Kamil" },
                        ]}
                      />
                    </td>
                    <td className="">
                      <button
                        className={`col-span-1 p-1  float-right rounded-full bg-red-100 text-red-800 h-fit w-fit ${
                          inputProduct.length == 1 ? "hidden" : ""
                        }`}
                        onClick={() => eraseInput(item.id)}
                      >
                        <IconX size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button
            variant="default"
            leftIcon={<IconPlus size="28" className="text-green-800" />}
            className="font-medium mt-5"
            onClick={addInput}
          >
            Tambah Baris
          </Button>
        </div> */}
      </div>

      <div className="flex items-center justify-end gap-4 mt-4">
        <Button
          type="button"
          variant="default"
          onClick={() => closeAllModals()}
          loading={isLoading}
        >
          Tutup
        </Button>
        <Button
          type="submit"
          loading={isLoading}
          className="bg-green-900 hover:bg-green-800"
        >
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default ClassCreateForm;
