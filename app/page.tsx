import { Header } from "@/components/header";
import { Summary } from "@/components/summary";
import { SideBarMenu } from "@/components/side-bar-menu";
import { LastOrders } from "@/components/last-orders";
import { Grid } from "@/components/ui/grid";
import { TopPlateforms } from "@/components/top-plateforms";
import { SalesTrends } from "@/components/sales-trends";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", '600', '700', '200', '300', '400'] });

export default function Home() {
  return (
    <main className="flex">
      <SideBarMenu />
      <div className={" md:grow w-auto max-w-full "+ plus.className}>
        <Header />
        <div className={"p-5 bg-[#FAFAFA] dark:bg-[#262626] space-y-5 font-plus "+ plus.className}>
          <h1 className="text-[1.25rem] font-semibold leading-[1.75rem] bm:hidden">
            Dashboard
          </h1>
          <Grid className="max-md:flex max-md:flex-col gap-y-6">
            <SalesTrends />
            <Summary />
          </Grid>
          <Grid className="max-md:flex max-md:flex-col  gap-y-6">
            <LastOrders />
            <TopPlateforms />
          </Grid>
        </div>
      </div>
    </main>
  );
}
