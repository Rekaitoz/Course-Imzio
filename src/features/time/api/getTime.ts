import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { TimeProps } from "../types";

export type GetTimesResponse = {
  times: TimeProps[];
};

const data = {
  time: [
    {
      id: 1,
      day: "senin",
      startTime: "08:00 AM",
      endTime: "12:00 PM",
    },
    {
      id: 2,
      day: "Selasa",
      startTime: "08:00 AM",
      endTime: "12:00 PM",
    },
    {
      id: 3,
      day: "Rabu",
      startTime: "08:00 AM",
      endTime: "12:00 PM",
    },
    {
      id: 4,
      day: "Kamis",
      startTime: "08:00 AM",
      endTime: "12:00 PM",
    },
    {
      id: 5,
      day: "Jumat",
      startTime: "08:00 AM",
      endTime: "12:00 PM",
    },
    {
      id: 6,
      day: "Sabtu",
      startTime: "08:00 AM",
      endTime: "12:00 PM",
    },
    {
      id: 7,
      day: "Minggu",
      startTime: "08:00 AM",
      endTime: "12:00 PM",
    },
  ],
};

export async function getTimes() {
  const res = await axios.get("/jamPelajaran");

  // return data;
  return res.data;
}

type QueryFnType = typeof getTimes;

type UseTimesOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useTimes({ config }: UseTimesOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["times"],
    queryFn: () => getTimes(),
  });
}
