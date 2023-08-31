import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { WarungProps } from "../types";

export type GetWarungsResponse = {
  warungs: WarungProps[];
};

const data = {
  warung: [
    {
      id: 1,
      name: "Outlet Ustadzah Atul",
      account: "ummiyemi",
      limit: "aktif",
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
      name: "Outlet Ustadzah Atul",
      account: "ummiyemi",
      limit: "aktif",
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
      name: "Outlet Ustadzah Atul",
      account: "ummiyemi",
      limit: "aktif",
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
      name: "Outlet Ustadzah Atul",
      account: "ummiyemi",
      limit: "aktif",
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
      name: "Outlet Ustadzah Atul",
      account: "ummiyemi",
      limit: "aktif",
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
      name: "Outlet Ustadzah Atul",
      account: "ummiyemi",
      limit: "aktif",
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

export async function getWarungs() {
  // const res = await axios.get("/warung");

  return data;
  // return res.data;
}

type QueryFnType = typeof getWarungs;

type UseWarungsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useWarungs({ config }: UseWarungsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["warungs"],
    queryFn: () => getWarungs(),
  });
}
