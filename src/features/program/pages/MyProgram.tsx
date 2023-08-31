import {
  Button,
  Checkbox,
  Progress,
  Rating,
  Switch,
  TextInput,
  Tabs,
} from "@mantine/core";
import {
  IconDotsVertical,
  IconHeart,
  IconPointFilled,
  IconSearch,
  IconShoppingCart,
  IconTrash,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const MyProgram: React.FC = () => {
  return (
    <main className="mt-16 max-w-8xl  mx-auto px-5 sm:px-7 lg:px-11">
      <section className="flex flex-col lg:flex-row mt-5 gap-y-5">
        <div className="w-full mt-5">
          <div className="text-black text-[40px] font-bold">
            PEMBELAJARAN SAYA
          </div>
          <Tabs defaultValue="gallery" color="dark">
            <Tabs.List className="space-x-10">
              <Tabs.Tab value="gallery" className="md:text-base px-0">
                Semua Kursus
              </Tabs.Tab>
              <Tabs.Tab value="settings" className="md:text-base px-0">
                Daftar Keinginan
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs">
              <div className="my-5  space-y-7">
                {new Array(6).fill(0).map((item) => (
                  <Link
                    to={"/course"}
                    className="border border-black border-opacity-40 py-5 px-7 flex justify-between"
                  >
                    <div className="md:flex items-center gap-x-4 w-full">
                      <img
                        className="md:w-[201px] h-auto"
                        src="https://assets-global.website-files.com/602eda09fc78af5a419706be/6418886aa141bdf3be9959ef_storj-blog-go-test1300w.jpg"
                        alt=""
                      />
                      <div className="w-full flex justify-between gap-x-2 mt-4">
                        <div className="space-y-1 w-full">
                          <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className=" text-black text-sm font-bold line-clamp-2">
                              Backend Master Class [Golang + Postgres +
                              Kubernetes + gRPC];
                            </div>
                            <div className="pt-1 grid grid-cols-3 gap-x-3">
                              <Progress
                                value={50}
                                className="col-span-2 mt-1 bg-[#D9D9D9]"
                              />
                              <div className="text-black text-xs font-normal">
                                Progress 35%
                              </div>
                            </div>
                          </div>
                          <div className=" text-black text-opacity-60 text-[10px] font-normal">
                            Oleh TECH SCHOOL
                          </div>
                          <div className=" text-amber-700 text-[15px] font-bold flex items-center gap-x-1">
                            5,0 <Rating value={3} color="orange" readOnly />{" "}
                            <div className=" text-black text-opacity-60 text-xs font-normal">
                              (219 Penilaian)
                            </div>
                          </div>
                          <div className=" text-black text-opacity-60 text-xs font-normal flex items-center gap-x-1">
                            12,5 Hours
                            <IconPointFilled size={13} />
                            120 Pelajaran
                            <IconPointFilled size={13} />
                            SD
                          </div>
                        </div>
                        <div className="flex gap-x-2">
                          <IconDotsVertical className="hover:text-slate-500 hover:cursor-pointer" />
                        </div>
                      </div>
                    </div>
                    {/*  */}
                  </Link>
                ))}
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="settings" pt="xs">
              <div className="my-5  space-y-7">
                {new Array(6).fill(0).map((item) => (
                  <div className="border border-black border-opacity-40 py-5 px-7 flex justify-between">
                    <div className="md:flex items-center gap-x-4 w-full">
                      <img
                        className="md:w-[201px] h-auto"
                        src="https://assets-global.website-files.com/602eda09fc78af5a419706be/6418886aa141bdf3be9959ef_storj-blog-go-test1300w.jpg"
                        alt=""
                      />

                      <div className="space-y-1 w-full mt-4">
                        <div className="flex gap-x-2 justify-between">
                          <div className=" text-black text-sm font-bold line-clamp-2">
                            Backend Master Class [Golang + Postgres + Kubernetes
                            + gRPC];
                          </div>
                          <div className="flex items-center gap-x-2 border-l pl-2">
                            <IconTrash className="text-black text-opacity-60 text-xs font-normal hover:text-slate-500 hover:cursor-pointer" />
                          </div>
                        </div>

                        <div className=" text-black text-opacity-60 text-[10px] font-normal">
                          Oleh TECH SCHOOL
                        </div>
                        <div className=" text-amber-700 text-[15px] font-bold flex items-center gap-x-1">
                          5,0 <Rating value={3} color="orange" readOnly />{" "}
                          <div className=" text-black text-opacity-60 text-xs font-normal">
                            (219 Penilaian)
                          </div>
                        </div>
                        <div className="md:flex justify-between items-center space-y-2">
                          <div className=" text-black text-opacity-60 text-xs font-normal flex items-center gap-x-1">
                            12,5 Hours
                            <IconPointFilled size={13} />
                            120 Pelajaran
                            <IconPointFilled size={13} />
                            SD
                          </div>
                          <div className="text-black text-base font-bold">
                            Rp 449.000,-
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                  </div>
                ))}
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="settings" pt="xs">
              Settings tab content
            </Tabs.Panel>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default MyProgram;
