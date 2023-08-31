import {
  Button,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { closeAllModals } from "@mantine/modals";
import { UpdateCategoryDTO, useUpdateCategory } from "../api";
// import { Category } from "../types";

interface Props {
  category: { id_kategori_mapel: number; nama_kategori: string };
  onSuccess: VoidFunction;
}

const CategoryUpdateForm: React.FC<Props> = ({ category, onSuccess }) => {
  const form = useForm<UpdateCategoryDTO["data"]>({
    initialValues: {
      nama_kategori: category.nama_kategori,
      operator: 1,
    },
  });

  const { mutateAsync, isLoading } = useUpdateCategory({
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

  const handleSubmit = form.onSubmit(async (data) => {
    await mutateAsync({
      id_kategori_mapel: category.id_kategori_mapel,
      data: {
        ...data,
        // password: !!data.password ? data.password : undefined,
      },
    });
  });

  return (
    <form className="relative px-3 pb-5" onSubmit={handleSubmit}>
      <div className="grid gap-y-4 lg:space-y-0">
        <TextInput
          label="Nama Kategory"
          required
          {...form.getInputProps("nama_kategori")}
        />
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
        <Button type="submit" loading={isLoading} className="bg-green-900">
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default CategoryUpdateForm;
