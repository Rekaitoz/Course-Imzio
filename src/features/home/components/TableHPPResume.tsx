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
import TableView from "components/elements/Table/TableView";
import { formatNumbering } from "utils/format";
import { useEffect, useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { closeAllModals, openConfirmModal, openModal } from "@mantine/modals";
import OVKResumeAddRow from "./OVKResumeAddRow";
import OVKResumeAddCol from "./OVKResumeAddCol";

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
      position: "right" as const,
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
  { id: "tahun", label: "Tahun", sort: true },
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
  { id: "4", label: "4" },
  { id: "5", label: "5" },
  { id: "6", label: "6" },
  { id: "7", label: "7" },
  { id: "8", label: "8" },
  { id: "9", label: "9" },
  { id: "10", label: "10" },
  { id: "11", label: "11" },
  { id: "12", label: "12" },
  { id: "abw", label: "ABW" },
  { id: "fcr", label: "FCR" },
  { id: "dpls", label: "Dpls" },
];
const datas: ConstData = [
  {
    tahun: "2018",
    row: [
      {
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
        abw: getRandomNumber(0, 1000),
        fcr: getRandomNumber(0, 1000),
        dpls: getRandomNumber(0, 1000),
      },
      {
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
        abw: getRandomNumber(0, 1000),
        fcr: getRandomNumber(0, 1000),
        dpls: getRandomNumber(0, 1000),
      },
      {
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
        abw: getRandomNumber(0, 1000),
        fcr: getRandomNumber(0, 1000),
        dpls: getRandomNumber(0, 1000),
      },
    ],
  },
  {
    tahun: "2019",
    row: [
      {
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
        abw: getRandomNumber(0, 1000),
        fcr: getRandomNumber(0, 1000),
        dpls: getRandomNumber(0, 1000),
      },
      {
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
        abw: getRandomNumber(0, 1000),
        fcr: getRandomNumber(0, 1000),
        dpls: getRandomNumber(0, 1000),
      },
      {
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
        abw: getRandomNumber(0, 1000),
        fcr: getRandomNumber(0, 1000),
        dpls: getRandomNumber(0, 1000),
      },
    ],
  },
  {
    tahun: "2020",
    row: [
      {
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
        abw: getRandomNumber(0, 1000),
        fcr: getRandomNumber(0, 1000),
        dpls: getRandomNumber(0, 1000),
      },
      {
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
        abw: getRandomNumber(0, 1000),
        fcr: getRandomNumber(0, 1000),
        dpls: getRandomNumber(0, 1000),
      },
      {
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
        abw: getRandomNumber(0, 1000),
        fcr: getRandomNumber(0, 1000),
        dpls: getRandomNumber(0, 1000),
      },
    ],
  },
];

interface RowData {
  [key: number]: number;
  abw: number;
  fcr: number;
  dpls: number;
  // Other properties if applicable
}

type ConstData = {
  tahun: string;
  row: RowData[];
}[];

const TableHPPResume = ({ docData, feedmillData, ovkData }: any) => {
  // const [dataChange, setDataChange] = useState(datas);
  const [dataChange, setDataChange] = useState<ConstData>(
    docData.map((item: any) => {
      return {
        tahun: item.tahun,
        row: [
          ...new Array(3).fill(1).map((item, index) => ({
            1:
              (docData[index][1] * (1 + 0) +
                0 * 0 * feedmillData[index][1] +
                ovkData[index][1]) /
              0,
            2:
              (docData[index][2] * (1 + 0) +
                0 * 0 * feedmillData[index][2] +
                ovkData[index][2]) /
              0,
            3:
              (docData[index][3] * (1 + 0) +
                0 * 0 * feedmillData[index][3] +
                ovkData[index][3]) /
              0,
            4:
              (docData[index][4] * (1 + 0) +
                0 * 0 * feedmillData[index][4] +
                ovkData[index][4]) /
              0,
            5:
              (docData[index][5] * (1 + 0) +
                0 * 0 * feedmillData[index][5] +
                ovkData[index][5]) /
              0,
            6:
              (docData[index][6] * (1 + 0) +
                0 * 0 * feedmillData[index][6] +
                ovkData[index][6]) /
              0,
            7:
              (docData[index][7] * (1 + 0) +
                0 * 0 * feedmillData[index][7] +
                ovkData[index][7]) /
              0,
            8:
              (docData[index][8] * (1 + 0) +
                0 * 0 * feedmillData[index][8] +
                ovkData[index][8]) /
              0,
            9:
              (docData[index][9] * (1 + 0) +
                0 * 0 * feedmillData[index][9] +
                ovkData[index][9]) /
              0,
            10:
              (docData[index][10] * (1 + 0) +
                0 * 0 * feedmillData[index][10] +
                ovkData[index][10]) /
              0,
            11:
              (docData[index][11] * (1 + 0) +
                0 * 0 * feedmillData[index][11] +
                ovkData[index][11]) /
              0,
            12:
              (docData[index][12] * (1 + 0) +
                0 * 0 * feedmillData[index][12] +
                ovkData[index][12]) /
              0,
            abw: 0,
            fcr: 0,
            dpls: 0,
          })),
        ],
      };
    })
  );

  useEffect(() => {
    if (dataChange) {
      setDataChange(
        dataChange.map((item: { tahun: string; row: RowData[] }) => {
          return {
            tahun: item.tahun,
            row: item.row.map((rowData, index) => ({
              1:
                (docData[index][1] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][1] +
                  ovkData[index][1]) /
                rowData.abw,
              2:
                (docData[index][2] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][2] +
                  ovkData[index][2]) /
                rowData.abw,
              3:
                (docData[index][3] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][3] +
                  ovkData[index][3]) /
                rowData.abw,
              4:
                (docData[index][4] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][4] +
                  ovkData[index][4]) /
                rowData.abw,
              5:
                (docData[index][5] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][5] +
                  ovkData[index][5]) /
                rowData.abw,
              6:
                (docData[index][6] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][6] +
                  ovkData[index][6]) /
                rowData.abw,
              7:
                (docData[index][7] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][7] +
                  ovkData[index][7]) /
                rowData.abw,
              8:
                (docData[index][8] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][8] +
                  ovkData[index][8]) /
                rowData.abw,
              9:
                (docData[index][9] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][9] +
                  ovkData[index][9]) /
                rowData.abw,
              10:
                (docData[index][10] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][10] +
                  ovkData[index][10]) /
                rowData.abw,
              11:
                (docData[index][11] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][11] +
                  ovkData[index][11]) /
                rowData.abw,
              12:
                (docData[index][12] * (1 + rowData.dpls) +
                  rowData.fcr * rowData.abw * feedmillData[index][12] +
                  ovkData[index][12]) /
                rowData.abw,
              abw: rowData.abw,
              fcr: rowData.fcr,
              dpls: rowData.dpls,
            })),
          };
        })
      );
    }
  }, [docData, feedmillData, ovkData]);

  const test = [
    docData.map((item: any) => {
      return {
        tahun: item.tahun,
        row: [
          ...new Array(3).fill(1).map((item, index) => ({
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
            abw: getRandomNumber(0, 1000),
            fcr: getRandomNumber(0, 1000),
            dpls: getRandomNumber(0, 1000),
          })),
        ],
      };
    }),
  ];

  const [rowNow, setRowNow] = useState(0);
  // console.log(dataChange);

  const diagramData = dataChange.map((item: ConstData[number]) => {
    const data = labels.map((nums) => item.row[rowNow][nums]);
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

  const countTheRow = (data: any, tahun: any) => {
    const doc = docData.filter((item: any) => item.tahun == tahun)[0];
    const feedmill = feedmillData.filter((item: any) => item.tahun == tahun)[0];
    const ovk = ovkData.filter((item: any) => item.tahun == tahun)[0];

    return {
      1:
        (doc[1] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[1] +
          ovk[1]) /
        data.abw,
      2:
        (doc[2] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[2] +
          ovk[2]) /
        data.abw,
      3:
        (doc[3] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[3] +
          ovk[3]) /
        data.abw,
      4:
        (doc[4] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[4] +
          ovk[4]) /
        data.abw,
      5:
        (doc[5] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[5] +
          ovk[5]) /
        data.abw,
      6:
        (doc[6] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[6] +
          ovk[6]) /
        data.abw,
      7:
        (doc[7] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[7] +
          ovk[7]) /
        data.abw,
      8:
        (doc[8] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[8] +
          ovk[8]) /
        data.abw,
      9:
        (doc[9] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[9] +
          ovk[9]) /
        data.abw,
      10:
        (doc[10] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[10] +
          ovk[10]) /
        data.abw,
      11:
        (doc[11] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[11] +
          ovk[11]) /
        data.abw,
      12:
        (doc[12] * (1 + data.dpls) +
          data.fcr * data.abw * feedmill[12] +
          ovk[12]) /
        data.abw,
      abw: data.abw,
      fcr: data.fcr,
      dpls: data.dpls,
    };
  };

  return (
    <section className="bg-white mb-8 rounded-xl px-4 md:px-6 lg:px-10 py-8 border border-black border-opacity-20">
      <div className="text-black text-opacity-60 font-medium text-xl">
        HPP Resume
        <div className="mt-3 space-x-3">
          <Button
            className={`mt-2 md:mt-0 ${
              rowNow == 0
                ? "bg-[#5f77a9] hover:bg-[#5f77a9]"
                : "bg-[#394867] hover:bg-[#294567]"
            }`}
            onClick={() => setRowNow(0)}
          >
            <span className="font-semibold text-xs">1</span>
          </Button>
          <Button
            className={`mt-2 md:mt-0 ${
              rowNow == 1
                ? "bg-[#5f77a9] hover:bg-[#5f77a9]"
                : "bg-[#394867] hover:bg-[#294567]"
            }`}
            onClick={() => setRowNow(1)}
          >
            <span className="font-semibold text-xs">2</span>
          </Button>
          <Button
            className={`mt-2 md:mt-0 ${
              rowNow == 2
                ? "bg-[#5f77a9] hover:bg-[#5f77a9]"
                : "bg-[#394867] hover:bg-[#294567]"
            }`}
            onClick={() => setRowNow(2)}
          >
            <span className="font-semibold text-xs">3</span>
          </Button>
        </div>
        <section className="mt-5 text-gray-700 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-gray-50">
          <div className="w-[900px] md:w-auto h-[280px]">
            <Bar options={options} data={data} />
          </div>
        </section>
      </div>
      <TableView
        header={columns}
        items={dataChange}
        renderItem={(calculate, index) => (
          <>
            {calculate.row.map((row: any, rowIndex: any) => (
              <tr
                key={`row-${calculate.tahun}-${rowIndex}`}
                className={`${rowNow == rowIndex ? "bg-gray-100" : ""}`}
              >
                {rowIndex === 0 && (
                  <td
                    rowSpan={calculate.row.length}
                    className="font-bold py-5 px-4 border-2 border-gray-300 bg-white"
                  >
                    {calculate.tahun}
                  </td>
                )}
                {columns.map((column) =>
                  column.id != "tahun" ? (
                    column.id === "abw" ||
                    column.id === "fcr" ||
                    column.id === "dpls" ? (
                      <td
                        key={`cell-${calculate.tahun}-${rowIndex}-${column.id}`}
                        className="py-5 px-4 font-normal min-w-[4rem] !whitespace-normal  text-sm text-gray-700 border-2 border-gray-300"
                      >
                        <TextInput
                          variant="unstyled"
                          value={row[column.id as keyof typeof row]}
                          onChange={(event) => {
                            const value = event.currentTarget.value;
                            const updatedDataChange = dataChange.map(
                              (dataItem) => {
                                if (dataItem.tahun === calculate.tahun) {
                                  const updatedRow = dataItem.row.map(
                                    (rowData: any, rIndex: any) => {
                                      if (rIndex === rowIndex) {
                                        return countTheRow(
                                          {
                                            ...rowData,
                                            [column.id]: value,
                                          },
                                          calculate.tahun
                                        );
                                      }

                                      return rowData;
                                    }
                                  );
                                  //

                                  return {
                                    ...dataItem,
                                    row: updatedRow,
                                  };
                                }

                                return dataItem;
                              }
                            );

                            setDataChange(updatedDataChange);
                          }}
                          className="border-y border-y-slate-200 -mx-4"
                        />
                      </td>
                    ) : (
                      <td
                        key={`cell-${calculate.tahun}-${rowIndex}-${column.id}`}
                        className="py-5 px-4 font-normal min-w-[4rem] !whitespace-normal  text-sm text-gray-700 border-2 border-gray-300"
                      >
                        {formatNumbering(row[column.id])}
                      </td>
                    )
                  ) : (
                    ""
                  )
                )}
              </tr>
            ))}
          </>
        )}
      />
    </section>
  );
};
export default TableHPPResume;
