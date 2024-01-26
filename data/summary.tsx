import { DataSummary } from "@/models";

import box from "@/public/icons/box-tick.png";
import bulk from "@/public/icons/3d-rotate.svg";
import cart from "@/public/icons/shopping-cart.svg";
import coin from "@/public/icons/coin.svg";

import greenChart from "@/public/charts/1.svg";
import redChart from "@/public/charts/2.png";



export const SUMMARY_DATA = [
  new DataSummary(1, greenChart, box, "Total Order", 350, "profit", 23.5),
  new DataSummary(2, redChart, bulk, "Total Refund", 270, "loss", 23.5),
  new DataSummary(3, redChart, cart, "Average Sales", 1567, "loss", 23.5),
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