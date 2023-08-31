import {
  Button,
  Checkbox,
  Progress,
  Rating,
  Switch,
  TextInput,
  Tabs,
  Select,
  FileInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import {
  IconBook,
  IconCalendar,
  IconChevronRight,
  IconDotsVertical,
  IconEye,
  IconHeart,
  IconMenu2,
  IconPointFilled,
  IconSchool,
  IconSearch,
  IconShoppingCart,
  IconStar,
  IconTrash,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Article: React.FC = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState<Date | null>(null);

  function toggle() {
    setActive(!active);
  }

  return (
    <main className="mt-16 max-w-8xl  mx-auto px-5 sm:px-7 lg:px-11">
      <section className="pt-8 ">
        <div className="pb-7 px-4 text-black text-5xl font-bold border-b border-black w-fit mx-auto">
          Artikel
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 mt-10 mb-20">
          {new Array(20).fill(0).map((item) => (
            <div
              onClick={toggle}
              className="rounded-[10px]  overflow-hidden shadow-2xl hover:cursor-pointer hover:brightness-110 transition-all duration-200"
            >
              <img
                className="w-full h-[322px] "
                src="https://cdn.gramedia.com/uploads/items/Home_Sweet_Loan_cov.jpg"
              />
              <div className="pt-3 pb-5 px-5 space-y-1">
                <div className="text-sky-900 text-base font-bold">
                  Just You and Me
                </div>
                <div className="text-black text-xs font-light">
                  Titi Senaria
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div className="flex gap-x-2 items-center text-[12px] font-normal">
                    <IconEye className="w-[20px]" /> 1m
                  </div>
                  <div className="flex gap-x-2 items-center text-[12px] font-normal">
                    <IconStar className="w-[20px]" /> 4,8
                  </div>
                  <div className="flex gap-x-2 items-center text-[12px] font-normal">
                    <IconMenu2 className="w-[20px]" />
                    35
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div
        className={`
         top-0 left-0 z-50 transition-all overflow-hidden pl-3 w-full h-screen ${
           active ? "fixed" : "hidden"
         } 
        `}
      >
        <div className="flex h-full items-center justify-center">
          <div
            className={`fixed h-screen w-screen inset-0 bg-gray-900 bg-opacity-70 z-40 transition-opacity duration-200 backdrop-blur-[10px] ${
              active ? "block" : "hidden"
            }
        `}
            aria-hidden="true"
            onClick={toggle}
          ></div>

          <nav className="pl-3 pr-5 py-3 flex gap-x-6 bg-white  max-w-xl h-fit z-50">
            <img
              className="w-[40%] "
              src="https://cdn.gramedia.com/uploads/items/Home_Sweet_Loan_cov.jpg"
              alt=""
            />
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center ">
                <div className="text-black  text-2xl font-bold">
                  Just You and Me
                </div>
                <div onClick={toggle}>
                  <IconX className="hover:cursor-pointer text-black" />
                </div>
              </div>
              <div className="text-black  text-xs font-light flex items-center gap-x-2">
                <IconMenu2 className="w-[17px] opacity-70" /> 35 Parts
              </div>
              <div className="bg-black flex items-center  rounded-[25px] overflow-hidden">
                <div className="text-white w-full bg-black text-xs font-normal flex items-center gap-x-2 py-3 pl-8 pr-5 hover:bg-slate-800">
                  <IconBook stroke={1} /> Start Reading
                </div>
                <div className="bg-black py-3 flex pl-4 pr-5 rounded-r-full border-l border-l-white ">
                  <IconHeart
                    stroke={1}
                    className="text-white rounded-md hover:bg-red-600"
                  />
                </div>
              </div>
              <div className=" text-justify text-black text-opacity-60 text-xs font-normal pr-2">
                Cover by Pinterest Squel My Indigo Girl Masa putih abu-abu telah
                usai. Tiba saat dimana mereka akan memasuki dunia perkuliahan
                Dengan Anta yang masih berjuang mendapatkan Kejora, Sadewa yang
                juga masih berusaha agar dirinya dinotice oleh Kejora. Cerita
                ini minim konflik ya Happy Reading^^
              </div>
              <Link
                to={"/articledetail"}
                className="text-black  text-xs font-bold flex items-center float-right"
              >
                More details <IconChevronRight />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Article;
