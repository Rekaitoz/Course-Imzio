import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { PredicateProps } from "../types";

export type GetPredicatesResponse = {
  predicates: PredicateProps[];
};

const data = {
  predicate: [
    {
      id: 1,
      predicate: "A",
      information: "Sangat Baik",
    },
    {
      id: 2,
      predicate: "B",
      information: "Baik",
    },
    {
      id: 3,
      predicate: "C",
      information: "Cukup",
    },
    {
      id: 4,
      predicate: "D",
      information: "Buruk",
    },
  ],
};

export async function getPredicates() {
  const res = await axios.get("/predikat");

  // return data;
  return res.data;
}

type QueryFnType = typeof getPredicates;

type UsePredicatesOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function usePredicates({ config }: UsePredicatesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["predicates"],
    queryFn: () => getPredicates(),
  });
}
