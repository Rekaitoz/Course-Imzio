import { formatNumbering, formatNumberingRound } from "utils/format";

const DataDashboardResume = ({ data, keyName }: any) => {
  return (
    <main className="grid md:grid-cols-2 lg:gap-x-56 text-xs font-medium gap-y-8 ">
      {keyName.map((item: any) => (
        <div className=" text-black text-opacity-60 grid grid-cols-3 ">
          <div className="">{item?.label}</div>
          <div className="whitespace-nowrap">
            <span className="pr-10">:</span>
            {`${item?.start ? item?.start : ""} ${
              item?.formating == "round"
                ? formatNumberingRound(data?.[item?.id])
                : item?.formating == "decimal"
                ? formatNumbering(data?.[item?.id])
                : data?.[item?.id]
            } ${item?.end ? item?.end : ""}`}
          </div>
        </div>
      ))}
    </main>
  );
};

export default DataDashboardResume;
