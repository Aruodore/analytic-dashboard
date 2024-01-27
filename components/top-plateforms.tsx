import Image from "next/image";
import { Card } from "@/components/ui/card";
import documentDownload from "@/public/icons/document-download.svg";

class DataPlateform {
  constructor(
    public id: number,
    public name: string,
    public amount: number | string,
    public color: string,
    public percent: number,
    public increase: number
  ) {}
}

const PLATEFORM_DATA = [
  new DataPlateform(1, "Book Bazaar", 2500000, "#6160DC", 54.2, 15),
  new DataPlateform(2, "Artisan Aisle", 1800000, "#54C5EB", 45.2, 10),
  new DataPlateform(3, "Toy Troop", 1200000, "#FFB74A", 26.78, 8),
  new DataPlateform(4, "XStore", 600000, "#FF4A55", 26.78, 5),
];

export const TopPlateforms = () => {
  return (
    <Card className="">
      <div className="flex justify-between text-[1.125rem] font-jakarta leading-[1.635rem] mb-[0.875rem]">
        <h2 className="font-semibold text-[#26282C]  dark:text-white">
          Top Platform
        </h2>
        <p className="font-medium text-[#34CAA5]">See All</p>
      </div>
      <div>
        <ul className="space-y-4 md:space-y-5">
          {PLATEFORM_DATA.map((data) => (
            <li className="space-y-3 md:space-y-4" key={data.id}>
              <h2 className="font-semibold text-[#26282C] dark:text-white">{data.name}</h2>
              <span className="inline-block h-3 rounded-full dark:bg-[#262626] bg-[#F5F5F5] w-full">
                <span
                  className="h-full block rounded-full"
                  style={{ background: data.color, width: data.percent + "%" }}
                ></span>
              </span>
              <div className="flex justify-between text-[#525252] dark:text-white font-jakarta text-[1.125rem] leading-[1.625rem] ">
                <p>${data.amount.toLocaleString()}</p>
                <p>+{data.increase}%</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
