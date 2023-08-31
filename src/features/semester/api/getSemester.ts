import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { SemesterProps } from "../types";

export type GetSemestersResponse = {
  semesters: SemesterProps[];
};

const data = {
  semester: [
    {
      id: 1,
      semester: "ganjil",
      startYear: "2022",
      endYear: "2023",
    },
    {
      id: 2,
      semester: "ganjil",
      startYear: "2022",
      endYear: "2023",
    },
    {
      id: 3,
      semester: "ganjil",
      startYear: "2022",
      endYear: "2023",
    },
    {
      id: 4,
      semester: "ganjil",
      startYear: "2022",
      endYear: "2023",
    },
    {
      id: 5,
      semester: "ganjil",
      startYear: "2022",
      endYear: "2023",
    },
    {
      id: 6,
      semester: "ganjil",
      startYear: "2022",
      endYear: "2023",
    },
    {
      id: 7,
      semester: "ganjil",
      startYear: "2022",
      endYear: "2023",
    },
  ],
};

export async function getSemesters() {
  const res = await axios.get("/semester");
  // console.log(res);

  // return data;
  return res.data;
}

type QueryFnType = typeof getSemesters;

type UseSemestersOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useSemesters({ config }: UseSemestersOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["semesters"],
    queryFn: () => getSemesters(),
  });
}
