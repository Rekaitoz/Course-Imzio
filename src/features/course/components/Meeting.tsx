import { Button, TextInput } from "@mantine/core";
import {
  IconArrowBackUp,
  IconArrowUp,
  IconDiscountCheckFilled,
  IconFlag,
  IconSend,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";

const Meeting: React.FC = () => {
  return (
    <main className="mb-10 relative">
      <div className="leading-none border-b-[3px] border-b-sky-900 pb-1 px-1 w-fit">
        <span className="text-black text-opacity-60 text-[32px] font-bold">
          Diskusi :
        </span>
        <span className="text-black text-[32px] font-bold">
          {" "}
          Silakan Ajukan Pertanyaan
        </span>
      </div>
      <div className="mt-8">
        <div className="flex gap-x-3">
          <img src="/course/avatar.png" alt="" className="h-fit" />
          <div className="space-y-1">
            <div className="text-black text-lg font-bold leading-tight flex items-center gap-x-1">
              Admin Course <IconDiscountCheckFilled className="text-cyan-600" />
            </div>
            <div className=" text-black text-2xl font-semibold leading-tight">
              [KELAS OFFLINE COURSE PERTEMUAN #1]
            </div>
            <div className="flex gap-x-4">
              <div className="text-black text-opacity-50 text-xs font-medium leading-tight flex items-center hover:text-blue-500 hover:cursor-pointer gap-x-1">
                <IconArrowUp size={15} /> 132
              </div>
            </div>
          </div>
        </div>
        <div className=" text-black text-base font-normal leading-tight mt-5">
          Hallo semua peserta courses👋
          <br />
          Semoga kalian selalu dalam keadaan sehat yaa
          <br />
          <br />
          Kami ingin menyampaikan informasi bahwa akan dilaksanakannya Offline
          Class. Yuk ikuti serta ramaikan latihannya yang akan dilaksanakan
          pada:
          <br />
          <br />
          Hari, Tanggal 🗓 : Kamis , 25 Mei 2023 <br />
          Pukul ⏰ : 21.00-22.00 wita
          <br />
          Tempat📍: Tarkiza PAZ Banua, Jl.sosial media No 12, Karang Anyar,
          Banjarbaru
          <br />
          Dresscode 🥋: Bebas Pantas
          <br />
          Barang yang dibawa: Laptop, Chargerr, Kartu Peserta Course
          <img
            className="w-[511px] h-[281px] mx-auto  py-5 object-cover"
            src="https://s3-alpha-sig.figma.com/img/8877/e27e/122ff4a46370c92aecd6658f169760e7?Expires=1694390400&Signature=qmWLb-AeISIKVw2P5JWcQFmyZ0HBVVvPgSE7t5ZjiTfXSpApAdLJp3jRVrub2~yn4gVbExw3OLUcM3EPAo~jX4Texgi--1q3Le98NT31Jidc73kop6pQq4ZBlE7PE0lccSMDjIGyQWNdw4c4cVDGAyF~a2L7WB7Z~lsFLsk476U4r5P~YO44xcp147LDkFfHKbeuSDOPYsGU4wxTVdOszOQZDUyPvhN~zR~hZtAq44RQY8sOLaho6AgeCCEKKHylIqxF6sADRcVKG9qkHpO6ImaboUQW7GEqlf5km-fA5~f4tbeaFSvKYjag0C2qY8iqNUEOakHwocvza4glwow9NA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          Bagi teman-teman yang tidak memiliki kesibukan diharapkan bisa
          berhadir yaa
          <br />
          Kami tunggu kedatangan kalian semua🙌
        </div>
      </div>
    </main>
  );
};

export default Meeting;
