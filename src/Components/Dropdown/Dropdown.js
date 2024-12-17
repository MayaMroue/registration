import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronsUpDown, File, ListFilter } from "lucide-react";
import "./Dropdown.scss";

function Dropdown({ title, subTitle, data, selected, setSelected }) {
  return (
    <div className="ml-auto flex items-center gap-2 w-full">
      <DropdownMenu className="w-full">
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-11 text-sm px-4 flex justify-between gap-2 focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-hoverBg text-nowrap w-full"
          >
            <span className=" text-black font-semibold text-nowrap w-full">
              {title}
            </span>
            <ChevronsUpDown color="var(--accent)" size={"1.2rem"} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-full">
          {subTitle && (
            <>
              <DropdownMenuLabel>{subTitle}</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          )}
          {data?.map((item) => (
            <DropdownMenuCheckboxItem
              key={item}
              onClick={() => setSelected(item)}
              checked={selected === item}
              className="w-full"
            >
              {item}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Dropdown;
