import { Card } from "@/components/ui/card";
import { SalesDatePicker } from "./sales-date-picker";
import { Chart } from "@/components/chart";

export const SalesTrends = () => {
  return (
    <Card className="w-full max-md:order-2">
      <div className="flex justify-between text-[1.125rem] font-jakarta leading-[1.635rem] mb-[0.875rem]">
        <h2 className="font-semibold text-[#26282C]">Sales Trends</h2>
        <div className="flex items-center gap-[0.625rem]">
          <label htmlFor="" className="text-[#3A3F51]">
            Short by :
          </label>
          <SalesDatePicker />
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <Chart />
      </div>
    </Card>
  );
};
