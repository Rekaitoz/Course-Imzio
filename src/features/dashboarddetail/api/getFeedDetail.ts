import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { dayjs } from "lib/dayjs";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
// import { FeedmillDetailProps } from "../../types";

export type GetFeedmillDetailsResponse = {
  [key: number]: number;
  tahun: string;
};

export async function getFeedmillDetails({ params }: any) {
  const startYear = dayjs(params?.checkYear?.startDate).format("YYYY");
  const endYear = dayjs(params?.checkYear?.endDate).format("YYYY");

  if (params.checkYear.startDate && params.checkYear.startDate) {
    const res = await axios.get(
      `/feedhpp?startYear=${startYear}&endYear=${endYear}`
    );
    return res.data.data.result;
  } else {
    const res = await axios.get(
      `/feedhpp?startYear=${dayjs(new Date()).format("YYYY")}&endYear=${dayjs(
        new Date()
      ).format("YYYY")}`
    );

    return res.data.data.result;
  }
}

type QueryFnType = typeof getFeedmillDetails;

type UseFeedmillDetailsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useFeedmillDetails({ params }: any) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["feedmillDetails", params],
    queryFn: () => getFeedmillDetails({ params }),
  });
}
