'use client'
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import { DocumentDownload } from "@/components/ui/icons/document-download";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TableData } from "@/models";
import { TABLE_DATA } from "@/data/table";

const obj = {...TABLE_DATA[0]}

type DataType = typeof obj

export function OrderDetails({ data}:{data:DataType}) {
  const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <span className="flex gap-[0.37rem] items-center dark:text-white text-[#0D062D]">
            <DocumentDownload className="dark:text-white" />
            <span>View</span>
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]  dark:bg-[#171717]">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>
              This is the details of your order.
            </DialogDescription>
          </DialogHeader>
          <Invoice data={data} />
          <DialogFooter>
            <Button>Download</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <span className="flex gap-[0.37rem] items-center dark:text-white text-[#0D062D]">
          <DocumentDownload className="dark:text-white" />
          <span>View</span>
        </span>
      </DrawerTrigger>
      <DrawerContent className=" dark:bg-[#171717]">
        <DrawerHeader className="text-left">
          <DrawerTitle>Order Details</DrawerTitle>
          <DrawerDescription>
            This is the details of your order.
          </DrawerDescription>
        </DrawerHeader>
        <Invoice data={data} className="px-4" />
        <DrawerFooter className="pt-2 flex justify-between">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button variant="outline">Download</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function Invoice({ className, data }: {className?:string, data:DataType}) {
  return (
    <div className={cn("space-y-4", className)}>
      <p className="flex justify-between">
        <span>Name:</span> <span>{data.name}</span>
      </p>
      <p className="flex justify-between">
        <span>Date:</span> <span>{data.date}</span>
      </p>
      <p className="flex justify-between">
        <span>Amount:</span> <span>${data.amount.toLocaleString()}</span>
      </p>
      <p className="flex justify-between">
        <span>Status:</span> <span>{data.status}</span>
      </p>
    </div>
  );
}
