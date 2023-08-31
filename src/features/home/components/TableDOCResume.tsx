import Table2 from "components/elements/Table/Table2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSalesChickens } from "features/dashboardresume";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false, // Added to allow the chart to adjust its size based on container
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const columns = [
  { id: "id_penjualan", label: "Id Penjualan", sort: true },
  { id: "no_faktur", label: "No Faktur", sort: true },
  { id: "tanggal", label: "Tanggal", sort: true },
  { id: "jumlah_ekor", label: "Jmlh Ekor", sort: true },
  { id: "jumlah_berat", label: "Jmlh Berat", sort: true },
  { id: "avbw", label: "AVBW", sort: true },
  { id: "harga", label: "Harga", sort: true },
  { id: "jumlah", label: "Jumlah", sort: true },
  { id: "nama_pembeli", label: "Nama Pembeli", sort: true },
];

const datasw: { [key: string]: any }[] = [
  {
    tahun: "2018",
    1: getRandomNumber(0, 1000),
    2: getRandomNumber(0, 1000),
    3: getRandomNumber(0, 1000),
    4: getRandomNumber(0, 1000),
    5: getRandomNumber(0, 1000),
    6: getRandomNumber(0, 1000),
    7: getRandomNumber(0, 1000),
    8: getRandomNumber(0, 1000),
    9: getRandomNumber(0, 1000),
    10: getRandomNumber(0, 1000),
    11: getRandomNumber(0, 1000),
    12: getRandomNumber(0, 1000),
  },
  {
    tahun: "2019",
    1: getRandomNumber(0, 1000),
    2: getRandomNumber(0, 1000),
    3: getRandomNumber(0, 1000),
    4: getRandomNumber(0, 1000),
    5: getRandomNumber(0, 1000),
    6: getRandomNumber(0, 1000),
    7: getRandomNumber(0, 1000),
    8: getRandomNumber(0, 1000),
    9: getRandomNumber(0, 1000),
    10: getRandomNumber(0, 1000),
    11: getRandomNumber(0, 1000),
    12: getRandomNumber(0, 1000),
  },
  {
    tahun: "2020",
    1: getRandomNumber(0, 1000),
    2: getRandomNumber(0, 1000),
    3: getRandomNumber(0, 1000),
    4: getRandomNumber(0, 1000),
    5: getRandomNumber(0, 1000),
    6: getRandomNumber(0, 1000),
    7: getRandomNumber(0, 1000),
    8: getRandomNumber(0, 1000),
    9: getRandomNumber(0, 1000),
    10: getRandomNumber(0, 1000),
    11: getRandomNumber(0, 1000),
    12: getRandomNumber(0, 1000),
  },
];

const TableDOCResume = () => {
  const { data: datas, isLoading } = useSalesChickens({
    params: { checkYear: null },
  });

  console.log(datas);

  const diagramData = datasw.map((item: any) => {
    const data = labels.map((nums) => item[nums]);
    const backgroundColor = `rgba(${getRandomNumber(0, 255)}, ${getRandomNumber(
      0,
      255
    )}, ${getRandomNumber(0, 255)}, 0.8)`;

    return {
      label: item.tahun,
      data,
      backgroundColor,
    };
  });

  const data = {
    labels,
    datasets: diagramData,
  };

  return (
    <section className="bg-white  rounded px-4 md:px-6 lg:px-10 py-8 border border-black border-opacity-20">
      <div className="text-black text-opacity-70 font-semibold text-xl text-center">
        Grafik Penjualan Ayam
        <section className="mt-5 text-gray-700 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-gray-50">
          <div className="w-[900px] md:w-auto h-[280px]">
            <Bar options={options} data={data} />
          </div>
        </section>
        <Table2
          header={columns}
          items={datas?.data ? datas.data : []}
          loading={isLoading}
          renderItem={(ayam) => (
            <tr key={ayam.id} className="">
              {columns.map((column) =>
                column.id != "" ? (
                  <td
                    key={column.id}
                    className="py-5 px-4 font-normal text-sm text-gray-700 border-2 border-gray-300 "
                  >
                    {ayam[column.id as keyof typeof ayam]}
                  </td>
                ) : (
                  <></>
                  // <td className="flex items-center justify-center gap-x-3 py-5 w-40 ">
                  //   <IconEdit
                  //     onClick={() => handleUpdate(wali)}
                  //     className="border-2 rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                  //   />
                  //   <IconTrash
                  //     onClick={() => handleRemove(wali.id)}
                  //     className="border-2 rounded-md text-red-500 hover:bg-red-50 cursor-pointer"
                  //   />
                  // </td>
                )
              )}
            </tr>
          )}
        />
      </div>
    </section>
  );
};
export default TableDOCResume;
