import { Header } from "@/components/header";
import { Summary } from "@/components/summary";
import { SideBarMenu } from "@/components/side-bar-menu";
import { LastOrders } from "@/components/last-orders";
import { Grid } from "@/components/ui/grid";
import { TopPlateforms } from "@/components/top-plateforms";
import { SalesTrends } from "@/components/sales-trends";

export default function Home() {
  return (
    <main className="flex">
      <SideBarMenu />
      <div className=" md:grow w-auto max-w-full ">
        <Header />
        <div className="p-5 bg-[#FAFAFA] dark:bg-[#262626] space-y-5 font-plus">
          <h1 className="text-[1.25rem] font-semibold leading-[1.75rem] font-plus bm:hidden">
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
