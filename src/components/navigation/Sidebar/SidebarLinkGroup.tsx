import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconChevronRight, IconCopy } from "@tabler/icons-react";
import { TablerIconsProps } from "@tabler/icons-react";
import styles from "./Sidebar.module.css";
import { Progress, UnstyledButton } from "@mantine/core";

type LinkProps = {
  href: string;
  title: string;
  progress: number;
  type: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

type Props = {
  title: string;
  href: string;
  routes?: {
    title: string;
    href: string;
    icon: React.FC<any>;
    type?: string;
    progress?: number;
  }[];
  icon: React.FC<any>;
};

const SidebarList: React.FC<LinkProps> = ({
  href,
  title,
  icon,
  progress,
  type,
}) => {
  const location = useLocation();
  const active = href == location.pathname ? true : false;
  const Icon = icon;
  return (
    <li className="last:mb-1 ">
      <Link
        to={href}
        className={`flex hover:text-gray-700 w-full font-semibold text-sm px-4 py-2.5 rounded mb-0.5 last:mb-0 hover:bg-gray-50 hover:bg-opacity-80 transition duration-150 truncate ${
          active ? "bg-blue-200 hover:bg-blue-200" : ""
        }`}
      >
        <div className="w-5 h-5 shrink-0 leading-none flex items-center justify-center border border-black  rounded-full mt-0.5">
          <Icon className="w-5 h-5 shrink-0 leading-none p-0.5 text-black text-opacity-75" />
        </div>
        <div className="ml-3">
          <span className=" lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 whitespace-normal">
            {title}
          </span>
          {type != "Pertemuan" ? (
            type != "Diskusi" ? (
              <div className="pt-1 grid grid-cols-7 gap-x-2">
                <Progress
                  value={progress}
                  className="col-span-4 mt-1 bg-[#BBE1FA]"
                  color="blue"
                />
                <div className="text-black text-xs font-normal col-span-2">
                  {progress}% Complete
                </div>
              </div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </Link>
    </li>
  );
};

export const SidebarLinkGroup = ({ title, icon, routes }: any) => {
  const location = useLocation();

  const active = () => {
    let cond = false;
    routes?.map((item: any) =>
      item.href == location.pathname ? (cond = true) : ""
    );
    return cond;
  };

  const [collapsed, setCollapsed] = useState(active());

  const accordion = useRef<HTMLUListElement>(null);

  function toggle() {
    const element = accordion.current!;
    // const isExpanded = document
    //   .querySelector("body")
    //   ?.classList.contains("sidebar-expanded");

    if (collapsed) {
      element.style.maxHeight = "0";
      setCollapsed(!collapsed);
      console.log("test1");

      // if (isExpanded) {
      //   element.style.maxHeight = "0";
      //   setCollapsed(!collapsed);
      // } else {
      //   document.querySelector("body")!.classList.add("sidebar-expanded");
      // }
    } else {
      console.log("test2");

      element.style.maxHeight = `${element?.scrollHeight}px`;
      document.querySelector("body")!.classList.add("sidebar-expanded");
      setCollapsed(!collapsed);
    }
  }

  return (
    <li className="relative list-none  space-y-0">
      <UnstyledButton
        onClick={toggle}
        className={`${styles["sidebar-link"]} ${
          active()
            ? styles["sidebar-link-active"]
            : collapsed
            ? styles["sidebar-link-collapsed"]
            : ""
        } w-full justify-between `}
      >
        <div className="flex items-center">
          <span className="lg:sidebar-expanded:opacity-100 2xl:opacity-100 transition duration-200 ">
            {title}
          </span>
        </div>
        <div className="flex shrink-0 ml-2">
          <IconChevronRight
            className={`w-3 h-3 duration-300 shrink-0 ml-1 transition ${
              collapsed && "rotate-90"
            }`}
          />
        </div>
      </UnstyledButton>
      <ul
        ref={accordion}
        className="overflow-hidden   list-none pl-0  transition-all ease-in-out duration-300 h-0 2xl:h-full sidebar-expanded:!h-full max-h-0 mb-0"
      >
        {routes?.map((item: any) => (
          <SidebarList {...item} />
        ))}
      </ul>
    </li>
  );
};
