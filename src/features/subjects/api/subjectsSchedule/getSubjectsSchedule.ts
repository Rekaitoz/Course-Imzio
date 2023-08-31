import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { SubjectsScheduleProps } from "../../types";

export type GetSubjectsSchedulesResponse = {
  subjectsSchedules: SubjectsScheduleProps[];
};

const data = [
  {
    id_jadwal_pelajaran: 1,
    id_jam_pelajaran: 1,
    hari: "rabu",
    jamPel: "08:00-12:00",
    guru: "",
    mapel: "",
  },
  {
    id: 2,
    id_jam_pelajaran: 2,
    hari: "rabu",
    jamPel: "12:00-16:00",
    guru: "",
    mapel: "",
  },
  {
    id: 3,
    id_jam_pelajaran: 3,
    hari: "kamis",
    jamPel: "08:00-12:00",
    guru: "",
    mapel: "",
  },
  {
    id: 4,
    id_jam_pelajaran: 4,
    hari: "jumat",
    jamPel: "08:00-12:00",
    guru: "",
    mapel: "",
  },
  {
    id: 5,
    id_jam_pelajaran: 5,
    hari: "sabtu",
    jamPel: "08:00-12:00",
    guru: "",
    mapel: "",
  },
];

export async function getSubjectsSchedules(
  idSemester: number,
  idKelas: number
) {
  const res = await axios.get(
    `/jadwalMapelBySemesterKelas/${idSemester}/${idKelas}`
  );

  // return data;
  // console.log(res.data.jadwal_mapel);
  // return data.subjectsSchedule;
  return res.data;
}

type QueryFnType = typeof getSubjectsSchedules;

type UseSubjectsSchedulesOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useSubjectsSchedules(idSemester: number, idKelas: number) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["subjectsSchedules"],
    queryFn: () => getSubjectsSchedules(idSemester, idKelas),
  });
}
