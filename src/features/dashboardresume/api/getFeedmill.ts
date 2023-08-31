import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { dayjs } from "lib/dayjs";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
// import { SalesFeedmillProps } from "../../types";

export type GetSalesFeedmillsResponse = {
  [key: number]: number;
  tahun: string;
};

export async function getSalesFeedmills({ params }: any) {
  const startYear = dayjs(params?.checkYear?.startDate).format("YYYY");
  const endYear = dayjs(params?.checkYear?.endDate).format("YYYY");

  if (params.checkYear && params.checkYear) {
    const res = await axios.get(
      `/feedbeli?page=0&limit=-1&startDate=${startYear}&endDate=${endYear}`
    );
    return res.data.data.result;
  } else {
    const res = await axios.get(`/feedbeli?page=0&limit=-1`);
    return res.data.data.result;
  }
}

type QueryFnType = typeof getSalesFeedmills;

type UseSalesFeedmillsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useSalesFeedmills({ params }: any) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["salesFeedmills", params],
    queryFn: () => getSalesFeedmills({ params }),
  });
}
