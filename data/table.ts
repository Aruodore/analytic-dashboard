import face1 from "@/public/faces/2.png";
import face2 from "@/public/faces/3.png";
import face3 from "@/public/faces/4.png";
import face4 from "@/public/faces/5.png";
import face5 from "@/public/faces/6.png";

class tableData {
  constructor(
    public id: number,
    public image: typeof face1,
    public name: string,
    public amount: number,
    public date: string,
    public status: "Paid" | "Refund"
  ) {}
}

export const TABLE_DATA = [
  new tableData(1, face1, "Marcus Bergson", 80000, "Nov 15, 2023", "Paid"),
  new tableData(2, face2, "Marcus Bergson", 150000, "Nov 15, 2023", "Refund"),
  new tableData(3, face3, "Marcus Bergson", 87000, "Nov 14, 2023", "Paid"),
  new tableData(4, face4, "Marcus Bergson", 100000, "Nov 14, 2023", "Refund"),
  new tableData(5, face5, "Marcus Bergson", 78000, "Nov 13, 2023", "Paid"),
];
