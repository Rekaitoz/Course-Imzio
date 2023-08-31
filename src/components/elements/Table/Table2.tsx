import { Select, TextInput } from "@mantine/core";
import TableSkeleton from "./TableSkeleton";
import {
  IconChevronUp,
  IconChevronDown,
  IconChevronsLeft,
  IconChevronLeft,
  IconChevronRight,
  IconChevronsRight,
  IconSearch,
} from "@tabler/icons-react";
import { dayjs } from "lib/dayjs";
import { useState } from "react";

interface Props {
  header: {
    id: string;
    label: string;
    sort?: boolean;
    formating?: string;
  }[];
  items: any[];
  searchTerm?: string;
  content?: any;
  renderItem: (item: any) => React.ReactNode;
  loading?: boolean;
  filter?: any;
}

const Table2 = ({
  header,
  items,
  content,
  renderItem,
  loading,
  filter,
}: Props) => {
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSupplies, setFilterSupplies] = useState("");

  const handleSort = (columnId: string) => {
    if (columnId === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnId);
      setSortDirection("asc");
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = items.filter((item) => {
    const itemValues = Object.values(item);
    const lowercaseFilterSupplies = filterSupplies.toLowerCase();
    const lowercaseSearchTerm = searchTerm.toLowerCase();

    return (
      itemValues.some((value) => {
        if (typeof value === "string" || typeof value === "number") {
          const lowercaseValue = String(value).toLowerCase();

          return lowercaseValue.includes(lowercaseSearchTerm);
        }

        if (value instanceof Date) {
          const dateString = dayjs(value).format("YYYY-MM-DD");
          const lowercaseDateString = dateString.toLowerCase();

          return lowercaseDateString.includes(lowercaseSearchTerm);
        }

        return false;
      }) &&
      (filterSupplies === "" ||
        Object.values(item).includes(lowercaseFilterSupplies))
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
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

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (value: string) => {
    setRowsPerPage(parseInt(value, 10));
    setPage(0);
  };

  const goToFirstPage = () => {
    setPage(0);
  };

  const goToLastPage = () => {
    setPage(Math.ceil(filteredData.length / rowsPerPage) - 1);
  };

  return (
    <>
      <div className="space-y-5 md:space-y-0 md:flex gap-x-2 mt-6">
        <div className="flex items-center gap-x-3">
          <span className="text-black text-opacity-50">Show</span>
          <Select
            className="font-medium w-24"
            placeholder=""
            value={rowsPerPage.toString()}
            styles={{ rightSection: { pointerEvents: "none" } }}
            data={["5", "10", "25", "50", "100"]}
            rightSection={
              <div className="border-l border-l-black border-opacity-30 pl-1">
                <IconChevronDown
                  className="text-black opacity-40 "
                  stroke={1}
                />
              </div>
            }
            onChange={(value) =>
              handleChangeRowsPerPage(value != null ? value : "5")
            }
          />
        </div>
        {filter && (
          <Select
            className="font-medium w-44"
            placeholder="Pilih Supplier"
            clearable
            styles={{ rightSection: { pointerEvents: "none" } }}
            data={filter}
            value={filterSupplies}
            onChange={(value) => setFilterSupplies(value != null ? value : "")}
            rightSection={
              <div className="border-l border-l-black border-opacity-30 pl-1">
                <IconChevronDown
                  className="text-black opacity-40 "
                  stroke={1}
                />
              </div>
            }
          />
        )}

        <TextInput
          className="font-medium w-48"
          placeholder="Search"
          onChange={handleSearch}
          styles={{ rightSection: { pointerEvents: "none" } }}
          rightSection={
            <div className="border-l border-l-black border-opacity-30 pl-1">
              <IconSearch
                size={20}
                className="text-black opacity-40 "
                stroke={1}
              />
            </div>
          }
        />
      </div>
      <div className="mt-8">{content}</div>
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
                        {sortColumn === column.id &&
                          sortDirection === "asc" && (
                            <div className="flex flex-col -space-y-2">
                              <IconChevronUp
                                size={16}
                                className="text-[#394867]"
                              />
                              <IconChevronDown
                                size={16}
                                className="text-slate-400 opacity-0"
                              />
                            </div>
                          )}
                        {sortColumn === column.id &&
                          sortDirection === "desc" && (
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
                sortedData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((item) => renderItem(item))
              ) : (
                <tr>
                  <td
                    colSpan={header.length + 1}
                    className="text-center !py-16"
                  >
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
      {/*  */}
      {!loading && items.length > 0 && (
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center">
            <div>
              <span className="mr-2">
                {page * rowsPerPage + 1} -{" "}
                {Math.min((page + 1) * rowsPerPage, filteredData.length)} dari{" "}
                {filteredData.length}
              </span>
            </div>
            <div className="space-x-1">
              <button
                disabled={page === 0}
                onClick={goToFirstPage}
                className="bg-white text-black-600 opacity-70 hover:bg-black-100  border border-black border-opacity-80 px-1.5 py-1 rounded disabled:opacity-30"
              >
                <IconChevronsLeft size={18} />
              </button>
              <button
                disabled={page === 0}
                onClick={() => handleChangePage(null, page - 1)}
                className="bg-white text-black-600 opacity-70 hover:bg-black-100  border border-black border-opacity-80 px-1.5 py-1 rounded disabled:opacity-30"
              >
                <IconChevronLeft size={18} />
                <span className="sr-only">Previous</span>
              </button>
              <button
                disabled={
                  page >= Math.ceil(filteredData.length / rowsPerPage) - 1
                }
                onClick={() => handleChangePage(null, page + 1)}
                className="bg-white text-black-600 opacity-70  hover:bg-black-100 border border-black border-opacity-80 px-1.5 py-1 rounded disabled:opacity-30"
              >
                <span className="sr-only">Next</span>
                <IconChevronRight size={18} />
              </button>
              <button
                disabled={
                  page >= Math.ceil(filteredData.length / rowsPerPage) - 1
                }
                onClick={goToLastPage}
                className="bg-white text-black-600 opacity-70 hover:bg-black-100  border border-black border-opacity-80 px-1.5 py-1 rounded disabled:opacity-30"
              >
                <IconChevronsRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Table2;
