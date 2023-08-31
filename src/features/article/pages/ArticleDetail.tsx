import { Button, Tabs } from "@mantine/core";
import {
  IconEye,
  IconHeart,
  IconMenu2,
  IconStar,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ArticleDetail: React.FC = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState<Date | null>(null);

  function toggle() {
    setActive(!active);
  }

  return (
    <main className="mt-16 max-w-8xl  mx-auto px-5 sm:px-7 lg:px-11">
      <section className="pt-8 max-w-3xl mx-auto grid grid-cols-2 gap-x-10">
        <img
          className="shadow"
          src="https://cdn.gramedia.com/uploads/items/Home_Sweet_Loan_cov.jpg"
          alt=""
        />
        <div>
          <div className="text-black text-[32px] font-bold">
            Just You and Me
          </div>
          <div className="grid grid-cols-2 gap-y-4 mt-4">
            <div className="text-black text-sm font-bold border-b pb-2">
              Status
            </div>
            <div className="text-black text-sm font-normal border-b pb-2">
              Selesai
            </div>
            <div className="text-black text-sm font-bold border-b pb-2">
              Tingkatan
            </div>
            <div className="text-black text-sm font-normal border-b pb-2">
              SD
            </div>
            <div className="text-black text-sm font-bold border-b pb-2">
              Ditulis Oleh
            </div>
            <div className="text-black text-sm font-normal border-b pb-2">
              Didiyyahhh
            </div>
            <div className="text-black text-sm font-bold border-b pb-2">
              Diterbitkan
            </div>
            <div className="text-black text-sm font-normal border-b pb-2">
              Kamis, 08 Agustus 2023
            </div>
          </div>
          <div className="flex  items-center pt-5  ">
            <div className="flex gap-x-2 items-center text-[12px] font-normal pr-5 border-r">
              <IconEye className="w-[20px]" /> 1m
            </div>
            <div className="flex gap-x-2 items-center text-[12px] font-normal px-5">
              <IconStar className="w-[20px]" /> 4,8
            </div>
            <div className="flex gap-x-2 items-center text-[12px] font-normal pl-5 border-l">
              <IconMenu2 className="w-[20px]" />
              35
            </div>
          </div>
          <Link to={"/articleread"}>
            <Button className="bg-sky-900 hover:bg-sky-800 mt-5" radius="md">
              Baca Sekarang!
            </Button>
          </Link>

          <br />
          <Button
            className="bg-sky-900 hover:bg-sky-800 mt-5"
            type="submit"
            radius="md"
          >
            Beli Semua Bab 350 <img src="/transaction/coin.png" alt="" />
          </Button>
        </div>
      </section>
      <section className="max-w-5xl mx-auto mt-10 border px-10 pt-4 pb-10 mb-16">
        <Tabs defaultValue="gallery" color="dark">
          <Tabs.List className="space-x-10">
            <Tabs.Tab value="gallery">Deskripsi</Tabs.Tab>
            <Tabs.Tab value="messages">Bab(35)</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            <div className="my-10 text-justify text-black text-sm font-normal">
              Keyra kabur dari rumah karena perselisihan dengan ayahnya. Dia
              kemudian menumpang di tempat kontrakan sahabatnya, Yanti.
              <br />
              <br />
              Masalah muncul ketika Yanti yang harus membayar utang ayahnya
              kemudian dikejar-kejar debt collector. Keyra ikut imbasnya, dan
              karena itu jugalah dia kemudian bertemu Ferdyan yang salah sangka
              dan mengira Keyra adalah penari
              <br />
              striptease yang dipesan oleh teman-temannya untuk merayakan
              bachelor party salah seorang sahabatnya.
              <br />
              <br />
              <br />
              kover by Sukutangan
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="messages" pt="xs">
            Messages tab content
          </Tabs.Panel>
        </Tabs>
      </section>
    </main>
  );
};

export default ArticleDetail;
