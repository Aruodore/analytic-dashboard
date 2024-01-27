import Image from "next/image";
import { Card } from "@/components/ui/card";
import { TABLE_DATA } from "@/data/table";

import { OrderDetails } from "./ui/modal";


export const LastOrders = () => {
  return (
    <Card className="self-start w-full">
      <div className="w-full overflow-x-auto">
        <div className="flex justify-between text-[1.125rem] font-jakarta leading-[1.635rem] mb-[0.875rem]">
          <h2 className="font-semibold text-[#26282C] dark:text-white">
            Last Orders
          </h2>
          <p className="font-medium text-[#34CAA5]">See All</p>
        </div>
        <div className=" overflow-x-auto w-full">
          <table className="font-jarkata text-sm md:text-base font-normal leading-6  min-w-[45rem] w-full">
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
                    <div className="flex items-center gap-x-[0.625rem] font-medium dark:text-white text-[#3A3F51]">
                      <div>
                        <Image
                          {...data.image}
                          alt=""
                          className="rounded-full"
                        />
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
                  <td
                    style={{
                      color: data.status === "Paid" ? "#34CAA5" : "#ED544E",
                    }}
                  >
                    <span>{data.status}</span>
                  </td>
                  <td>
                    <OrderDetails
                      key={data.name}
                      data={{...data}}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};
