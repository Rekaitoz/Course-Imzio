import Table2 from "components/elements/Table/Table2";
import DataDashboardResume from "./DataDashboardResume";
import { useEffect, useState } from "react";
import { useSalesChickens } from "../api";
import { formatNumbering, formatNumberingRound } from "utils/format";

const columns = [
  { id: "id_penjualan", label: "Id Penjualan", sort: true },
  { id: "no_faktur", label: "No Faktur", sort: true },
  { id: "tanggal", label: "Tanggal", sort: true },
  { id: "jumlah_ekor", label: "Jmlh Ekor", sort: true, formating: "round" },
  { id: "jumlah_berat", label: "Jmlh Berat", sort: true, formating: "decimal" },
  { id: "avbw", label: "AVBW", sort: true, formating: "decimal" },
  { id: "harga", label: "Harga", sort: true, formating: "round" },
  { id: "jumlah", label: "Jumlah", sort: true, formating: "round" },
  { id: "nama_pembeli", label: "Nama Pembeli", sort: true },
];
const datas = [
  {
    kode_barang: "FWFW",
    nama_barang: "Ayam",
    jumlah: "50",
    total: "10000",
    satuan: "potongan",
    average: "wow",
    supplier: "test",
  },
  {
    kode_barang: "FWFW",
    nama_barang: "Sapi",
    jumlah: "50",
    total: "10000",
    satuan: "potongan",
    average: "test",
    supplier: "Pak",
  },
  {
    kode_barang: "FWFW",
    nama_barang: "Burung",
    jumlah: "50",
    total: "10000",
    satuan: "potongan",
    average: "test",
    supplier: "Pak",
  },
  {
    kode_barang: "FWFW",
    nama_barang: "Ayam",
    jumlah: "50",
    total: "10000",
    satuan: "potongan",
    average: "wow",
    supplier: "Pak",
  },
  {
    kode_barang: "FWFW",
    nama_barang: "Ayam",
    jumlah: "50",
    total: "10000",
    satuan: "potongan",
    average: "wow",
    supplier: "Pak",
  },
  {
    kode_barang: "FWFW",
    nama_barang: "Ayam",
    jumlah: "50",
    total: "10000",
    satuan: "potongan",
    average: "wow",
    supplier: "Pak",
  },
  {
    kode_barang: "FWFW",
    nama_barang: "Ayam",
    jumlah: "50",
    total: "10000",
    satuan: "potongan",
    average: "wow",
    supplier: "Pak",
  },
  {
    kode_barang: "FWFW",
    nama_barang: "Ayam",
    jumlah: "50",
    total: "10000",
    satuan: "potongan",
    average: "wow",
    supplier: "Pak",
  },
  {
    kode_barang: "FWFW",
    nama_barang: "Ayam",
    jumlah: "50",
    total: "10000",
    satuan: "potongan",
    average: "wow",
    supplier: "Pak",
  },
  {
    kode_barang: "FWFW",
    nama_barang: "Ayam",
    jumlah: "50",
    total: "10000",
    satuan: "potongan",
    average: "wow",
    supplier: "Pak",
  },
  {
    kode_barang: "FWFW",
    nama_barang: "Ayam",
    jumlah: "50",
    total: "10000",
    satuan: "potongan",
    average: "wow",
    supplier: "Pak",
  },
];

type ConstDataAyam = {
  id_penjualan: string;
  no_faktur: string;
  tanggal: string;
  jumlah_ekor: number;
  jumlah_berat: number;
  avbw: number;
  harga: number;
  jumlah: number;
  nama_pembeli: string;
};

function isNumeric(value: any) {
  return /^-?\d+(\.\d+)?$/.test(value);
}

const TablePenjualanAyam = ({ checkYear }: { checkYear: any }) => {
  const { data, isLoading } = useSalesChickens({ params: { checkYear } });

  return (
    <>
      <section className="bg-white mb-8 rounded-xl px-4 md:px-6 lg:px-10 py-8 border border-black border-opacity-20">
        <DataDashboardResume
          data={data?.header}
          keyName={[
            { id: "avbw", label: "AV-BW Average" },
            {
              id: "totalEkor",
              label: "Jumlah Ekor",
              end: "ekor",
              formating: "round",
            },
            {
              id: "totalBerat",
              label: "Berat Total (Kg)",
              end: "kg",
              formating: "decimal",
            },
            {
              id: "totalHarga",
              label: "Total (Rp)",
              start: "Rp",
              formating: "round",
            },
            {
              id: "hargaSatuan",
              label: "Harga Satuan (Rp)",
              start: "Rp",
            },
          ]}
        />
      </section>
      <section className="bg-white mb-8 rounded-xl px-4 md:px-6 lg:px-10 py-6 text-xs font-medium gap-y-8 border border-black border-opacity-20">
        <div className="text-black opacity-60 font-medium text-xl">
          Penjualan Ayam
        </div>
        <Table2
          header={columns}
          items={data?.data ? data.data : []}
          loading={isLoading}
          renderItem={(ayam) => (
            <tr key={ayam.id} className="">
              {columns.map((column) =>
                column.id != "" ? (
                  <td
                    key={column.id}
                    className={`py-5 px-4 font-normal text-sm text-gray-700 border-2 border-gray-300 ${
                      isNumeric(ayam[column.id]) ? "text-end" : "text-start"
                    }`}
                  >
                    {column.formating == "round"
                      ? formatNumberingRound(
                          ayam[column.id as keyof typeof ayam]
                        )
                      : column.formating == "decimal"
                      ? formatNumbering(ayam[column.id as keyof typeof ayam])
                      : ayam[column.id as keyof typeof ayam]}
                  </td>
                ) : (
                  <></>
                  // <td
                  //   key={column.id}
                  //   className="py-5 px-4 font-normal text-sm text-gray-700 border-2 border-gray-300 "
                  // >
                  //   {ayam[column.id as keyof typeof ayam]}
                  // </td>
                )
              )}
            </tr>
          )}
        />
      </section>
    </>
  );
};
export default TablePenjualanAyam;
