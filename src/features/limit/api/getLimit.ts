import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { LimitProps } from "../types";

export type GetLimitsResponse = {
  limits: LimitProps[];
};

const data = {
  limit: [
    {
      id: 1,
      nis: "001001001",
      name: "Siti Fathimah",
      nominal: "Rp 385.000",
    },
    {
      id: 2,
      nis: "001001001",
      name: "Siti Fathimah",
      nominal: "Rp 385.000",
    },
    {
      id: 3,
      nis: "001001001",
      name: "Siti Fathimah",
      nominal: "Rp 385.000",
    },
    {
      id: 4,
      nis: "001001001",
      name: "Siti Fathimah",
      nominal: "Rp 385.000",
    },
    {
      id: 5,
      nis: "001001001",
      name: "Siti Fathimah",
      nominal: "Rp 385.000",
    },
    {
      id: 6,
      nis: "001001001",
      name: "Siti Fathimah",
      nominal: "Rp 385.000",
    },
    {
      id: 7,
      nis: "001001001",
      name: "Siti Fathimah",
      nominal: "Rp 385.000",
    },
  ],
};

export async function getLimits() {
  // const res = await axios.get("/limit");

  return data;
  // return res.data;
}

type QueryFnType = typeof getLimits;

type UseLimitsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useLimits({ config }: UseLimitsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["limits"],
    queryFn: () => getLimits(),
  });
}
