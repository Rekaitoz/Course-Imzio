import { Button } from "@mantine/core";
import {
  DataDashboardResume,
  TableDocBeli,
  TableFeedmill,
  TableOVKBeli,
  TablePenjualanAyam,
} from "../components";
import { IconCalendarDue, IconFilter } from "@tabler/icons-react";

import { YearPickerInput } from "@mantine/dates";

import { useState } from "react";

const DashboardResume: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [checkYear, setCheckYear] = useState<any>();

  const isClick = (event: any) => {
    event.preventDefault();
    setCheckYear({ startDate, endDate });
  };

  return (
    <main className="mt-3">
      <div className="flex items-center text-xs text-slate-500 mb-7 text-opacity-80">
        <h1 className="font-bold text-3xl text-black">Dashboard Resume</h1>
      </div>
      <div className="flex items-center text-xs text-slate-500 mb-8">
        <form
          action=""
          onSubmit={isClick}
          className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row md:gap-x-5 items-start md:items-end "
        >
          <label htmlFor="startCal" className="space-y-1">
            <span className="font-medium text-black ">Dari Tahun</span>

            <YearPickerInput
              className="font-medium w-36"
              placeholder="Pilih Tahun"
              radius="md"
              required
              value={startDate}
              onChange={setStartDate}
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
              className="font-medium w-36"
              placeholder="Pilih Tahun"
              radius="md"
              required
              value={endDate}
              onChange={setEndDate}
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
      <TablePenjualanAyam checkYear={checkYear} />
      <TableOVKBeli checkYear={checkYear} />
      <TableFeedmill checkYear={checkYear} />
      {/* <TableDocBeli /> */}
    </main>
  );
};

export default DashboardResume;
