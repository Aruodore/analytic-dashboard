"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SortSelect({ trigger, getValue }: { trigger: React.ReactNode, getValue:(val:string)=>void }) {
  const [position, setPosition] = React.useState("Weekly");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 dark:bg-[#171717]">
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={(value) => {
            setPosition(value);
            getValue(value);
          }}
        >
          <DropdownMenuRadioItem value="Daily">Daily</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Weekly">Weekly</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Monthly">Monthly</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
