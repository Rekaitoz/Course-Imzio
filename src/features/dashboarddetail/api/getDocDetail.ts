import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { dayjs } from "lib/dayjs";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
// import { DocDetailProps } from "../../types";

export type GetDocDetailsResponse = {
  [key: number]: number;
  tahun: string;
};

export async function getDocDetails({ params }: any) {
  const startYear = dayjs(params?.checkYear?.startDate).format("YYYY");
  const endYear = dayjs(params?.checkYear?.endDate).format("YYYY");

  if (params.checkYear.startDate && params.checkYear.startDate) {
    const res = await axios.get(
      `/dochpp?startYear=${startYear}&endYear=${endYear}`
    );
    return res.data.data.result;
  } else {
    const res = await axios.get(
      `/dochpp?startYear=${dayjs(new Date()).format("YYYY")}&endYear=${dayjs(
        new Date()
      ).format("YYYY")}`
    );

    return res.data.data.result;
  }
}

type QueryFnType = typeof getDocDetails;

type UseDocDetailsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useDocDetails({ params }: any) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["docDetails", params],
    queryFn: () => getDocDetails({ params }),
  });
}
