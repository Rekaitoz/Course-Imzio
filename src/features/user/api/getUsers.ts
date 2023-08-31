import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { UserProps } from "../types";

export type GetUsersResponse = {
  users: UserProps[];
};

const data = {
  user: [
    {
      id: 1,
      username: "Rekaito",
      level: "SuperAdmin",
    },
    {
      id: 2,
      username: "Rekaitofaw",
      level: "Admin",
    },
    {
      id: 3,
      username: "Lismiah",
      level: "Admin",
    },
    {
      id: 4,
      username: "Darkney",
      level: "Kasir",
    },
    {
      id: 5,
      username: "Dana",
      level: "Kasir",
    },
    {
      id: 6,
      username: "Ayee",
      level: "Kasir",
    },
    {
      id: 7,
      username: "Worhey",
      level: "Kasir",
    },
    {
      id: 8,
      username: "Bluebeh",
      level: "Kasir",
    },
  ],
};

export async function getUsers() {
  // const res = await axios.get("/user");

  return data;
  // return res.data;
}

type QueryFnType = typeof getUsers;

type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function useUsers({ config }: UseUsersOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
}
