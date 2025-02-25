import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router";
import logo from "../../../assets/images/logo.svg";
import MobileNav from "../MoileNav";

const DashboardNav = () => {
  return (
    <>
    <nav className="bg-white hidden lg:flex flex-col px-4 py-10 w-1/4 max-w-80 items-center h-screen">
      <figure className="w-full max-w-24 mb-10">
        <img src={logo} alt="Logo" />
      </figure>
      <ul className="flex flex-col justify-between w-full h-full">
        <div className="flex flex-col gap-3 items-center w-full">
          <li className="w-full">
            <NavLink to="/" className={({ isActive }: { isActive: boolean }) => (`${ isActive ? "bg-secondary text-white" : "text-secondary border-secondary bg-transparent" } w-full p-3 px-3 flex gap-4 items-center justify-start border rounded-lg`)}>
              <IoIosArrowBack size={20} />
              <p>Dashboard</p>
            </NavLink>
          </li>

          <li className="w-full">
            <NavLink to="/schedule" className={({ isActive }: { isActive: boolean }) => (`${ isActive ? "bg-secondary text-white" : "text-secondary border-secondary bg-transparent" } w-full p-3 px-3 flex gap-4 items-center justify-start border rounded-lg`)}>
              <IoIosArrowBack size={20} />
              <p>Meeting Schedule</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/meetingnotes" className={({ isActive }: { isActive: boolean }) => (`${ isActive ? "bg-secondary text-white" : "text-secondary border-secondary bg-transparent" } w-full p-3 px-3 flex gap-4 items-center justify-start border rounded-lg`)}>
              <IoIosArrowBack size={20} />
              <p>Meeting Notes</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/history" className={({ isActive }: { isActive: boolean }) => (`${ isActive ? "bg-secondary text-white" : "text-secondary border-secondary bg-transparent" } w-full p-3 px-3 flex gap-4 items-center justify-start border rounded-lg`)}>
              <IoIosArrowBack size={20} />
              <p>Questionnaire History</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/metrics" className={({ isActive }: { isActive: boolean }) => (`${ isActive ? "bg-secondary text-white" : "text-secondary border-secondary bg-transparent" } w-full p-3 px-3 flex gap-4 items-center justify-start border rounded-lg`)}>
              <IoIosArrowBack size={20} />
              <p>Performance Metrics</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/manager" className={({ isActive }: { isActive: boolean }) => (`${ isActive ? "bg-secondary text-white" : "text-secondary border-secondary bg-transparent" } w-full p-3 px-3 flex gap-4 items-center justify-start border rounded-lg`)}>
              <IoIosArrowBack size={20} />
              <p>File Manager</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/support" className={({ isActive }: { isActive: boolean }) => (`${ isActive ? "bg-secondary text-white" : "text-secondary border-secondary bg-transparent" } w-full p-3 px-3 flex gap-4 items-center justify-start border rounded-lg`)}>
              <IoIosArrowBack size={20} />
              <p>Chat Support</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/subscription" className={({ isActive }: { isActive: boolean }) => (`${ isActive ? "bg-secondary text-white" : "text-secondary border-secondary bg-transparent" } w-full p-3 px-3 flex gap-4 items-center justify-start border rounded-lg`)}>
              <IoIosArrowBack size={20} />
              <p>Subscription</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/settings" className={({ isActive }: { isActive: boolean }) => (`${ isActive ? "bg-secondary text-white" : "text-secondary border-secondary bg-transparent" } w-full p-3 px-3 flex gap-4 items-center justify-start border rounded-lg`)}>
              <IoIosArrowBack size={20} />
              <p>Settings</p>
            </NavLink>
          </li>

        </div>
          <li className="w-full">
            <NavLink to="/login" className={({ isActive }: { isActive: boolean }) => (`${ isActive ? "bg-secondary text-white" : "text-secondary border-secondary bg-transparent" } w-full p-3 px-3 flex gap-4 items-center justify-start border rounded-lg`)}>
              <IoIosArrowBack size={20} />
              <p>Logout</p>
            </NavLink>
          </li>
      </ul>
    </nav>

    <MobileNav />
    </>
  )
}

export default DashboardNav;
