import Image from "next/image";

import { Card } from "@/components/ui/card";

import { DataSummary } from "@/models";

import downArrow from "@/public/charts/3.png";
import upArrow from "@/public/charts/4.png";

export const SummaryItem= ({data}:{data:DataSummary}) => {
    return (
      <Card className="space-y-[10px]" key={data.id}>
        <div className="flex justify-between items-center">
          <span className="p-[11px] rounded-full border border-[#DADDDD]">
            <Image alt="box" src={data.icon} />
          </span>
          <Image src={data.chart} alt="" />
        </div>
        <div>
          <p className="text-[1.125rem] text-[#898989] font-medium leading-[1.635rem] ">
            {data.name}
          </p>
          <h3 className="font-semibold text-2xl ">{data.amount}</h3>
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
    );
}