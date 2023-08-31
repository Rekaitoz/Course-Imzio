import { BackgroundImage, Button, Radio, Checkbox } from "@mantine/core";
import {
  IconChevronLeft,
  IconChevronRight,
  IconClockHour12,
  IconFlag,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import CountdownTimer from "utils/countdown";

const QuizDetail: React.FC = () => {
  return (
    <main className="max-w-8xl  mx-auto px-5 sm:px-7 lg:px-11 flex ">
      <nav className="fixed z-10 top-0 left-0 items-center w-full  justify-between text-gray-500 text-xs font-bold bg-white border border-black border-opacity-20">
        <div className="max-w-8xl h-16 mx-auto flex flex-row items-center justify-between px-5 sm:px-7 lg:px-11">
          <Link
            to={"/course"}
            className="text-cyan-600 text-[20px] font-bold flex items-center gap-x-1"
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
          <CountdownTimer time={80} />
        </div>
      </nav>
      <section className="pt-2 w-full">
        <div className="text-black text-opacity-60 text-sm font-semibold flex items-center gap-x-1">
          <div className="hidden items-center lg:flex">
            Backend Master Class [Golang + Postgres + Kubernetes + gRPC]
            <IconChevronRight className="text-cyan-600" /> Lesson #1{" "}
          </div>
          <IconChevronRight className="text-cyan-600" />
          <span className="font-bold text-black">
            Bacaan: TextBook 1 - Lorem Ipsum
          </span>
        </div>
        <div className="mt-4 flex h-[calc(100vh-104px)] ">
          <div className="pl-5  relative  pr-5 pb-10 w-full max-w-4xl mx-auto ">
            <ol className="space-y-4 mb-10">
              {new Array(4).fill(0).map((item, index) => (
                <li className="text-black text-lg font-semibold tracking-tight">
                  Lorem ipsum dolor sit amet consepturer, adipiscing elit?
                  <Radio.Group
                    name={`${index}_quiz`}
                    withAsterisk
                    className="space-y-2 mt-2 "
                  >
                    <Radio
                      label="CPU"
                      value="cpu"
                      styles={{
                        radio: {
                          border: "2px solid #00000099",
                        },
                      }}
                    />
                    <Radio
                      label="Monitor"
                      value="monitor"
                      styles={{
                        radio: {
                          border: "2px solid #00000099",
                        },
                      }}
                    />
                    <Radio
                      label="Keyboard"
                      value="keyboard"
                      styles={{
                        radio: {
                          border: "2px solid #00000099",
                        },
                      }}
                    />
                    <Radio
                      label="Printer"
                      value="printer"
                      styles={{
                        radio: {
                          border: "2px solid #00000099",
                        },
                      }}
                    />
                  </Radio.Group>
                </li>
              ))}
            </ol>
            <div className="py-2 space-y-2 md:flex  gap-x-3 border-t-2 border-sky-900 border-opacity-40 ">
              <Checkbox
                styles={{
                  input: { border: "2px solid", background: "#D9D9D9" },
                }}
                label={
                  <div className="">
                    Saya,{" "}
                    <span className="text-cyan-600  font-normal tracking-tight">
                      {" "}
                      Diaken Ramadhani Yusuf
                    </span>
                    , menjamin bahwa pekerjaan ini adalah milik saya, dan saya
                    siap kehilangan akses secara permanen dari Quiz ini jika
                    terbukti melakukan kecurangan.
                  </div>
                }
                size="xs"
              />
              <div className="flex justify-end ">
                <Button
                  className="bg-sky-900 hover:bg-sky-800 my-5 rounded-[5px] px-10"
                  type="submit"
                  size="md"
                >
                  Finish Attempt
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QuizDetail;
