import bulk from "@/public/icons/3d-rotate.svg";
import png from "@/public/faces/1.png";

export  class TableData {
  constructor(
    public id: number,
    public image: typeof png,
    public name: string,
    public amount: number,
    public date: string,
    public status: "Paid" | "Refund"
  ) {}
}


export class DataSummary {
  constructor(
    public id: number,
    public chart: typeof bulk,
    public icon: typeof png | typeof bulk,
    public name: string,
    public amount: number | string,
    public financial: "profit" | "loss",
    public percent: number
  ) {}
}