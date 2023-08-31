import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { dayjs } from "lib/dayjs";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
// import { SalesChickenProps } from "../../types";

export type GetSalesDocResponse = {
  [key: number]: number;
  tahun: string;
};

export async function getSalesDoc({ params }: any) {
  const startYear = dayjs(params?.checkYear?.startDate).format("YYYY");
  const endYear = dayjs(params?.checkYear?.endDate).format("YYYY");

  if (params.checkYear && params.checkYear) {
    const res = await axios.get(
      `/docbeli?page=0&limit=-1&startDate=${startYear}&endDate=${endYear}`
    );
    return res.data.data.result;
  } else {
    const res = await axios.get(`/docbeli?page=0&limit=-1`);
    return res.data.data.result;
  }
}

type QueryFnType = typeof getSalesDoc;

type UseSalesDocOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useSalesDoc({ params }: any) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["salesDoc", params],
    queryFn: () => getSalesDoc({ params }),
  });
}
