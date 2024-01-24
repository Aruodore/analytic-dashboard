import Image from "next/image";

import { Card } from "@/components/ui/card";

import box from "@/public/icons/box-tick.png";
import bulk from "@/public/icons/3d-rotate.svg";
import cart from "@/public/icons/shopping-cart.svg";
import coin from "@/public/icons/coin.svg";

import downArrow from "@/public/charts/3.png";
import upArrow from "@/public/charts/4.png";

import greenChart from "@/public/charts/1.svg";
import redChart from "@/public/charts/2.png";

class DataSummary {
  constructor(
    public id: number,
    public chart: typeof greenChart,
    public icon: typeof box| typeof bulk,
    public name: string,
    public amount: number|string,
    public financial: 'profit'|'loss',
    public percent: number
  ) {}
}

const SUMMARY_DATA = [
  new DataSummary(1, greenChart, box, "Total Order", 350, "profit", 23.5),
  new DataSummary(2, redChart, bulk, "Total Refund", 270, "loss", 23.5),
  new DataSummary(3, redChart, box, "Average Sales", 1567, "loss", 23.5),
  new DataSummary(
    4,
    greenChart,
    coin,
    "Total Income",
    "$350.000",
    "profit",
    23.5
  ),
];


export const Summary = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {SUMMARY_DATA.map((data) => (
        <Card className="space-y-[10px]" key={data.id}>
          <div className="flex justify-between items-center">
            <span className="p-[11px] rounded-full border border-[#DADDDD]">
              <Image
                width={box.width}
                height={box.height}
                alt="box"
                src={box}
              />
            </span>
            <Image src={data.chart} alt="" />
          </div>
          <div>
            <p>{data.name}</p>
            <h3>{data.amount}</h3>
          </div>
          <div className="flex">
            <div
              style={{
                color: data.financial === "profit" ? "#34CAA5" : "#ED544E",
                background:
                  data.financial === "profit"
                    ? "rgba(52,202,165,0.12)"
                    : "rgba(237, 84, 78, 0.12)",
              }}
              className="rounded-full flex items-center font-medium text-xs py-1 px-2"
            >
              <Image
                src={data.financial === "profit" ? upArrow : downArrow}
                alt=""
              />{" "}
              <span>{data.percent}%</span>
            </div>
            <p>vs. previous month</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
