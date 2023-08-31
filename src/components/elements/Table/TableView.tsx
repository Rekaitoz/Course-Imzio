import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import TableSkeleton from "./TableSkeleton";
import { useState } from "react";

interface Props {
  header: {
    id: string;
    label: string;
    sort?: boolean;
  }[];
  items: any[];
  searchTerm?: string;
  content?: any;
  renderItem: (item: any, index: any) => React.ReactNode;
  loading?: boolean;
  filter?: any;
}

const TableView = ({
  header,
  items,
  content,
  renderItem,
  loading,
  filter,
}: Props) => {
  const [sortColumn, setSortColumn] = useState("");

  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (columnId: string) => {
    if (columnId === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnId);
      setSortDirection("asc");
    }
  };

  //   const filteredData = items.filter((item) => {
  //     const itemValues = Object.values(item);
  //     const lowercaseFilterSupplies = filterSupplies.toLowerCase();
  //     const lowercaseSearchTerm = searchTerm.toLowerCase();

  //     return (
  //       itemValues.some((value) => {
  //         if (typeof value === "string" || typeof value === "number") {
  //           const lowercaseValue = String(value).toLowerCase();

  //           return lowercaseValue.includes(lowercaseSearchTerm);
  //         }

  //         if (value instanceof Date) {
  //           const dateString = dayjs(value).format("YYYY-MM-DD");
  //           const lowercaseDateString = dateString.toLowerCase();

  //           return lowercaseDateString.includes(lowercaseSearchTerm);
  //         }

  //         return false;
  //       }) &&
  //       (filterSupplies === "" ||
  //         Object.values(item).includes(lowercaseFilterSupplies))
  //     );
  //   });

  const sortedData = [...items].sort((a, b) => {
    const columnA = a[sortColumn as keyof typeof a];
    const columnB = b[sortColumn as keyof typeof a];

    if (columnA < columnB) {
      return sortDirection === "asc" ? -1 : 1;
    }

    if (columnA > columnB) {
      return sortDirection === "asc" ? 1 : -1;
    }

    return 0;
  });

  return (
    <div className="mt-8 text-gray-700 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-gray-50">
      <table className="table-auto w-full">
        <thead className="border-2 border-b-2 border-gray-300 border-b-black mx-4">
          <tr>
            {header.map((column, index) =>
              column.sort == true || column.sort ? (
                column.id != "" ? (
                  <th
                    key={index + "_" + column}
                    onClick={() => handleSort(column.id)}
                    className="cursor-pointer py-4 px-4 text-left font-semibold w-max text-xs uppercase whitespace-nowrap border-2 border-gray-300 border-b-black"
                  >
                    <div className="flex items-center gap-x-4 text-center">
                      {column.label}
                      {sortColumn === column.id && sortDirection === "asc" && (
                        <div className="flex flex-col -space-y-2">
                          <IconChevronUp size={16} className="text-[#394867]" />
                          <IconChevronDown
                            size={16}
                            className="text-slate-400 opacity-0"
                          />
                        </div>
                      )}
                      {sortColumn === column.id && sortDirection === "desc" && (
                        <div className="flex flex-col -space-y-2">
                          <IconChevronUp
                            size={16}
                            className="text-slate-400 opacity-0"
                          />
                          <IconChevronDown
                            size={16}
                            className="text-[#394867]"
                          />
                        </div>
                      )}
                      {sortColumn !== column.id && (
                        <div className="flex flex-col -space-y-2">
                          <IconChevronUp
                            size={16}
                            className="text-slate-400 opacity-60"
                          />
                          <IconChevronDown
                            size={16}
                            className="text-slate-400 opacity-60"
                          />
                        </div>
                      )}
                    </div>
                  </th>
                ) : (
                  <th className="py-4 px-4 font-semibold text-center w-40 text-xs uppercase whitespace-nowrap ">
                    Opsi
                  </th>
                )
              ) : (
                <th
                  key={index + "_" + column}
                  className="py-4 px-4 text-left font-semibold w-max text-xs uppercase whitespace-nowrap border-2 border-gray-300 border-b-black"
                >
                  {column.label}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className="text-sm font-medium divide-y divide-gray-300 border-b border-b-gray-300 [&_td]:whitespace-nowrap [&_td]:px-5 [&_td]:py-3 border-2  border-gray-300">
          {loading ? (
            <TableSkeleton col={header.length} row={5} />
          ) : items.length > 0 ? (
            sortedData.length > 0 ? (
              sortedData.map((item, index) => renderItem(item, index))
            ) : (
              <tr>
                <td colSpan={header.length + 1} className="text-center !py-16">
                  Data tidak ditemukan
                </td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan={header.length + 1} className="text-center !py-16">
                Tidak ada Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
