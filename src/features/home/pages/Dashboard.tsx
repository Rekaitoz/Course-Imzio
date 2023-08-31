import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <main>
      <section className="lg:h-screen max-w-7xl flex justify-between items-center mx-auto px-5 sm:px-7 lg:px-11">
        <div className="grid gap-y-8 mb-10 lg:my-0 mt-20 lg:grid-cols-2 gap-x-16">
          <div className="space-y-4">
            <div className="text-black text-center lg:text-start text-[64px] font-bold leading-tight">
              Belajar Tanpa Batasan
            </div>
            <div className="  text-justify text-black text-xl font-normal leading-7 tracking-wider">
              Mulailah, alihkan, atau tingkatkan karir Anda dengan lebih dari
              5.800 kursus, Sertifikat Profesional, dan gelar dari universitas
              dan perusahaan kelas dunia.
            </div>
            <div className="flex pt-2 space-x-6 justify-center lg:justify-start">
              <Button
                className="bg-sky-900 hover:bg-sky-800"
                type="submit"
                radius="md"
                size="md"
              >
                Mulai Sekarang
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end order-first lg:order-1">
            <div className="w-[410px] h-[410px] bg-sky-900 rounded-full flex justify-center items-center text-white font-semibold">
              LOGO
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 space-y-8 py-14 px-5 sm:px-7 lg:px-11">
        <div className="text-center max-w-7xl mx-auto">
          <span className="text-black text-2xl font-bold">
            Telah Dipercaya Oleh{" "}
          </span>
          <span className="text-sky-900 text-2xl font-bold">
            275+ Universitas dan Perusahaan Terkemuka
          </span>
        </div>
        <div className="flex flex-wrap max-w-7xl justify-center mx-auto gap-x-8 gap-y-8">
          <img className="w-[168px] h-[34px]" src="/Sponsor/image_1.png" />
          <img className="w-[98px] h-[34px]" src="/Sponsor/image_2.png" />
          <img className="w-[130px] h-[45px]" src="/Sponsor/image_3.png" />
          <img className="w-[63px] h-[66px]" src="/Sponsor/image_4.png" />
          <img className="w-[85px] h-[34px]" src="/Sponsor/image_5.png" />
          <img className="w-[171px] h-[45px]" src="/Sponsor/image_6.png" />
          <img className="w-[139px] h-[30px]" src="/Sponsor/image_7.png" />
        </div>
      </section>
      <section className="py-14 px-5 sm:px-7 lg:px-11 max-w-8xl mx-auto space-y-2">
        <div className="text-black text-[26px] font-normal  ">
          Kelas Pilihan (Online + Offline)
        </div>
        <div className="text-black text-sm font-normal">
          Explore our newest programs, focused on delivering in-demand skills.
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-5 gap-x-5">
          {new Array(4).fill(0).map(() => (
            <div className="border border-black p-4 border-opacity-20 space-y-2 bg-white hover:px-5 hover:bg-blue-50 hover:cursor-pointer transition-all duration-150 ease-in-out">
              <img
                className="w-full h-[122px]"
                src="https://blog.boot.dev/img/800/bestwaytolearngolang.webp"
                alt=""
              />
              <div className="space-y-2 mb-4 ">
                <div className=" text-black text-sm font-bold ">
                  Backend Master Class [Golang + Postgres + Kubernetes + gRPC]
                </div>
                <div className=" text-black text-opacity-60 text-[10px] font-normal">
                  TECH SCHOOL
                </div>
                <div className=" text-black text-base font-bold">
                  Rp 729.000
                </div>
                <div className="w-[62px] h-[17px]  bg-sky-200 rounded-[5px]">
                  <div className="w-[34px] h-2.5 text-black text-[10px] font-normal mx-auto">
                    Terlaris
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center text-black text-[15px] font-normal  pt-6 ">
          <span className="flex gap-x-1 hover:text-gray-600 hover:cursor-pointer items-center">
            Lihat Lainnya <IconArrowRight width={15} />
          </span>
        </div>
      </section>
      <section className="py-14 px-5 sm:px-7 lg:px-11 max-w-8xl mx-auto space-y-2">
        <div className="text-black text-[26px] font-normal  ">
          Kelas Pilihan Full Online
        </div>
        <div className="text-black text-sm font-normal">
          Explore our newest programs, focused on delivering in-demand skills.
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-5 gap-x-5 gap-y-5">
          {new Array(4).fill(0).map(() => (
            <div className="border border-black p-4 border-opacity-20 space-y-2 bg-white hover:px-5 hover:bg-blue-50 hover:cursor-pointer transition-all duration-150 ease-in-out">
              <img
                className="w-full h-[122px]"
                src="https://blog.boot.dev/img/800/bestwaytolearngolang.webp"
                alt=""
              />
              <div className="space-y-2 mb-4 ">
                <div className=" text-black text-sm font-bold ">
                  Backend Master Class [Golang + Postgres + Kubernetes + gRPC]
                </div>
                <div className=" text-black text-opacity-60 text-[10px] font-normal">
                  TECH SCHOOL
                </div>
                <div className=" text-black text-base font-bold">
                  Rp 729.000
                </div>
                <div className="w-[62px] h-[17px]  bg-sky-200 rounded-[5px]">
                  <div className="w-[34px] h-2.5 text-black text-[10px] font-normal mx-auto">
                    Terlaris
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center text-black text-[15px] font-normal  pt-6 ">
          <span className="flex gap-x-1 hover:text-gray-600 hover:cursor-pointer items-center">
            Lihat Lainnya <IconArrowRight width={15} />
          </span>
        </div>
      </section>
      <section className="py-14 px-5 sm:px-7 lg:px-11 max-w-8xl mx-auto text-center space-y-2">
        <div className="text-black text-[32px] font-bold">
          Dari Komunitas IMZIO
        </div>
        <div className="text-black text-sm font-normal">
          124+ million people have already joined IMZIO
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-7 gap-x-14 gap-y-10">
          {new Array(3).fill(0).map((item) => (
            <div className="border border-black px-4 pt-8 pb-14 border-opacity-20 space-y-2 ">
              <img
                className="w-[250px] h-[250px] mx-auto rounded-full object-cover"
                src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?5315ffb"
                alt=""
              />
              <div className="space-y-4 mb-4 px-8 pt-5">
                <div className=" text-black text-2xl font-bold leading-3">
                  La Diva
                </div>
                <div className="border-b border-b-black w-fit mx-auto border-opacity-40">
                  <span className="px-5 text-black text-xs font-normal">
                    Desainer
                  </span>
                </div>
                <div className="text-center text-black text-xs font-normal">
                  “Even more important than knowledege is confidence, which I
                  have gained through my learning journey. No matter what you
                  are looking to learn, or gain confidence in IMZIO hase
                  something for you”
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-neutral-100 space-y-8 py-14 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16">
          <ul className="list-none font-medium space-y-2">
            <li className="font-bold mb-3">Pelajari Sesuatu yang baru</li>
            <li>Belajar Bahasa</li>
            <li>Pelajari Aktansi</li>
            <li>Pelajari Pembuatan Kode</li>
            <li>Pelajari Copywriting</li>
            <li>Pelajari SDM</li>
            <li>Pelajari Humas</li>
            <li>M.S. Ilmu Data dari Boulder</li>
            <li>Illinois iMBA</li>
            <li>M.S. Ilmu Komputer Illionis</li>
            <li>M.S. Ilmu Data Terapan dari UMIch</li>
          </ul>
          <ul className="list-none font-medium space-y-2">
            <li className="font-bold mb-3">Artikel Unggulan</li>
            <li>Panduan Lengkap untuk Menjadi Analisis Data</li>
            <li>Tingkatkan Karier Anda dengan Sertifikasi keamanan siber</li>
            <li>Dapatkan Sertifikasi Analisis Data Anda</li>
            <li>Cara Masukke Bidang Analisis Data</li>
            <li>Mulailah Karier Data Anda dengan Sertifikasi SQL</li>
            <li>Pelajari Cara mendapatkan Sertifikat PMP</li>
            <li>Mulai Karier Anda dengan Sertifikasi CAPM</li>
            <li>Memahami Peran dan Tanggung Jawab Seorang Scrum Master</li>
            <li>Buka Potensi Anda dengan Sertifikasi PMI</li>
            <li>Yang Harus Anda Ketahui tentang Sertifikasi CompTIA A++</li>
          </ul>
          <ul className="list-none font-medium space-y-2">
            <li className="font-bold mb-3">IMZIO</li>
            <li>Tentang</li>
            <li>Apa yang kita tawarkan</li>
            <li>Kepemimpinan</li>
            <li>Karier</li>
            <li>Katalog</li>
            <li>Coursera Plus</li>
            <li>Sertifikat Profesional</li>
            <li>Sertifikat MasterTrack</li>
            <li>Gelar</li>
            <li>Untuk Perusahaan</li>
            <li>Untuk Pemerintahan</li>
            <li>Untuk Kampus</li>
            <li>Menjadi Mitra</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
