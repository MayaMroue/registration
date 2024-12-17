import React from "react";
import "./Pagination.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({
  limit,
  offset,
  setOffset,
  pageNumber,
  setPageNumber,
  hasPrev,
  hasNext,
  count, 
  className
}) {
  const totalPages = Math.ceil(count / limit) ? Math.ceil(count / limit) : 1;

  return (
    <div className={"paginationContainer " +className}>
      {hasPrev && (
        <ChevronLeft
          onClick={() => {
            setOffset(offset - limit);
            setPageNumber(pageNumber - 1);
          }} 
          className="PaginationButton "
        />
      )}

      <span className="text-base">Page {pageNumber} of {totalPages}</span>
      {hasNext && (
        <ChevronRight
          onClick={() => {
            setOffset(offset + limit);
            setPageNumber(pageNumber + 1);
          }}
          className="PaginationButton"
        />
      )}
    </div>
  );
}

export default Pagination;
