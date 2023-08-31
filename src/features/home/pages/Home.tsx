import { Button } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main>
      <nav className="fixed z-10 top-0 items-center w-full  justify-between text-gray-500 text-xs font-bold border bg-white border-black border-opacity-20 ">
        <div className="max-w-8xl h-16 mx-auto flex flex-row items-center justify-between px-5 sm:px-7 lg:px-11">
          <div className="space-y-1 ">
            <div className="text-sky-900 text-[28px] font-bold">IMZIO</div>
            <div className="text-black text-opacity-80 text-xs font-semibold tracking-[2.74px]">
              Education
            </div>
          </div>
          <div className="flex gap-x-8">
            <a href="/login" className="text-black text-sm font-medium">
              Masuk
            </a>
            <a href="/register" className="text-black text-sm font-medium">
              Daftar
            </a>
          </div>
        </div>
      </nav>
      <section className="lg:h-screen max-w-7xl flex justify-between items-center  mx-auto px-5 sm:px-7 lg:px-11">
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
            <div className="flex space-x-6 justify-center lg:justify-start">
              <Button
                component={Link}
                to={"/login"}
                className="bg-sky-900 hover:bg-sky-800"
                type="submit"
                radius="md"
              >
                Masuk
              </Button>
              <Button
                component={Link}
                to={"/register"}
                className="bg-white border-2 border-sky-800 text-sky-800 hover:bg-sky-700 hover:text-white"
                type="submit"
                radius="md"
              >
                Daftar
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

export default Home;
