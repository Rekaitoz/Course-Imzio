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
import { CreateWarungDTO, useCreateWarung } from "../api";
import { IconPlus, IconUser, IconX } from "@tabler/icons-react";
import { useState } from "react";

interface Props {
  onSuccess: VoidFunction;
}

const WarungCreateForm: React.FC<Props> = ({ onSuccess }) => {
  const form = useForm<CreateWarungDTO["data"]>({
    initialValues: {
      role: "",
      warungname: "",
      password: "",
    },
  });

  const [inputProduct, setInputProduct] = useState([
    {
      id: 0,
      code: "",
      productName: "",
      price: 0,
      unit: "",
    },
  ]);

  const [no, setNo] = useState(2);

  const addInput = () => {
    setNo(no + 1);
    setInputProduct([
      ...inputProduct,
      {
        id: no,
        code: "",
        productName: "",
        price: 0,
        unit: "",
      },
    ]);
  };

  const eraseInput = (itemId: number) => {
    setInputProduct(inputProduct.filter(({ id }) => id !== itemId));
  };

  const updateDataInput = (value: any, index: number, name: any) => {
    let newArr: any = [...inputProduct];

    newArr[index][name] = value;

    setInputProduct(newArr);
  };

  const { mutateAsync, isLoading } = useCreateWarung({
    config: {
      onError({ response }) {
        form.setErrors((response?.data as any).errors);
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
        <div className="grid lg:grid-cols-2 gap-x-10 border-b-2 border-b-gray-300 pb-8 mb-5">
          <TextInput
            label="Nama Warung"
            required
            {...form.getInputProps("name")}
          />
          <Select
            label="Akun Warung"
            placeholder=""
            searchable
            required
            data={[
              { value: "rizky", label: "Rizky" },
              { value: "iman", label: "Iman" },
              { value: "adit", label: "Adit" },
            ]}
          />
        </div>
        <div className="pt-2 rounded-lg  col-span-12 w-full z-10">
          <h1 className="font-bold text-2xl text-slate-800 pb-6">
            Barang Jualan Warung
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
                    Kode Barang
                  </th>
                  <th
                    key={3}
                    scope="col"
                    className="py-3 px-5 text-left w-max text-xs uppercase whitespace-nowrap"
                  >
                    Nama Barang
                  </th>
                  <th
                    key={4}
                    scope="col"
                    className="py-3 px-5 text-left w-max text-xs uppercase whitespace-nowrap"
                  >
                    Harga
                  </th>
                  <th
                    key={5}
                    scope="col"
                    className="py-3 px-5 text-left w-max text-xs uppercase whitespace-nowrap"
                  >
                    Unit
                  </th>
                  <th
                    key={6}
                    scope="col"
                    className="py-3 px-5 text-left w-max text-xs uppercase whitespace-nowrap"
                  ></th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium divide-y divide-gray-300 [&_td]:whitespace-nowrap [&_td]:px-5 [&_td]:py-3">
                {inputProduct.map((item, index, length) => (
                  <tr key={item.id + "_" + index}>
                    <td className="min-w-[14rem]">
                      <TextInput
                        required
                        name="code"
                        placeholder=""
                        value={item.code}
                        onChange={(value) =>
                          updateDataInput(value, index, "code")
                        }
                      />
                    </td>
                    <td className="min-w-[14rem]">
                      <TextInput
                        required
                        name="productName"
                        placeholder=""
                        value={item.productName}
                        onChange={(value) =>
                          updateDataInput(value, index, "productName")
                        }
                      />
                    </td>
                    <td className="min-w-[14rem]">
                      <NumberInput
                        name="price"
                        placeholder="Masukan jumlah"
                        min={1}
                        required
                        value={item.price}
                        onChange={(value) =>
                          updateDataInput(value, index, "price")
                        }
                      />
                    </td>
                    <td className="min-w-[14rem]">
                      <TextInput
                        name="unit"
                        placeholder=""
                        value={item.unit}
                        onChange={(value) =>
                          updateDataInput(value, index, "amount")
                        }
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
            Tambah Barang
          </Button>
        </div>
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

export default WarungCreateForm;
