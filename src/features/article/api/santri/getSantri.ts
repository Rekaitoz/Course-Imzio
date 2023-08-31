import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { SantriProps } from "../../types";

export type GetSantrisResponse = {
  santris: SantriProps[];
};

const data = {
  santri: [
    {
      id: 1,
      noInduk: "416314124",
      name: "Ayub",
      createdAt: "19 November 2023",
      birth: "Banjarmasin / 19 November 2023",
      gender: "laki-laki",
      orderBirth: "1 dari 3 saudara",
      waliName: "Bayu",
    },
    {
      id: 2,
      noInduk: "416314124",
      name: "Ayub",
      createdAt: "19 November 2023",
      birth: "Banjarmasin / 19 November 2023",
      gender: "laki-laki",
      orderBirth: "1 dari 3 saudara",
      waliName: "Bayu",
    },
    {
      id: 3,
      noInduk: "416314124",
      name: "Ayub",
      createdAt: "19 November 2023",
      birth: "Banjarmasin / 19 November 2023",
      gender: "laki-laki",
      orderBirth: "1 dari 3 saudara",
      waliName: "Bayu",
    },
    {
      id: 4,
      noInduk: "416314124",
      name: "Ayub",
      createdAt: "19 November 2023",
      birth: "Banjarmasin / 19 November 2023",
      gender: "laki-laki",
      orderBirth: "1 dari 3 saudara",
      waliName: "Bayu",
    },
    {
      id: 5,
      noInduk: "416314124",
      name: "Ayub",
      createdAt: "19 November 2023",
      birth: "Banjarmasin / 19 November 2023",
      gender: "laki-laki",
      orderBirth: "1 dari 3 saudara",
      waliName: "Bayu",
    },
    {
      id: 6,
      noInduk: "416314124",
      name: "Ayub",
      createdAt: "19 November 2023",
      birth: "Banjarmasin / 19 November 2023",
      gender: "laki-laki",
      orderBirth: "1 dari 3 saudara",
      waliName: "Bayu",
    },
  ],
};

export async function getSantris() {
  const res = await axios.get("/santri");
  // console.log(res);
  // console.log(res.data);

  // return data;
  return res.data;
}

type QueryFnType = typeof getSantris;

type UseSantrisOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useSantris({ config }: UseSantrisOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["santris"],
    queryFn: () => getSantris(),
  });
}
