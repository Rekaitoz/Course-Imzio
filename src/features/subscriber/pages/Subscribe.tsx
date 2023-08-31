import { Button, TextInput } from "@mantine/core";
import { IconArrowRight, IconCheck, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { SubscribeDetail } from "../components";

const Subscribe: React.FC = () => {
  const [method, setMethod] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <main>
      {isOpen && (
        <SubscribeDetail
          handleClose={() => setIsOpen(!isOpen)}
          amount={578000}
          message={""}
          name={""}
          payType={method}
          // period={1}
          period={1}
          slug={""}
        />
      )}
      <img
        src="Subscribe/back.jpg"
        alt=""
        className="absolute opacity-90 blur-[20px] -z-10 lg:h-screen"
      />
      <section className="lg:h-screen flex justify-between items-center px-5 sm:px-7 lg:px-11  max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-x-28 gap-y-10 mt-20 mb-20">
          <div className="bg-white py-7 px-8 rounded-[15px] drop-shadow-md">
            <div className="border-b border-b-neutral-500 border-opacity-50 w-full">
              <div className="text-black text-xl font-bold pb-5">
                FREE MEMBER{" "}
              </div>
              <div className="text-cyan-600 text-base font-semibold">Rp.0</div>
              <div className="text-neutral-500 text-xs font-medium">
                Aktif s.d Mei 2024
              </div>
            </div>
            <ul className="list-none p-0 space-y-2">
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconX size={28} className="text-red-600" />
                Gratis 5 Courses Pilihan
              </li>
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconX size={28} className="text-red-600" />
                Free Access Video Pembelajaran
              </li>
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconX size={28} className="text-red-600" />
                Free Access Kunci Jawaban Latihan
              </li>
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconX size={28} className="text-red-600" />
                Free Access latihan soal UTBK
              </li>
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconX size={28} className="text-red-600" />
                Free Access Live Class Pilihan
              </li>
            </ul>
          </div>
          <div className="bg-white py-7 px-8 rounded-[15px] drop-shadow-md">
            <div className="border-b border-b-neutral-500 border-opacity-50 w-full">
              <div className="text-black text-xl font-bold pb-5">
                IMZIO MEMBER PREMIUM
              </div>
              <div className="flex gap-x-2">
                <div className="text-cyan-600 text-base font-semibold">
                  Rp.578.000
                </div>
                <div className="text-neutral-500 text-base font-semibold line-through">
                  Rp.1.156.000
                </div>
              </div>
              <div className="text-neutral-500 text-xs font-medium">
                Aktif s.d Mei 2024
              </div>
            </div>
            <ul className="list-none p-0 space-y-2">
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconCheck size={28} className="text-green-500" />
                Gratis 5 Courses Pilihan
              </li>
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconCheck size={28} className="text-green-500" />
                Free Access Video Pembelajaran
              </li>
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconCheck size={28} className="text-green-500" />
                Free Access Kunci Jawaban Latihan
              </li>
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconCheck size={28} className="text-green-500" />
                Free Access latihan soal UTBK
              </li>
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconCheck size={28} className="text-green-500" />
                Free Access Live Class Pilihan
              </li>
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconCheck size={28} className="text-green-500" />
                Free Access Live Class International
              </li>
              <li className="text-black text-base font-medium flex gap-x-2">
                <IconCheck size={28} className="text-green-500" />
                [BONUS] Komentar Prioritas dalam diskusi
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" space-y-8 py-14 px-5 sm:px-7 lg:px-11 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
          <div>
            <div className="text-black text-opacity-60 text-xl font-semibold tracking-tight  border-b-4 border-b-sky-900">
              METODE PEMBAYARAN
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <button
                onClick={() => setMethod("qris")}
                type="button"
                className={`  drop-shadow-md px-3 text-start py-2 rounded shadow  hover:bg-zinc-200  ${
                  method == "qris" ? "bg-zinc-300" : "bg-zinc-100"
                }`}
              >
                <img
                  className="pb-1 max-w-full"
                  src="/transaction/logo-qris.png"
                  alt=""
                />
              </button>
              <button
                onClick={() => setMethod("dana")}
                type="button"
                className={`bg-zinc-100  drop-shadow-md px-3 text-start py-2 rounded shadow  hover:bg-zinc-200  ${
                  method == "dana" ? "bg-zinc-300" : "bg-zinc-100"
                }`}
              >
                <img
                  className="pb-1 max-w-full w-[139.57px] h-10"
                  src="/transaction/logo-dana.png"
                  alt=""
                />
              </button>
              <button
                onClick={() => setMethod("gopay")}
                type="button"
                className={`bg-zinc-100  drop-shadow-md px-3 text-start py-2 rounded shadow  hover:bg-zinc-200 ${
                  method == "gopay" ? "bg-zinc-300" : "bg-zinc-100"
                } `}
              >
                <img
                  className="pb-1 max-w-full w-[177.24px] h-10"
                  src="/transaction/logo-gopay.png"
                  alt=""
                />
              </button>
              <button
                onClick={() => setMethod("bca")}
                type="button"
                className={`bg-zinc-100  drop-shadow-md px-3 text-start py-2 rounded shadow  hover:bg-zinc-200  ${
                  method == "bca" ? "bg-zinc-300" : "bg-zinc-100"
                }`}
              >
                <img
                  className="pb-1 max-w-full"
                  src="/transaction/logo-bca.png"
                  alt=""
                />
              </button>
              <button
                onClick={() => setMethod("mandiri")}
                type="button"
                className={`bg-zinc-100  drop-shadow-md px-3 text-start py-2 rounded shadow  hover:bg-zinc-200  ${
                  method == "mandiri" ? "bg-zinc-300" : "bg-zinc-100"
                }`}
              >
                <img
                  className="pb-1 max-w-full"
                  src="/transaction/logo-mandiri.png"
                  alt=""
                />
              </button>
              <button
                onClick={() => setMethod("bni")}
                type="button"
                className={`bg-zinc-100  drop-shadow-md px-3 text-start py-2 rounded shadow  hover:bg-zinc-200 ${
                  method == "bni" ? "bg-zinc-300" : "bg-zinc-100"
                } `}
              >
                <img
                  className="pb-1 max-w-full"
                  src="/transaction/logo-bni.png"
                  alt=""
                />
              </button>
              <button
                onClick={() => setMethod("bri")}
                type="button"
                className={`bg-zinc-100  drop-shadow-md px-3 text-start py-2 rounded shadow  hover:bg-zinc-200  ${
                  method == "bri" ? "bg-zinc-300" : "bg-zinc-100"
                }`}
              >
                <img
                  className="pb-1 max-w-full"
                  src="/transaction/logo-bri.png"
                  alt=""
                />
              </button>
              <button
                onClick={() => setMethod("btn")}
                type="button"
                className={`bg-zinc-100  drop-shadow-md px-3 text-start py-2 rounded shadow  hover:bg-zinc-200 ${
                  method == "btn" ? "bg-zinc-300" : "bg-zinc-100"
                } `}
              >
                <img
                  className="pb-1 max-w-full "
                  src="/transaction/logo-btn.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div>
            <div className="text-black text-opacity-60 text-xl font-semibold tracking-tight border-b-4 border-b-sky-900">
              RINCIAN PEMBAYARAN
            </div>
            <div className="text-black text-lg font-semibold border-b border-b-black border-opacity-70 pt-2 pb-1 w-fit pr-2">
              IMZIO MEMBER PREMIUM 1 Years
            </div>
            <div className="bg-zinc-100  drop-shadow-md px-3 text-start py-2 rounded shadow my-3">
              <div className="text-black text-base font-medium tracking-tight">
                Kode Promo
              </div>
              <div className="flex gap-x-3">
                <TextInput
                  placeholder="Masukkan Kode Promo"
                  radius="xs"
                  size="xs"
                />{" "}
                <Button
                  radius="xs"
                  size="xs"
                  className="bg-cyan-600 hover:bg-cyan-700"
                >
                  Terapkan
                </Button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-x-2">
                  <span>
                    <img src="/transaction/coin.png" alt="" />
                  </span>
                  <div>
                    <span className="text-cyan-600 text-base font-medium tracking-tight">
                      IMZIO{" "}
                    </span>
                    <span className="text-black text-base font-medium tracking-tight">
                      Coin{" "}
                    </span>
                  </div>
                </div>
                <div className="text-neutral-500 text-xs font-medium tracking-tight">
                  [332 coins]
                </div>
              </div>
            </div>
            {method != "" && (
              <div>
                <div className="bg-zinc-100  drop-shadow-md  text-start rounded shadow mt-5  ">
                  <div className="flex items-center justify-between border-b-2 border-b-stone-300 px-5 py-3">
                    <div className="text-black text-base font-medium tracking-tight">
                      Metode Pembayaran{" "}
                    </div>
                    <img
                      src={`/transaction/logo-${method}.png`}
                      alt=""
                      className=" h-[27px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 px-5 py-3 gap-x-3">
                    <div className="">Subtotal Harga</div>
                    <div className=" md:col-span-2">
                      <span className="pr-2">:</span> Rp.578.000
                    </div>
                    <div className="">Voucher</div>
                    <div className=" md:col-span-2">
                      <span className="pr-2">:</span>- Rp.200.000
                    </div>
                    <div className="">Biaya Admin</div>
                    <div className=" md:col-span-2">
                      <span className="pr-2">:</span> Rp.100.000
                    </div>
                    <div className="">Total Harga</div>
                    <div className=" md:col-span-2">
                      <span className="pr-2">:</span> Rp.378.000
                    </div>
                  </div>
                </div>
                <Button
                  onClick={togglePopUp}
                  fullWidth
                  radius="md"
                  className="bg-sky-900 hover:bg-sky-800 mt-4 bg-opacity-60"
                >
                  Lanjutkan Pembayaran
                </Button>
              </div>
            )}
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

export default Subscribe;
