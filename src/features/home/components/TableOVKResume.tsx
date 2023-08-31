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
import { useState } from "react";
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
  { id: "", label: "" },
];

const TableOVKResume = ({ dataChange, setDataChange }: any) => {
  const diagramData = dataChange.map((item: any) => {
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

  const onChangeInput = (event: any, item: any, column: any) => {
    const value = event.currentTarget.value;

    const updatedDataChange = dataChange.map((dataItem: any) => {
      if (dataItem.tahun === item.tahun) {
        return {
          ...dataItem,
          [column]: value,
        };
      }
      return dataItem;
    });

    setDataChange(updatedDataChange);
  };

  function onAddRow(calculate: any) {
    openModal({
      title: "Fast Row Input",
      children: (
        <OVKResumeAddRow
          setDataChange={(value: any) => setDataChange(value)}
          dataChange={dataChange}
          calculate={calculate}
          onSuccess={closeAllModals}
          columns={columns}
        />
      ),
    });
  }
  function onAddCol(data: any, column: any) {
    openModal({
      title: "Fast Col Input",
      children: (
        <OVKResumeAddCol
          setDataChange={(value: any) => setDataChange(value)}
          dataChange={dataChange}
          columnId={column.id}
          onSuccess={closeAllModals}
        />
      ),
    });
  }

  return (
    <section className="bg-white mb-8 rounded-xl px-4 md:px-6 lg:px-10 py-8 border border-black border-opacity-20">
      <div className="text-black text-opacity-60 font-medium text-xl">
        OVK Resume
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
            <tr key={calculate.id} className="">
              {columns.map((column) =>
                column.id != "" ? (
                  column.id != "tahun" ? (
                    <td
                      key={column.id}
                      className="py-5 px-4 font-normal min-w-[4rem] !whitespace-normal  text-sm text-gray-700 border-2 border-gray-300 "
                    >
                      <TextInput
                        variant="unstyled"
                        value={calculate[column.id as keyof typeof calculate]}
                        onChange={(value) =>
                          onChangeInput(value, calculate, column.id)
                        }
                        className="border-y border-y-slate-200 -mx-4"
                      />
                    </td>
                  ) : (
                    <td
                      key={column.id}
                      className="py-5 px-4 font-bold text-sm text-gray-700 border-2 border-gray-300 "
                    >
                      {calculate[column.id as keyof typeof calculate]}
                    </td>
                  )
                ) : (
                  <td
                    key={column.id}
                    className="py-5 px-4 font-normal min-w-[4rem] !whitespace-normal  text-sm text-gray-700 border-2 border-gray-300 "
                  >
                    <IconPlus
                      onClick={() => onAddRow(calculate)}
                      className="border-2 border-gray rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                    />
                  </td>
                )
              )}
            </tr>
            {dataChange.length - 1 == index ? (
              <tr key={calculate.id + "_add"} className="">
                {columns.map((column, index) =>
                  index != 0 ? (
                    index != columns.length - 1 ? (
                      <td
                        key={column.id}
                        className="py-5 px-4 font-normal min-w-[4rem] !whitespace-normal  text-sm text-gray-700 border-2 border-gray-300 "
                      >
                        <IconPlus
                          onClick={() => onAddCol(dataChange, column)}
                          className="border-2 border-gray rounded-md text-orange-500 hover:bg-orange-50 cursor-pointer"
                        />
                      </td>
                    ) : (
                      <td></td>
                    )
                  ) : (
                    <td></td>
                  )
                )}
              </tr>
            ) : (
              <></>
            )}
          </>
        )}
      />
    </section>
  );
};
export default TableOVKResume;
