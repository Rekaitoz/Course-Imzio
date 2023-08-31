import Table2 from "components/elements/Table/Table2";
import DataDashboardResume from "./DataDashboardResume";
import { useSalesOVK } from "../api";
import { formatNumbering, formatNumberingRound } from "utils/format";

const columns = [
  { id: "kode_barang", label: "Kode Barang", sort: true },
  { id: "nama_barang", label: "Nama Barang", sort: true },
  { id: "satuan", label: "Satuan", sort: true },
  { id: "id_faktur", label: "Id Faktur", sort: true },
  { id: "nama_supplier", label: "Supplier", sort: true },
  { id: "harga_barang", label: "Barang (RP)", sort: true, formating: "round" },
  {
    id: "jumlah_barang",
    label: "Total Barang",
    sort: true,
    formating: "decimal",
  },
  { id: "total", label: "Total", sort: true, formating: "round" },
  { id: "average", label: "Average", sort: true },
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

function isNumeric(value: any) {
  return /^-?\d+(\.\d+)?$/.test(value);
}

const TableOVKBeli = ({ checkYear }: { checkYear: any }) => {
  const { data, isLoading } = useSalesOVK({ params: { checkYear } });

  return (
    <section className="bg-white mb-8 rounded-xl px-4 md:px-6 lg:px-10 py-6 text-xs font-medium gap-y-8 border border-black border-opacity-20">
      <div className="text-black opacity-60 font-medium text-xl">OVK Beli</div>
      <Table2
        header={columns}
        items={data?.data ? data.data : []}
        loading={isLoading}
        // filter={["Siapa", "Engkau", "tuan"]}
        content={
          <DataDashboardResume
            data={data?.header}
            keyName={[
              { id: "totalJumlah", label: "Total Jumlah", formating: "round" },
              {
                id: "totalHarga",
                label: "Total (Rp)",
                start: "Rp",
                formating: "round",
              },
              { id: "average", label: "Average" },
            ]}
          />
        }
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
                    ? formatNumberingRound(ayam[column.id as keyof typeof ayam])
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
  );
};
export default TableOVKBeli;
