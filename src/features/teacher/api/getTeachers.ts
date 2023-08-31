import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { TeacherProps } from "../types";

export type GetTeachersResponse = {
  teachers: TeacherProps[];
};

const data = {
  teacher: [
    {
      id: 1,
      name: "Suharto",
      nip: "215711146224001",
      jobPosition: "Kepala Sekolah",
      birthPlace: "Banjarmasin",
      birthDate: "19 Februari 2023",
      address: "Jalan. Banjarbaru",
      gender: "Laki-laki",
      noHp: "087830397106",
      username: "Rekaito",
    },
    {
      id: 2,
      name: "Suharto",
      nip: "215711146224001",
      jobPosition: "Kepala Sekolah",
      birthPlace: "Banjarmasin",
      birthDate: "19 Februari 2023",
      address: "Jalan. Banjarbaru",
      gender: "Laki-laki",
      noHp: "087830397106",
      username: "Rekaito",
    },
    {
      id: 3,
      name: "Suharto",
      nip: "215711146224001",
      jobPosition: "Kepala Sekolah",
      birthPlace: "Banjarmasin",
      birthDate: "19 Februari 2023",
      address: "Jalan. Banjarbaru",
      gender: "Laki-laki",
      noHp: "087830397106",
      username: "Rekaito",
    },
    {
      id: 4,
      name: "Suharto",
      nip: "215711146224001",
      jobPosition: "Kepala Sekolah",
      birthPlace: "Banjarmasin",
      birthDate: "19 Februari 2023",
      address: "Jalan. Banjarbaru",
      gender: "Laki-laki",
      noHp: "087830397106",
      username: "Rekaito",
    },
    {
      id: 5,
      name: "Suharto",
      nip: "215711146224001",
      jobPosition: "Kepala Sekolah",
      birthPlace: "Banjarmasin",
      birthDate: "19 Februari 2023",
      address: "Jalan. Banjarbaru",
      gender: "Laki-laki",
      noHp: "087830397106",
      username: "Rekaito",
    },
    {
      id: 6,
      name: "Suharto",
      nip: "215711146224001",
      jobPosition: "Kepala Sekolah",
      birthPlace: "Banjarmasin",
      birthDate: "19 Februari 2023",
      address: "Jalan. Banjarbaru",
      gender: "Laki-laki",
      noHp: "087830397106",
      username: "Rekaito",
    },
    {
      id: 7,
      name: "Suharto",
      nip: "215711146224001",
      jobPosition: "Kepala Sekolah",
      birthPlace: "Banjarmasin",
      birthDate: "19 Februari 2023",
      address: "Jalan. Banjarbaru",
      gender: "Laki-laki",
      noHp: "087830397106",
      username: "Rekaito",
    },
    {
      id: 8,
      name: "Suharto",
      nip: "215711146224001",
      jobPosition: "Kepala Sekolah",
      birthPlace: "Banjarmasin",
      birthDate: "19 Februari 2023",
      address: "Jalan. Banjarbaru",
      gender: "Laki-laki",
      noHp: "087830397106",
      username: "Rekaito",
    },
  ],
};

export async function getTeachers() {
  const res = await axios.get("/guru");

  // return data;
  return res.data;
}

type QueryFnType = typeof getTeachers;

type UseTeachersOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useTeachers({ config }: UseTeachersOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["teachers"],
    queryFn: () => getTeachers(),
  });
}
