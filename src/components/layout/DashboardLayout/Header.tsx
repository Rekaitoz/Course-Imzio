import {
  IconArrowLeft,
  IconBell,
  IconChevronRight,
  IconHeart,
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconUserCircle,
  IconX,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "./UserMenu";
import { TextInput, UnstyledButton } from "@mantine/core";

interface NavigationProps {
  title: string;
  href?: string;
  routes?: NavigationProps[];
  group?: string[];
  link?: string;
}
[];

const navigation: NavigationProps[] = [
  {
    title: "Data Master",
    routes: [
      {
        title: "Pengguna",
        routes: [
          {
            title: "Santri & Wali Santri",
            href: "/santri",
            group: ["/santri", "/wali"],
          },
          { title: "Guru", href: "/guru" },
        ],
      },
      {
        title: "Pengaturan",
        routes: [
          { title: "Program", href: "/program" },
          { title: "Jam Pelajaran", href: "/jam-pelajaran" },
          // { title: "Mushaf", href: "/mushaf" },
          // { title: "Semester", href: "/semester" },
        ],
      },
      {
        title: "Kurikulum Umum",
        routes: [
          { title: "Kelas", href: "/kelas-umum" },
          { title: "Mata Pelajaran", href: "/mata-pelajaran" },
          {
            title: "Jadwal Mata Pelajaran",
            href: "/semester-umum",
          },
        ],
      },
      {
        title: "Kurikulum Tahfiz",
        routes: [
          { title: "Kelas", href: "/kelas-tahfiz" },
          {
            title: "Mushaf",
            href: "/mushaf",
          },
          {
            title: "Set Predikat",
            href: "/predicate",
          },
          {
            title: "Jadwal Mata Pelajaran",
            href: "/semester-tahfiz",
          },
        ],
      },
    ],
  },
  // {
  //   title: "Manajemen",
  //   routes: [
  //     {
  //       title: "Transaksi",
  //       href: "/",
  //     },
  //     {
  //       title: "SPP",
  //       routes: [
  //         { title: "Program", href: "/" },
  //         { title: "Kelas", href: "/" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Info Voucher",
  //   href: "/voucher",
  // },
  {
    title: "Absensi",
    href: "/attendance",
  },
  {
    title: "Manajemen",
    href: "/tonewpath",
    link: "https://manajemen.darulinqilabi.id/data_master/user",
  },
];

type NavLinkProps = {
  title: string;
  href: string;
};

const NavLink: React.FC<NavLinkProps> = ({ title, href }) => {
  const active =
    href == "/"
      ? window.location.pathname == href
      : new RegExp(`${href}/*`, "gi").test(window.location.pathname);

  return (
    <li
      className={`
        text-primary-4 uppercase ${
          active ? "underline font-semibold" : "hover:underline"
        }
      `}
    >
      <Link to={href}>{title}</Link>
    </li>
  );
};

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive(false);
  }, [location.pathname]);

  function toggle() {
    setActive(!active);
  }

  return (
    <div className="fixed z-10 top-0 items-center w-full  justify-between text-gray-500 text-xs font-bold bg-white border border-black border-opacity-20">
      <div className="max-w-8xl h-16 mx-auto flex flex-row items-center justify-between px-5 sm:px-7 lg:px-11">
        <div className="space-y-1 ">
          <div className="text-sky-900 text-[28px] font-bold">IMZIO</div>
          <div className="text-black text-opacity-80 text-xs font-semibold tracking-[2.74px]">
            Education
          </div>
        </div>

        <div className="flex items-center gap-x-5 md:gap-x-14">
          <div className=" gap-x-8 hidden  md:flex">
            <a
              href="/dashboard"
              className={`text-black text-sm  ${
                window.location.pathname == "/dashboard"
                  ? "font-bold"
                  : "font-medium"
              }`}
            >
              Beranda
            </a>
            <a
              href="/subscribe"
              className={`text-black text-sm  ${
                window.location.pathname == "/subscribe"
                  ? "font-bold"
                  : "font-medium"
              }`}
            >
              Langganan
            </a>
            <a
              href="/article"
              className={`text-black text-sm  ${
                window.location.pathname == "/article"
                  ? "font-bold"
                  : "font-medium"
              }`}
            >
              Artikel
            </a>
            <a
              href="/hire"
              className={`text-black text-sm  ${
                window.location.pathname == "/hire"
                  ? "font-bold"
                  : "font-medium"
              }`}
            >
              Mengajar di Imzio
            </a>
          </div>
          <div className="flex items-center gap-x-2">
            <Link to={"/myprogram"}>
              <IconHeart
                className="text-black rounded-full  hover:text-blue-800 hover:cursor-pointer"
                stroke={1}
              />
            </Link>
            <Link to={"/programshop"}>
              <IconShoppingCart
                className="text-black hover:text-blue-800 hover:cursor-pointer"
                stroke={1}
              />
            </Link>
            <IconBell
              className="text-black hover:text-blue-800 hover:cursor-pointer"
              stroke={1}
            />
            <Link to={"/profile"}>
              <IconUserCircle
                className="text-black hover:text-blue-800 hover:cursor-pointer"
                stroke={1}
              />
            </Link>
          </div>
          <div className="items-center flex  pr-3  md:hidden">
            <button
              onClick={toggle}
              className="flex flex-col items-center justify-center  bg-transparent text-black hover:opacity-80"
            >
              <IconMenu2 size={35} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`
          fixed h-screen z-50 transition-all overflow-hidden top-0 right-0 bg-white w-64 ${
            active ? "translate-x-0" : "translate-x-64"
          } 
        `}
      >
        <nav className="px-8 py-8">
          <div className="flex justify-end">
            <button onClick={toggle} className="p-2 hover:bg-gray-200 rounded">
              <IconX size={20} />
            </button>
          </div>

          <ul className="space-y-5 mt-8">
            <NavLink title="Beranda" href="/dashboard" />
            <NavLink title="Langganan" href="/subscribe" />
            <NavLink title="Artikel" href="/article" />
            <NavLink title="Mengajar di Imzio" href="/hire" />
          </ul>
        </nav>
      </div>
      <div
        className={`fixed h-screen w-screen inset-0 bg-gray-900 bg-opacity-40 z-40 transition-opacity duration-200 ${
          active ? "block" : "hidden"
        }
        `}
        aria-hidden="true"
        onClick={toggle}
      ></div>
    </div>
  );
};

export default Header;
