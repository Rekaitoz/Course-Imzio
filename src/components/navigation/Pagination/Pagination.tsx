import { usePagination } from "@mantine/hooks";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { Metadata } from "types/navigation";
import Pager from "./Pager";

interface Props {
  metadata: Metadata;
  onPageClick: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ metadata, onPageClick }) => {
  const { total, limit, page, count } = metadata;
  const pageCount = Math.ceil(total / limit);
  const hasPrev = page != 1;
  const hasNext = page < pageCount;
  const lowRange = limit * (page - 1) + 1;
  const highRange = limit * page - (limit - count);
  const { range, active } = usePagination({
    page: metadata.page,
    total: pageCount,
  });

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => {
            if (hasPrev) onPageClick(page - 1);
          }}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (hasNext) onPageClick(page + 1);
          }}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{lowRange}</span> to{" "}
            <span className="font-medium">{highRange}</span> of{" "}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() => {
                if (hasPrev) onPageClick(page - 1);
              }}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <IconChevronLeft aria-hidden="true" />
            </button>

            {range.map((i) => (
              <Pager
                key={i}
                page={i}
                active={active == i}
                onClick={onPageClick}
              />
            ))}

            <button
              onClick={() => {
                if (hasNext) onPageClick(page + 1);
              }}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <IconChevronRight aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
