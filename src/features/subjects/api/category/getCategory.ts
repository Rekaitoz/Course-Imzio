import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { CategoryProps } from "../../types";

export type GetCategorysResponse = {
  categorys: CategoryProps[];
};

const data = {
  category: [
    {
      id: 1,
      nama_kategori: "Abstarct",
    },
    {
      id: 2,
      nama_kategori: "Non Abstract",
    },
    {
      id: 3,
      nama_kategori: "Praketek",
    },
    {
      id: 4,
      nama_kategori: "Bersama Terbang",
    },
    {
      id: 5,
      nama_kategori: "Pergi dan Lupakan",
    },
    {
      id: 6,
      nama_kategori: "Jurid Malam",
    },
    {
      id: 7,
      nama_kategori: "pendinginan",
    },
  ],
};

export async function getCategorys() {
  const res = await axios.get("/kategoriMapel");

  // return data;
  return res.data;
}

type QueryFnType = typeof getCategorys;

type UseCategorysOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useCategorys({ config }: UseCategorysOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["categorys"],
    queryFn: () => getCategorys(),
  });
}
