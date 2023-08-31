import { useQuery } from "@tanstack/react-query";
import { axios } from "lib/axios";
import { ExtractFnReturnType, QueryConfig } from "lib/react-query";
import { ProgramProps } from "../types";

export type GetProgramsResponse = {
  programs: ProgramProps[];
};

const data = {
  program: [
    {
      id: 1,
      name: "Program Tahfizh",
      category: "Tahfiz",

      description:
        "STahfizh, yaitu membimbing santri dalam menghafal Al-Quran dengan mengedepankan kualitas bacaan serta pemahaman dan pengamalan terhadap ayat-ayat yang mereka hafal.",
    },
    {
      id: 2,
      category: "Umum",

      name: "Program Tadris",
      description: "Tadris, yaitu mempelajari materi-materi umum.",
    },
    {
      id: 3,
      category: "Umum",

      name: "Program Tafqih",
      description:
        "Tafqih, yaitu mengajarkan kepada santri berbagai macam kitab-kitab dari ulama ahlussunnah wal jama'ah, berupa kitab kuning.",
    },
    {
      id: 4,
      category: "Umum",

      name: "Program Tansyith",
      description:
        "Tansyith, yaitu memberdayakan santri dengan berbagai peran di pondok dan masyarakat untuk meningkatkan kemampuan dan tanggung jawab mereka sebagai seorang Muslim yang merupakan bagian dari masyarakat. Pemberdayaan santri melalui khidmat mereka dengan pondok, dengan guru, dengan masyarakat, serta dengan orang tua. Pemberdayaan dijalankan melalui Organisasi Santri Darul Inqilabi (OSDI) dan Gerakan Santri Berdaya (Garda).",
    },
    {
      id: 5,
      category: "Umum",

      name: "Program Ta'dib",
      description:
        "Ta'dib, yaitu program yang fokus dalam pembentukan adab santri, bertujuan melahirkan santri yang berakhlaqul karimah sesuai tuntunan syari'at",
    },
  ],
};

export async function getPrograms() {
  const res = await axios.get("/program");

  // return data;
  return res.data;
}

type QueryFnType = typeof getPrograms;

type UseProgramsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export function usePrograms({ config }: UseProgramsOptions = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ["programs"],
    queryFn: () => getPrograms(),
  });
}
