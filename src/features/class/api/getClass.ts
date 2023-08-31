import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { ClassProps } from "../types";

export type GetClasssResponse = {
  classs: ClassProps[];
};

const data = {
  class: [
    {
      id: 1,
      category: "umum",
      program: "Program Tahfidz",
      name: "Mawar",
      waliName: "Budi",
      yearProgress: "2022/2023",

      product: [
        {
          code: "NIWNC2",
          productName: "Beng-beng",
          price: 1000,
          unit: "satuan",
        },
        {
          code: "NIWNC2",
          productName: "Taro",
          price: 5000,
          unit: "satuan",
        },
      ],
    },
    {
      id: 2,
      category: "umum",
      program: "Program Tahfidz",
      name: "Mawar",
      waliName: "Budi",
      yearProgress: "2022/2023",
      product: [
        {
          code: "NIWNC2",
          productName: "Beng-beng",
          price: 1000,
          unit: "satuan",
        },
        {
          code: "NIWNC2",
          productName: "Taro",
          price: 5000,
          unit: "satuan",
        },
      ],
    },
    {
      id: 3,
      category: "umum",
      program: "Program Tahfidz",
      name: "Mawar",
      waliName: "Budi",
      yearProgress: "2022/2023",
      product: [
        {
          code: "NIWNC2",
          productName: "Beng-beng",
          price: 1000,
          unit: "satuan",
        },
        {
          code: "NIWNC2",
          productName: "Taro",
          price: 5000,
          unit: "satuan",
        },
      ],
    },
    {
      id: 4,
      category: "umum",
      program: "Program Tahfidz",
      name: "Mawar",
      waliName: "Budi",
      yearProgress: "2022/2023",
      product: [
        {
          code: "NIWNC2",
          productName: "Beng-beng",
          price: 1000,
          unit: "satuan",
        },
        {
          code: "NIWNC2",
          productName: "Taro",
          price: 5000,
          unit: "satuan",
        },
      ],
    },
    {
      id: 5,
      category: "umum",
      program: "Program Tahfidz",
      name: "Mawar",
      waliName: "Budi",
      yearProgress: "2022/2023",
      product: [
        {
          code: "NIWNC2",
          productName: "Beng-beng",
          price: 1000,
          unit: "satuan",
        },
        {
          code: "NIWNC2",
          productName: "Taro",
          price: 5000,
          unit: "satuan",
        },
      ],
    },
    {
      id: 6,
      category: "umum",
      program: "Program Tahfidz",
      name: "Mawar",
      waliName: "Budi",
      yearProgress: "2022/2023",
      product: [
        {
          code: "NIWNC2",
          productName: "Beng-beng",
          price: 1000,
          unit: "satuan",
        },
        {
          code: "NIWNC2",
          productName: "Taro",
          price: 5000,
          unit: "satuan",
        },
      ],
    },
  ],
};

export async function getClasss() {
  const res = await axios.get("/kelas/umum");
  // console.log(res.data);

  // return data;
  return res.data.kelas;
}

type QueryFnType = typeof getClasss;

type UseClasssOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useClasss({ config }: UseClasssOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["classs"],
    queryFn: () => getClasss(),
  });
}
