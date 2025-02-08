import CategoryLayout from "../Components/CategoryLayout"
import DashboardNav from "../Components/Dashboard/DashboardNav"

const Dashboard = () => {
  return (
    <div className="flex flex-row gap-0 w-full">
      <DashboardNav />

      <div className="flex flex-col gap-0 w-full bg-blue_fade">
        <CategoryLayout />
      </div>
    </div>
  )
}

export default Dashboard
