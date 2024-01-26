import { SUMMARY_DATA } from "../data/summary";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SummaryItem } from "@/components/summary-item";

export const SummaryCarousel = () => {
  return (
    <Carousel
      className="md:hidden"
      opts={{
        dragFree: true,
      }}
    >
      <CarouselContent>
        {SUMMARY_DATA.map((data) => (
          <CarouselItem className="w-[17rem] basis-[none]">
            <SummaryItem data={data} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
