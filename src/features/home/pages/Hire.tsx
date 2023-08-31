import { Button, Tabs } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

const Hire: React.FC = () => {
  return (
    <main>
      <section className="bg-[#f2f2f2]">
        <section className="lg:h-screen max-w-7xl flex justify-between items-center mx-auto px-5 sm:px-7 lg:px-11 ">
          <div className="grid gap-y-8 mb-10 lg:my-0 mt-20 lg:grid-cols-2 gap-x-16">
            <div className="space-y-4 bg-[#f2f2f2]">
              <div className="text-black text-center lg:text-start text-[64px] font-bold leading-tight">
                Mengajarlah bersama kami
              </div>
              <div className="  text-justify text-black text-xl font-normal leading-7 ">
                Jadilah instruktur dan ubah hidup — termasuk hidup Anda sendiri
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
                <img
                  src="/dana.png"
                  alt=""
                  className="mt-36 lg:mt-0 h-[578px]"
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="mx-auto max-w-7xl py-14">
        <div className="text-black text-4xl font-bold text-center">
          Cara memulai
        </div>
        <Tabs defaultValue="gallery" className="max-w-4xl mx-auto mt-8">
          <Tabs.List grow className="font-semibold">
            <Tabs.Tab value="gallery">Rencanakan kurikulum Anda</Tabs.Tab>
            <Tabs.Tab value="messages">Rekam video Anda</Tabs.Tab>
            <Tabs.Tab value="settings">Luncurkan kursus Anda</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            <div className="grid grid-cols-2">
              <div className="space-y-4 mt-8">
                <div className=" text-black text-lg font-normal">
                  Anda memulai dengan semangat dan pengetahuan. Kemudian
                  pilihlah topik menjanjikan dengan bantu alat Wawasan Pasar
                  kami. Cara Anda mengajar — apa yang Anda bawa saat mengajar —
                  terserah Anda.
                </div>
                <div className="text-black text-lg font-bold">
                  Cara kami membantu Anda
                </div>
                <div className=" text-black text-lg font-normal">
                  Kami menawarkan banyak sumber daya untuk cara membuat kursus
                  pertama. Selain itu, dasbor instruktur dan halaman kurikulum
                  kami akan membantu Anda menyusun rencana.
                </div>
              </div>
              <img src="/human1.png" alt="" className="w-full" />
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="messages" pt="xs">
            <div className="grid grid-cols-2">
              <div className="space-y-4 mt-8">
                <div className=" text-black text-lg font-normal">
                  Kumpulkan peringkat dan ulasan dengan mempromosikan kursus
                  Anda melalui media sosial dan jaringan profesional Anda.
                  <br />
                  Kursus Anda akan dapat ditemukan di marketplace kami, tempat
                  Anda mendapatkan penghasilan dari setiap pendaftaran berbayar.
                </div>
                <div className="text-black text-lg font-bold">
                  Cara kami membantu Anda
                </div>
                <div className=" text-black text-lg font-normal">
                  Alat kupon kustom kami memungkinkan Anda menawarkan insentif
                  pendaftaran sekaligus mendorong lalu lintas promosi global ke
                  kursus. Ada lebih banyak lagi peluang untuk kursus yang
                  dipilih untuk Udemy Business.
                </div>
              </div>
              <img src="/human2.png" alt="" className="w-full" />
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            <div className="grid grid-cols-2">
              <div className="space-y-4 mt-8">
                <div className=" text-black text-lg font-normal">
                  Kumpulkan peringkat dan ulasan dengan mempromosikan kursus
                  Anda melalui media sosial dan jaringan profesional Anda.
                  Kursus Anda akan dapat ditemukan di marketplace kami, tempat
                  Anda mendapatkan penghasilan dari setiap pendaftaran berbayar.
                </div>
                <div className="text-black text-lg font-bold">
                  Cara kami membantu Anda
                </div>
                <div className=" text-black text-lg font-normal">
                  Alat kupon kustom kami memungkinkan Anda menawarkan insentif
                  pendaftaran sekaligus mendorong lalu lintas promosi global ke
                  kursus. Ada lebih banyak lagi peluang untuk kursus yang
                  dipilih untuk Udemy Business.
                </div>
              </div>
              <img src="/human3.png" alt="" className="w-full" />
            </div>
          </Tabs.Panel>
        </Tabs>
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

export default Hire;
