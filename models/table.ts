import png from "@/public/faces/1.png";

export default class tableData {
  constructor(
    public id: number,
    public image: typeof png,
    public name: string,
    public amount: number,
    public date: Date,
    public status: "Paid" | "Refund"
  ) {}
}
