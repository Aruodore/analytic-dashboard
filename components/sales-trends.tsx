import { Card } from "@/components/ui/card";
import { SalesSelect } from "./sales-select";
import { Chart } from "@/components/chart";

export const SalesTrends = () => {
  return (
    <Card className="w-full max-md:order-2">
      <div className="flex justify-between text-[1.125rem] font-jakarta leading-[1.635rem] items-center mb-[0.875rem]">
        <h2 className="font-semibold text-[#26282C] leading-[none] dark:text-white">Sales Trends</h2>
        <div className="flex items-center gap-2  md:gap-[0.625rem] max-sm:text-sm">
          <label htmlFor="" className="text-[#3A3F51]  dark:text-white items-center ">
            Short by :
          </label>
          <SalesSelect />
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <Chart />
      </div>
    </Card>
  );
};
