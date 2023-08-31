import { Accordion, UnstyledButton } from "@mantine/core";
import {
  IconBook,
  IconFileReport,
  IconFlag,
  IconHome,
  IconMenu2,
  IconPlayerPlay,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";
import { IconMessage } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import { Sidebar } from "components/navigation";

import { useState } from "react";
import { Chat, Quiz, TextBook, Video, Meeting } from "../components";
import { useParams } from "react-router-dom";

const navigationNew = [
  {
    routes: [
      {
        title: "Lesson #1",
        href: "group",
        routes: [
          {
            type: "Bacaan",
            title: "Textbook 1 - Lorem Ipsum",
            href: "/course/textbook",
            progress: 20,
            icon: IconBook,
          },
          {
            type: "Video",
            title: "Learning 1 - Lorem Ipsum",
            href: "/course/video",
            progress: 50,
            icon: IconPlayerPlay,
          },
          {
            type: "Video",
            title: "Learning 2 - Lorem Ipsum",
            href: "/course/video",
            progress: 100,
            icon: IconPlayerPlay,
          },
          {
            type: "Video",
            title: "Learning 3 - Lorem Ipsum",
            href: "/course/video",
            progress: 20,
            icon: IconPlayerPlay,
          },
          {
            type: "Quiz",
            title: "Practice 1 - Lorem Ipsum",
            href: "/course/quiz",
            progress: 0,
            icon: IconPlayerPlay,
          },
          {
            type: "Pertemuan",
            title: "Kelas Offline - Lorem Ipsum",
            href: "/course/meeting",
            progress: 0,
            icon: IconHome,
          },
          {
            type: "Diskusi",
            title: "Silakan Ajukan Pertanyaan",
            href: "/course/chat",
            progress: 0,
            icon: IconMessage,
          },
        ],
      },
      {
        title: "Lesson #2",
        href: "group",
        routes: [
          {
            type: "Bacaan",
            title: "Textbook 1 - Lorem Ipsum",
            href: "",
            progress: 20,
            icon: IconBook,
          },
        ],
      },
      {
        title: "Lesson #3",
        href: "group",
        routes: [
          {
            type: "Bacaan",
            title: "Textbook 1 - Lorem Ipsum",
            href: "",
            progress: 20,
            icon: IconBook,
          },
        ],
      },
    ],
  },
];

const path = {
  textbook: TextBook,
  video: Video,
  quiz: Quiz,
  meeting: Meeting,
  chat: Chat,
};

const Course: React.FC = () => {
  const { study } = useParams();
  const Current = path[study as keyof typeof path];

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
    <main className="mt-16 max-w-8xl  mx-auto px-5 sm:px-7 lg:px-11 flex ">
      <section className="pt-2 w-full">
        <div className="text-black text-opacity-60 text-sm font-semibold flex items-center gap-x-1">
          <div className="hidden items-center lg:flex">
            Backend Master Class [Golang + Postgres + Kubernetes + gRPC]
            <IconChevronRight className="text-cyan-600" /> Lesson #1{" "}
          </div>
          <UnstyledButton
            id="header"
            className="text-gray-800 hover:text-gray-700 transition-colors lg:hidden "
            aria-controls="sidebar"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <IconMenu2 className="w-8 h-8 fill-current" />
          </UnstyledButton>
          <IconChevronRight className="text-cyan-600" />

          <span className="font-bold text-black">
            Bacaan: TextBook 1 - Lorem Ipsum
          </span>
        </div>
        <div className="mt-2 flex h-[calc(100vh-104px)] ">
          <Sidebar navigations={navigationNew} />
          <div className="pl-5 mt-4 relative overflow-y-auto pr-5 pb-20 w-full ">
            {/* <TextBook /> */}
            <Current />
            <div className="py-2 space-y-2 md:flex mt-2 gap-x-3 border-t-2 border-sky-900 border-opacity-40 ">
              <div className="text-cyan-700  font-semibold flex gap-x-1 items-center hover:underline hover:cursor-pointer">
                <IconThumbUp /> Suka
              </div>
              <div className="text-cyan-700  font-semibold flex gap-x-1 items-center hover:underline hover:cursor-pointer">
                <IconThumbDown /> Tidak Suka
              </div>
              <div className="text-cyan-700  font-semibold flex gap-x-1 items-center hover:underline hover:cursor-pointer">
                <IconFlag /> Laporkan Masalah
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Course;
