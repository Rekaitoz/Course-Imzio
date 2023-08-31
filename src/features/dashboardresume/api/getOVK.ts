import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { dayjs } from "lib/dayjs";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
// import { SalesOVKrops } from "../../types";

export type GetSalesOVKResponse = {
  [key: number]: number;
  tahun: string;
};

export async function getSalesOVK({ params }: any) {
  const startYear = dayjs(params?.checkYear?.startDate).format("YYYY");
  const endYear = dayjs(params?.checkYear?.endDate).format("YYYY");

  if (params.checkYear && params.checkYear) {
    const res = await axios.get(
      `/ovkbeli?page=0&limit=-1&startDate=${startYear}&endDate=${endYear}`
    );
    return res.data.data.result;
  } else {
    const res = await axios.get(`/ovkbeli?page=0&limit=-1`);
    return res.data.data.result;
  }
}

type QueryFnType = typeof getSalesOVK;

type UseSalesOVKOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useSalesOVK({ params }: any) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["salesOVK", params],
    queryFn: () => getSalesOVK({ params }),
  });
}
