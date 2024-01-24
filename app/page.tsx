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
      <div className="grow">
        <Header />
        <div className="p-5 bg-[#FAFAFA] space-y-5">
          <Grid>
            <SalesTrends/>
            <Summary />
          </Grid>
          <Grid>
            <LastOrders />
            <TopPlateforms />
          </Grid>
        </div>
      </div>
    </main>
  );
}
