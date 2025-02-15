import { Outlet } from "react-router"
import CategoryLayout from "../Components/CategoryLayout"
import DashboardNav from "../Components/Dashboard/DashboardNav"

const Dashboard = () => {
  return (
    <div className="flex flex-row gap-0 w-full">
      <DashboardNav />

      <div className="flex flex-col gap-0 w-full bg-blue_fade h-screen overflow-auto">
        <CategoryLayout />
        <div className="px-2 md:px-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
