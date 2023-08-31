import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { MushafProps } from "../types";

export type GetMushafsResponse = {
  mushafs: MushafProps[];
};

const data = {
  mushaf: [
    {
      id: 1,
      name: "Standar Ustmani",
      juz: 1,
      from: 1,
      to: 3,
    },
    {
      id: 2,
      name: "Standar Ustmani",
      juz: 1,
      from: 1,
      to: 3,
    },
    {
      id: 3,
      name: "Standar Ustmani",
      juz: 1,
      from: 1,
      to: 3,
    },
    {
      id: 4,
      name: "Standar Ustmani",
      juz: 1,
      from: 1,
      to: 3,
    },
    {
      id: 5,
      name: "Standar Ustmani",
      juz: 1,
      from: 1,
      to: 3,
    },
    {
      id: 6,
      name: "Standar Ustmani",
      juz: 1,
      from: 1,
      to: 3,
    },
    {
      id: 7,
      name: "Standar Ustmani",
      juz: 1,
      from: 1,
      to: 3,
    },
  ],
};

export async function getMushafs() {
  const res = await axios.get("/mushaf");

  // return data;
  return res.data;
}

type QueryFnType = typeof getMushafs;

type UseMushafsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useMushafs({ config }: UseMushafsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["mushafs"],
    queryFn: () => getMushafs(),
  });
}
