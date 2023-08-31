import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { WaliProps } from "../../types";

export type GetWaliResponse = {
  wali: WaliProps[];
};

const data = {
  wali: [
    {
      id: 1,
      code: "FNXI24",
      guardian: "Mr. Dewa",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 2,
      code: "FNXI24",
      guardian: "Mr. Abi",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 3,
      code: "FNXI24",
      guardian: "Mr. Kerna",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 4,
      code: "FNXI24",
      guardian: "Mr. Misla",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 5,
      code: "FNXI24",
      guardian: "Mr. Dewa",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 6,
      code: "FNXI24",
      guardian: "Groot",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 7,
      code: "FNXI24",
      guardian: "Mr. Dewa",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 8,
      code: "FNXI24",
      guardian: "Mr. Dewa",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 9,
      code: "FNXI24",
      guardian: "Mr. Dewa",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 10,
      code: "FNXI24",
      guardian: "Mr. Dewa",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 11,
      code: "FNXI24",
      guardian: "Mr. Dewa",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 12,
      code: "FNXI24",
      guardian: "Mr. Dewa",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 13,
      code: "FNXI24",
      guardian: "Mr. Dewa",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 14,
      code: "FNXI24",
      guardian: "Mr. Dewa",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
    {
      id: 15,
      code: "FNXI24",
      guardian: "Mr. Dewa",
      address: "Jalan Banjarbaru",
      noHp: "087830397106",
      santri: "Diaken",
    },
  ],
};

export async function getWali(id: number) {
  const res = await axios.get("/waliSantri/" + id);

  // return data;
  // console.log(res);

  return res;
}

type QueryFnType = typeof getWali;

type UseWaliOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useWali(id: number) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["wali"],
    queryFn: () => getWali(id),
  });
}
