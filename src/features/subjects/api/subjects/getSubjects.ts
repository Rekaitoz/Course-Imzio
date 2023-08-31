import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { SubjectsProps } from "../../types";

export type GetSubjectssResponse = {
  subjectss: SubjectsProps[];
};

const data = {
  subjects: [
    {
      id: 1,
      subjects: "Matematika",
      teacher: "Rizki",
      category: "Utama",
      appraisalType: "Umum",
    },
    {
      id: 2,
      subjects: "Matematika",
      teacher: "Rizki",
      category: "Utama",
      appraisalType: "Umum",
    },
    {
      id: 3,
      subjects: "Matematika",
      teacher: "Rizki",
      category: "Utama",
      appraisalType: "Umum",
    },
    {
      id: 4,
      subjects: "Matematika",
      teacher: "Rizki",
      category: "Utama",
      appraisalType: "Umum",
    },
    {
      id: 5,
      subjects: "Matematika",
      teacher: "Rizki",
      category: "Utama",
      appraisalType: "Umum",
    },
    {
      id: 6,
      subjects: "Matematika",
      teacher: "Rizki",
      category: "Utama",
      appraisalType: "Umum",
    },
    {
      id: 7,
      subjects: "Matematika",
      teacher: "Rizki",
      category: "Utama",
      appraisalType: "Umum",
    },
  ],
};

export async function getSubjectss() {
  const res = await axios.get("/mapel/umum");

  // return data;
  return res.data.mapel;
}

type QueryFnType = typeof getSubjectss;

type UseSubjectssOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useSubjectss({ config }: UseSubjectssOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["subjectss"],
    queryFn: () => getSubjectss(),
  });
}
