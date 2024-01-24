import Image from "next/image";

import arrow from "@/public/icons/arrow.svg";
import { Card } from "@/components/ui/card";

export const SalesTrends = () => {
  return (
    <Card>
      <div className="flex justify-between text-[1.125rem] font-jakarta leading-[1.635rem] mb-[0.875rem]">
        <h2 className="font-semibold text-[#26282C]">Sales Trends</h2>
        <div className="flex items-center gap-[0.625rem]">
          <label htmlFor="">Short by : </label>
          <div className="px-3 py-[0.375rem] rounded-full border border-[#DADDDD] flex gap-[0.625rem]">
            <div className="text-right">
              <span>Weekly</span>
            </div>
            <Image width={20} height={20} alt="arrow" src={arrow} />
          </div>
        </div>
      </div>
    </Card>
  );
};
