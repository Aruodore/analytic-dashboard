import { ChartBar } from "./chart-bar";

const months = [
  {
    name: "Jan",
    height: "4.25rem",
    label: "$10,000",
  },
  {
    name: "Feb",
    height: "7.5rem",
    label: "$17,000",
  },
  {
    name: "Mar",
    height: "2.5rem",
    label: "$5,000",
  },
  {
    name: "Apr",
    height: "10.0625rem",
    label: "$25,000",
  },
  {
    name: "May",
    height: "5.0625rem",
    label: "$10,000",
  },
  {
    name: "Jun",
    height: "13.5rem",
    label: "$45,000",
  },
  {
    name: "Jul",
    height: "5.0625rem",
    label: "$10,000",
  },
  {
    name: "Aug",
    height: "8.1875rem",
    label: "$20,000",
  },
  {
    name: "Sep",
    height: "11.375rem",
    label: "$35,000",
  },
  {
    name: "Oct",
    height: "3.1875rem",
    label: "$10,000",
  },
  {
    name: "Nov",
    height: "10.6875rem",
    label: "$34,000",
  },
  {
    name: "Dec",
    height: "9.4375rem",
    label: "$32,000",
  },
];

export const Chart = () => {
  return (
    <table className="w-full  text-xs font-semibold">
      <tr>
        <th rowSpan={9} className=" sticky left-0  ">
          <ul className="flex flex-col justify-between gap-y-8 pr-9 dark:text-white text-[#525252] ">
            <li>50.00</li>
            <li>40.00</li>
            <li>30.00</li>
            <li>20.00</li>
            <li>10.00</li>
            <li>0.00</li>
          </ul>
        </th>
      </tr>
      <tr className="border-y border-dashed border-[#EAEAEA] ">
        {Array.from(new Array(12)).map((el, i) => (
          <td key={i}></td>
        ))}
      </tr>
      <tr className="border-y border-dashed border-[#EAEAEA] ">
        {Array.from(new Array(12)).map((el, i) => (
          <td key={i}></td>
        ))}
      </tr>
      <tr className="border-y border-dashed border-[#EAEAEA] ">
        {Array.from(new Array(12)).map((el, i) => (
          <td key={i}></td>
        ))}
      </tr>
      <tr className="border-y border-dashed border-[#EAEAEA] ">
        {Array.from(new Array(12)).map((el, i) => (
          <td key={i}></td>
        ))}
      </tr>
      <tr className="border-y border-dashed border-[#EAEAEA] ">
        {Array.from(new Array(12)).map((el, i) => (
          <td key={i}></td>
        ))}
      </tr>
      <tr className="border-y border-dashed border-[#EAEAEA] ">
        {Array.from(new Array(12)).map((el, i) => (
          <td key={i}></td>
        ))}
      </tr>
      <tr className="border-y border-dashed border-[#EAEAEA] ">
        {Array.from(new Array(12)).map((el, i) => (
          <td key={i}></td>
        ))}
      </tr>
      <tr className="border-y border-dashed border-[#EAEAEA] ">
        {Array.from(new Array(12)).map((el, i) => (
          <td key={i}></td>
        ))}
      </tr>
      <tr className="[&>td]:pt-3 [&>td]:w-fit [&>td]:pl-1 dark:text-white text-[#525252]  [&>td:not(:last-child)]:pr-[1.675rem] leading-[1.375rem]">
        <td></td>
        {months.map(({ name, height, label }, i) => (
          <td key={i} className="relative">
            {name} <ChartBar height={height} label={label} />
          </td>
        ))}
      </tr>
    </table>
  );
};
