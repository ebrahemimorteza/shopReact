import { useEffect } from "react";
import { setChartDashbord } from "../../util/dashboardChart";
import Cart from "./Cart";
import ProductTable from "./productTable";

const Dashboard = () => {
    useEffect(()=>{
        
    const labels = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
//setChartDashbord(labels,datapoints)
    },[])
    return ( 
        <>
        <div id="dashboard_section" class="dashboard_section main_section">
        <div className="row">
        <Cart currentValue={"7"} title={"سبد خرید امروز"} desc={"سبدهی خرید مانده امروز"} lastWeekValue={"23"} lastMonthWeek={"40"} icon={"fas fa-shopping-basket"} />
        <Cart currentValue={"7"} title={"سبد خرید امروز"} desc={"سبدهی خرید مانده امروز"} lastWeekValue={"23"} lastMonthWeek={"40"} icon={"fas fa-dolly"} />
        <Cart currentValue={"7"} title={"سبد خرید امروز"} desc={"سبدهی خرید مانده امروز"} lastWeekValue={"23"} lastMonthWeek={"40"} icon={"fas fa-luggage-cart"} />
        <Cart currentValue={"7"} title={"سبد خرید امروز"} desc={"سبدهی خرید مانده امروز"} lastWeekValue={"23"} lastMonthWeek={"40"} icon={"fas fa-money-check-alt"} />
      

    
        <div class="row">
<ProductTable/>


<div class="col-12 col-lg-6">
    <canvas id="myChart" height="195"></canvas>
</div>

</div>

    </div>
    </div>
        </>
     );
}
 
export default Dashboard;