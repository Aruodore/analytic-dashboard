import { SUMMARY_DATA } from "@/data/summary";

import { SummaryItem } from "@/components/summary-item";
import { SummaryCarousel } from "@/components/summary-carousel";

export const Summary = () => {
  return (
    <div>
      <div className=" hidden md:grid grid-cols-2 gap-4 max-md:order-0 ">
        {SUMMARY_DATA.map((data) => (
          <SummaryItem data={data} />
        ))}
      </div>
      <SummaryCarousel/>
    </div>
  );
};
