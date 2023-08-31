import { Button, Tabs } from "@mantine/core";
import {
  IconChevronLeft,
  IconChevronRight,
  IconClockHour12,
  IconEye,
  IconHeart,
  IconMenu2,
  IconPencil,
  IconShare,
  IconStar,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ArticleRead: React.FC = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState<Date | null>(null);

  function toggle() {
    setActive(!active);
  }

  return (
    <main className="mt-10 max-w-8xl  mx-auto px-5 sm:px-7 lg:px-11 ">
      <section className=" max-w-3xl mx-auto ">
        <nav className="fixed z-10 top-0 left-0 items-center w-full  justify-between text-gray-500 text-xs font-bold bg-white border border-black border-opacity-20">
          <div className="max-w-8xl h-16 mx-auto flex flex-row items-center justify-between px-5 sm:px-7 lg:px-11">
            <Link
              to={"/articledetail"}
              className="text-black text-sm font-normal flex items-center gap-x-1"
            >
              <IconChevronLeft stroke={1} />
              <span className="pb-0.5"> Kembali</span>
            </Link>
            <div className="space-y-1 ">
              <div className="text-sky-900 text-[28px] font-bold">IMZIO</div>
              <div className="text-black text-opacity-80 text-xs font-semibold tracking-[2.74px]">
                Education
              </div>
            </div>
            <div className="text-black text-opacity-60 text-sm font-normal flex items-center gap-x-2">
              <IconClockHour12 stroke={1} /> 8 Menit
            </div>
          </div>
        </nav>
        <div className="bg-white w-full px-28 pt-5 pb-10 mb-10">
          <div className=" text-black text-4xl font-semibold text-center mb-3">
            Satu
          </div>
          <div className="text-center">
            <span className="text-black text-sm font-normal">
              Ditulis oleh{" "}
            </span>
            <span className="text-sky-600 text-sm font-normal">
              Titi Sanaria
            </span>
          </div>
          <div className="text-black text-sm font-normal flex items-center justify-center gap-x-1">
            <IconPencil stroke={1} />
            Minggu, 08 Agustus 2023
          </div>
          <div className="text-justify pt-6">
            <span className="text-black text-sm font-normal">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              <br />
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
            </span>
            <span className="text-black text-sm font-normal underline">
              controversy
            </span>
            <span className="text-black text-sm font-normal">
              , laying out pages with meaningless filler text can be very useful
              when the focus is meant to be on design, not content.
              <br />
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software. Today it's seen all around the web; on templates,
              websites, and stock designs. Use our{" "}
            </span>
            <span className="text-black text-sm font-normal underline">
              generator
            </span>
            <span className="text-black text-sm font-normal">
              {" "}
              to get your own, or read on for the authoritative history of lorem
              ipsum.
              <br />
              <br />
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              <br />
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
            </span>
            <span className="text-black text-sm font-normal underline">
              controversy
            </span>
            <span className="text-black text-sm font-normal">
              , laying out pages with meaningless filler text can be very useful
              when the focus is meant to be on design, not content.
              <br />
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software. Today it's seen all around the web; on templates,
              websites, and stock designs. Use our{" "}
            </span>
            <span className="text-black text-sm font-normal underline">
              generator
            </span>
            <span className="text-black text-sm font-normal">
              {" "}
              to get your own, or read on for the authoritative history of lorem
              ipsum.
              <br />
              <br />
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              <br />
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
            </span>
            <span className="text-black text-sm font-normal underline">
              controversy
            </span>
            <span className="text-black text-sm font-normal">
              , laying out pages with meaningless filler text can be very useful
              when the focus is meant to be on design, not content.
              <br />
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software. Today it's seen all around the web; on templates,
              websites, and stock designs. Use our{" "}
            </span>
            <span className="text-black text-sm font-normal underline">
              generator
            </span>
            <span className="text-black text-sm font-normal">
              {" "}
              to get your own, or read on for the authoritative history of lorem
              ipsum.
              <br />
              <br />
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              <br />
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
            </span>
            <span className="text-black text-sm font-normal underline">
              controversy
            </span>
            <span className="text-black text-sm font-normal">
              , laying out pages with meaningless filler text can be very useful
              when the focus is meant to be on design, not content.
              <br />
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software. Today it's seen all around the web; on templates,
              websites, and stock designs. Use our{" "}
            </span>
            <span className="text-black text-sm font-normal underline">
              generator
            </span>
            <span className="text-black text-sm font-normal">
              {" "}
              to get your own, or read on for the authoritative history of lorem
              ipsum.
              <br />
              <br />
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              <br />
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout. A practice not without{" "}
            </span>
            <span className="text-black text-sm font-normal underline">
              controversy
            </span>
            <span className="text-black text-sm font-normal">
              , laying out pages with meaningless filler text can be very useful
              when the focus is meant to be on design, not content.
              <br />
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software. Today it's seen all around the web; on templates,
              websites, and stock designs. Use our{" "}
            </span>
            <span className="text-black text-sm font-normal underline">
              generator
            </span>
            <span className="text-black text-sm font-normal">
              {" "}
              to get your own, or read on for the authoritative history of lorem
              ipsum.
            </span>
          </div>
        </div>
        <nav className="fixed z-10 bottom-0 left-0 items-center w-full  justify-between text-gray-500 text-xs font-bold bg-white border border-black border-opacity-20">
          <div className="max-w-6xl h-16 mx-auto flex flex-row items-center justify-between px-5 sm:px-7 lg:px-11 ">
            <IconMenu2 className="text-black" />
            <div className="border border-gray-500 h-6"></div>
            <IconHeart className="text-black" />
            <div className="border border-gray-500 h-6"></div>
            <IconShare className="text-black" />
            <div className="border border-gray-500 h-6"></div>
            <IconChevronRight className="text-black" />
          </div>
        </nav>
      </section>
    </main>
  );
};

export default ArticleRead;
