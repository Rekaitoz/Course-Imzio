import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UnstyledButton } from "@mantine/core";
import { SidebarNavigation } from "types/navigation";
import { SidebarLink } from "./SidebarLink";
import { SidebarLinkGroup } from "./SidebarLinkGroup";

interface Props {
  navigations: SidebarNavigation;
}

const Sidebar: React.FC<Props> = ({ navigations }) => {
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      const isExpanded = document
        .querySelector("body")
        ?.classList.contains("sidebar-expanded");
      if (!isExpanded || keyCode !== 27) return;
      toggleSidebar();
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  function toggleSidebar() {
    const isExpanded = document
      .querySelector("body")
      ?.classList.contains("sidebar-expanded");
    if (isExpanded) {
      return document
        .querySelector("body")!
        .classList.remove("sidebar-expanded");
    }

    document.querySelector("body")!.classList.add("sidebar-expanded");
  }

  return (
    <div className="">
      <div
        className="fixed inset-0 bg-gray-900 lg:bg-opacity-0 bg-opacity-40 z-40 lg:z-auto transition-opacity duration-200 hidden sidebar-expanded:block !lg:hidden"
        aria-hidden="true"
        ref={overlay}
        onClick={toggleSidebar}
      ></div>
      <div
        id="sidebar"
        ref={sidebar}
        className="flex flex-col px-4 bg-white no-scrollbar absolute shadow-sm z-50 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-full overflow-y-scroll lg:overflow-y-auto w-64  lg:sidebar-expanded:!w-64 2xl:w-[4.9rem] 2xl:sidebar-expanded:!w-64 shrink-0   transition-all duration-200 ease-in-out -translate-x-64 sidebar-expanded:translate-x-0"
      >
        <div className="flex justify-between pr-3 sm:px-2 mt-5 lg:mt-0">
          <UnstyledButton
            ref={trigger}
            onClick={toggleSidebar}
            className="lg:hidden text-gray-600 hover:text-gray-700 transition-colors"
            aria-controls="sidebar"
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </UnstyledButton>
        </div>

        <div className="space-y-8">
          {navigations.map(({ title, routes }, i) => (
            <div key={`section_${i}`}>
              {title && (
                <h3 className="text-xs uppercase text-gray-700 flex items-center leading-none mb-6">
                  <span
                    className="static sidebar-expanded:absolute 2xl:absolute left-0 text-center mx-auto w-4 h-px bg-gray-700"
                    aria-hidden="true"
                  ></span>
                  <span className="lg:hidden lg:sidebar-expanded:block 2xl:block pl-3 font-bold h-0 -mt-2.5 whitespace-nowrap">
                    {title}
                  </span>
                </h3>
              )}

              <div className="mt-3 space-y-1">
                {routes.map((route) =>
                  route.href == "group" ? (
                    <SidebarLinkGroup key={route.title} {...route} />
                  ) : (
                    <SidebarLink key={route.title} {...route} />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
