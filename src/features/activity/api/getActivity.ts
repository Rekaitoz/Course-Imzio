import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { ActivityProps } from "../types";

export type GetActivitysResponse = {
  activitys: ActivityProps[];
};

const data = {
  activity: [
    {
      id: 1,
      name: "Ujian Semester Tahfizh",
      startDate: "28-11-2022",
      endDate: "02-12-2022",
    },
    {
      id: 2,
      name: "Ujian Semester Tafqih",
      startDate: "28-11-2022",
      endDate: "02-12-2022",
    },
    {
      id: 3,
      name: "Ujian Semester Tadris (Tahap 1)",
      startDate: "28-11-2022",
      endDate: "02-12-2022",
    },
    {
      id: 4,
      name: "Ujian Semester Tahfizh",
      startDate: "28-11-2022",
      endDate: "02-12-2022",
    },
    {
      id: 5,
      name: "Ujian Semester Tahfizh",
      startDate: "28-11-2022",
      endDate: "02-12-2022",
    },
    {
      id: 6,
      name: "Ujian Semester Tahfizh",
      startDate: "28-11-2022",
      endDate: "02-12-2022",
    },
  ],
};

export async function getActivitys() {
  // const res = await axios.get("/activity");

  return data;
  // return res.data;
}

type QueryFnType = typeof getActivitys;

type UseActivitysOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useActivitys({ config }: UseActivitysOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["activitys"],
    queryFn: () => getActivitys(),
  });
}
