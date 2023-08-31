import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { AttendanceProps } from "../types";

export type GetAttendancesResponse = {
  attendances: AttendanceProps[];
};

const data = {
  attendance: [
    {
      id: 1,
      nis: "4919402",
      name: "Rizki",
      present: "40",
      permission: 5,
      sick: 3,
      alpha: 0,
      abdi: 0,
    },
    {
      id: 2,
      nis: "4919402",
      name: "Rizki",
      present: "40",
      permission: 5,
      sick: 3,
      alpha: 0,
      abdi: 0,
    },
    {
      id: 3,
      nis: "4919402",
      name: "Rizki",
      present: "40",
      permission: 5,
      sick: 3,
      alpha: 0,
      abdi: 0,
    },
    {
      id: 4,
      nis: "4919402",
      name: "Rizki",
      present: "40",
      permission: 5,
      sick: 3,
      alpha: 0,
      abdi: 0,
    },
    {
      id: 5,
      nis: "4919402",
      name: "Rizki",
      present: "40",
      permission: 5,
      sick: 3,
      alpha: 0,
      abdi: 0,
    },
    {
      id: 6,
      nis: "4919402",
      name: "Rizki",
      present: "40",
      permission: 5,
      sick: 3,
      alpha: 0,
      abdi: 0,
    },
    {
      id: 7,
      nis: "4919402",
      name: "Rizki",
      present: "40",
      permission: 5,
      sick: 3,
      alpha: 0,
      abdi: 0,
    },
  ],
};

export async function getAttendances() {
  const res = await axios.get("/absensi");

  // return data;
  return res.data;
}

type QueryFnType = typeof getAttendances;

type UseAttendancesOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useAttendances({ config }: UseAttendancesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["attendances"],
    queryFn: () => getAttendances(),
  });
}
