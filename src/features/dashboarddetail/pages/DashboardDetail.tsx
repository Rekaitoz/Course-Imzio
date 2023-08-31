import { Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { IconCalendarDue, IconFilter } from "@tabler/icons-react";

import { DateInput, YearPickerInput } from "@mantine/dates";

import React from "react";
import {
  TableDocResume,
  TableFeedmillResume,
  TableHPPResume,
} from "../components";
import TableOVKResume from "../components/TableOVKResume";
import { useDocDetails, useFeedmillDetails } from "../api";
import { Center, Loader } from "@mantine/core";
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const datas: { [key: string]: any }[] = [
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
// const datas1: { [key: string]: any }[] = [
//   {
//     tahun: "2018",
//     1: getRandomNumber(0, 1000),
//     2: getRandomNumber(0, 1000),
//     3: getRandomNumber(0, 1000),
//     4: getRandomNumber(0, 1000),
//     5: getRandomNumber(0, 1000),
//     6: getRandomNumber(0, 1000),
//     7: getRandomNumber(0, 1000),
//     8: getRandomNumber(0, 1000),
//     9: getRandomNumber(0, 1000),
//     10: getRandomNumber(0, 1000),
//     11: getRandomNumber(0, 1000),
//     12: getRandomNumber(0, 1000),
//   },
//   {
//     tahun: "2019",
//     1: getRandomNumber(0, 1000),
//     2: getRandomNumber(0, 1000),
//     3: getRandomNumber(0, 1000),
//     4: getRandomNumber(0, 1000),
//     5: getRandomNumber(0, 1000),
//     6: getRandomNumber(0, 1000),
//     7: getRandomNumber(0, 1000),
//     8: getRandomNumber(0, 1000),
//     9: getRandomNumber(0, 1000),
//     10: getRandomNumber(0, 1000),
//     11: getRandomNumber(0, 1000),
//     12: getRandomNumber(0, 1000),
//   },
//   {
//     tahun: "2020",
//     1: getRandomNumber(0, 1000),
//     2: getRandomNumber(0, 1000),
//     3: getRandomNumber(0, 1000),
//     4: getRandomNumber(0, 1000),
//     5: getRandomNumber(0, 1000),
//     6: getRandomNumber(0, 1000),
//     7: getRandomNumber(0, 1000),
//     8: getRandomNumber(0, 1000),
//     9: getRandomNumber(0, 1000),
//     10: getRandomNumber(0, 1000),
//     11: getRandomNumber(0, 1000),
//     12: getRandomNumber(0, 1000),
//   },
// ];

const DashboardDetail: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [checkYear, setCheckYear] = useState<any>({ startDate, endDate });

  const { data: datasDoc, isLoading: isLoadingDoc } = useDocDetails({
    params: { checkYear },
  });
  const { data: datasFeed, isLoading: isLoadingFeed } = useFeedmillDetails({
    params: { checkYear },
  });

  const isClick = (event: any) => {
    event.preventDefault();
    setCheckYear({ startDate, endDate });
  };

  const [dataChange, setDataChange] = useState<{ [key: string]: any }[]>(
    datas.map((item: any) => {
      const updatedItem = { ...item };
      for (let i = 1; i <= 12; i++) {
        updatedItem[i] = 0;
      }

      return updatedItem;
    })
  );
  const [isLoadingOvk, setLoadingOvk] = useState(true);
  useEffect(() => {
    if (!isLoadingDoc) {
      setDataChange(
        datasDoc.map((item: any) => {
          const updatedItem = { ...item };
          for (let i = 1; i <= 12; i++) {
            updatedItem[i] = 0;
          }
          return updatedItem;
        })
      );
      setLoadingOvk(false);
    } else {
      setLoadingOvk(true);
    }
  }, [datasDoc]);

  return (
    <main className="mt-3">
      <div className="flex items-center text-xs text-slate-500 mb-7 text-opacity-80">
        <h1 className="font-bold text-3xl text-black">Dashboard Detail</h1>
      </div>
      <div className="flex items-center text-xs text-slate-500 mb-8">
        <form
          action=""
          onSubmit={isClick}
          className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row md:gap-x-5 items-start md:items-end "
        >
          <label htmlFor="startCal" className="space-y-1">
            <span className="font-medium text-black ">Dari Tahun</span>
            {/*border  border-black border-opacity-30 rounded-lg */}
            <YearPickerInput
              className="font-medium w-36 "
              placeholder="Pilih Tahun"
              value={startDate}
              onChange={setStartDate}
              radius="md"
              styles={{
                rightSection: { pointerEvents: "none" },
                input: { border: "1px solid rgba(0, 0, 0, .3) " },
              }}
              rightSection={
                <div className="border-l border-l-black border-opacity-30 pl-1.5 pr-2">
                  <IconCalendarDue
                    size={23}
                    className="text-black opacity-40 "
                    stroke={1}
                  />
                </div>
              }
            />
          </label>
          <label htmlFor="startCal2" className="cursor-text space-y-1">
            <span className="font-medium text-black ">Sampai Tahun</span>
            <YearPickerInput
              className="font-medium w-36 "
              placeholder="Pilih Tahun"
              value={endDate}
              onChange={setEndDate}
              radius="md"
              styles={{
                rightSection: { pointerEvents: "none" },
                input: { border: "1px solid rgba(0, 0, 0, .3) " },
              }}
              rightSection={
                <div className="border-l border-l-black border-opacity-30 pl-1.5 pr-2">
                  <IconCalendarDue
                    size={23}
                    className="text-black opacity-40 "
                    stroke={1}
                  />
                </div>
              }
            />
          </label>
          <Button
            leftIcon={<IconFilter size="1rem" stroke={1.2} />}
            className="bg-[#394867] hover:bg-[#294567] mt-2 md:mt-0"
            type="submit"
          >
            <span className="font-light text-xs">Filter</span>
          </Button>
        </form>
      </div>
      {isLoadingDoc || isLoadingFeed || isLoadingOvk ? (
        <Center className="w-full h-full ">
          <Loader color="blue" />
        </Center>
      ) : (
        <>
          <TableDocResume datas={isLoadingDoc ? datas : datasDoc} />
          <TableFeedmillResume datas={isLoadingFeed ? datas : datasFeed} />
          <TableOVKResume
            dataChange={dataChange}
            setDataChange={setDataChange}
          />
          <TableHPPResume
            docData={isLoadingDoc ? datas : datasDoc}
            feedmillData={isLoadingFeed ? datas : datasFeed}
            ovkData={dataChange}
          />
        </>
      )}
    </main>
  );
};

export default DashboardDetail;
