import {
  Button,
  Group,
  NumberInput,
  PasswordInput,
  Select,
  Tabs,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import {
  CreateClassDTO,
  useCreateClass,
  useClasss,
  useUpdateSantri,
} from "../api";
import { useTeachers } from "features/teacher";
import {
  IconChevronRight,
  IconPlus,
  IconUser,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { useState, useMemo, useEffect, forwardRef } from "react";
import { useAuth } from "features/auth";

interface Props {
  classs: {
    id_kelas: number;
    nama_kelas: string;
    jenis: string;
    id_wali_kelas: number;
    santri: {
      id: number;
      id_santri: number;
      no_induk: string;
      nama_santri: string;
    }[];
  };
  onSuccess: VoidFunction;
  titleClass: string;
}

const ClassSantriForm: React.FC<Props> = ({
  classs,
  onSuccess,
  titleClass,
}) => {
  // const type = titleClass == "tahfiz" ? "tahfiz" : "umum";

  const [inputProduct, setInputProduct] = useState<
    { id_santri: number | null }[]
  >([
    {
      id_santri: null,
    },
  ]);

  useEffect(() => {
    if (classs.santri.length > 0) {
      setInputProduct(
        classs.santri.map((item: any, index: number) => {
          return { id_santri: item.id_santri };
        })
      );
    }
  }, [classs]);

  const addInput = () => {
    setInputProduct([
      ...inputProduct,
      {
        id_santri: null,
      },
    ]);
  };

  const eraseInput = (itemId: number) => {
    setInputProduct(inputProduct.filter((item, index) => index !== itemId));
  };

  const updateDataInput = (value: any, index: number, name: any) => {
    let newArr: any = [...inputProduct];

    newArr[index][name] = value;

    setInputProduct(newArr);
  };

  // fwwfwafnkwfwkfwnfkwfnnfkkewfakwenf

  // const { data: santris } = useSantris();

  // const santri = useMemo(() => {
  //   return (santris ?? []).map(({ nama_santri, id_santri, no_induk }: any) => ({
  //     label: nama_santri + ", " + no_induk,
  //     value: id_santri,
  //   }));
  // }, [santris]);

  interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
    image: string;
    label: string;
    description: string;
  }

  const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ image, label, description, ...others }: ItemProps, ref) => (
      <div ref={ref} {...others}>
        <Group noWrap>
          <div>
            <Text size="sm">{label}</Text>
            <Text size="xs" opacity={0.65}>
              {description}
            </Text>
          </div>
        </Group>
      </div>
    )
  );

  const { mutateAsync, isLoading } = useUpdateSantri({
    config: {
      onError({ response }) {
        // form.setErrors((response?.data as any).messages);
      },
      onSuccess() {
        closeAllModals();
        onSuccess();
      },
    },
  });
  console.log(inputProduct);

  const handleSubmit = async (e: any) => {
    // e.prevent.default();
    await mutateAsync({
      data: { id_kelas: classs.id_kelas, santri: inputProduct },
    });
  };

  return (
    <form className="relative px-3 pb-5">
      <div className="rounded-lg  col-span-12 w-full z-10 pt-4 pb-5">
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
              {inputProduct.map((item, index) => (
                <tr key={item.id_santri + "_" + index}>
                  <td className="min-w-[14rem]">
                    {/* <Select
                      required
                      name="name"
                      placeholder=""
                      searchable
                      dropdownPosition="bottom"
                      itemComponent={SelectItem}
                      // data={santri}
                      value={item.id_santri as any}
                      onChange={(value) =>
                        updateDataInput(value, index, "id_santri")
                      }
                    /> */}
                  </td>
                  <td className="">
                    <button
                      className={`col-span-1 p-1  float-right rounded-full bg-red-100 text-red-800 h-fit w-fit ${
                        inputProduct.length == 1 ? "hidden" : ""
                      }`}
                      onClick={() => eraseInput(index)}
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
      </div>
      <div className="flex items-center justify-end gap-4 mt-10">
        <Button
          type="button"
          variant="default"
          onClick={() => closeAllModals()}
          loading={isLoading}
        >
          Tutup
        </Button>
        <Button
          type="button"
          onClick={(e) => handleSubmit(e)}
          loading={isLoading}
          className="bg-green-900 hover:bg-green-800"
        >
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default ClassSantriForm;
