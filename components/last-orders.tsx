import Image from "next/image";
import { Card } from "@/components/ui/card";
import documentDownload from "@/public/icons/document-download.svg";

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

const TABLE_DATA = [
  new tableData(1, face1, "Marcus Bergson", 80000, "Nov 15, 2023", "Paid"),
  new tableData(2, face2, "Marcus Bergson", 150000, "Nov 15, 2023", "Refund"),
  new tableData(3, face3, "Marcus Bergson", 87000, "Nov 14, 2023", "Paid"),
  new tableData(4, face4, "Marcus Bergson", 100000, "Nov 14, 2023", "Refund"),
  new tableData(5, face5, "Marcus Bergson", 78000, "Nov 13, 2023", "Paid"),
];

export const LastOrders = () => {
  return (
    <Card className="self-start">
      <div className="flex justify-between text-[1.125rem] font-jakarta leading-[1.635rem] mb-[0.875rem]">
        <h2 className="font-semibold text-[#26282C]">Last Orders</h2>
        <p className="font-medium text-[#34CAA5]">See All</p>
      </div>
      <div>
        <table className="font-jarkata text-base font-normal leading-6 w-full">
          <thead className="text-[#9CA4AB] font-medium text-start pb-5 ">
            <tr className="[&>th]:text-left [&>th]:font-medium  [&>th]:pt-3 [&>th]:pb-4 [&>th]:border-b">
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody className="[&>tr:not(:last-child)]:border-b">
            {TABLE_DATA.map((data) => (
              <tr className="[&>td]:pt-3 [&>td]:pb-4 " key={data.id}>
                <td className="">
                  <div className="flex items-center gap-x-[0.625rem] font-medium text-[#3A3F51]">
                    <div>
                      <Image {...data.image} alt="" className="rounded-full" />
                    </div>
                    <p>{data.name}</p>
                  </div>
                </td>
                <td className="text-[#737373]">
                  <span>{data.date}</span>
                </td>
                <td className="font-medium">
                  <span>${data.amount.toLocaleString()}</span>
                </td>
                <td  style={{color: data.status === 'Paid'?'#34CAA5': '#ED544E'}}>
                  <span>{data.status}</span>
                </td>
                <td>
                  <div className="flex gap-[0.37rem] items-center text-[#0D062D]">
                    <Image src={documentDownload} alt="download icon" />
                    <span>View</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
