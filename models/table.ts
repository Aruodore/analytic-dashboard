import face1 from "@/public/faces/2.png";

export default class tableData {
  constructor(
    public id: number,
    public image: typeof face1,
    public name: string,
    public amount: number,
    public date: string,
    public status: "Paid" | "Refund"
  ) {}
}
