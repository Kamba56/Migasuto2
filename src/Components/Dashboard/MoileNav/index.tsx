import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router";

const MobileNav = () => {
  const [ activeNav, setActive ] = useState(false);

  const openNav = () => {
    setActive(true);
  };

  const closeNav = () => {
    setActive(false);
  };
  return (

    <nav className="bg-white lg:hidden flex flex-col px-4 pb-10 pt-2 w-full max-w-80 items-center h-screen absolute top-0
     left-0">
      {!activeNav && <button onClick={openNav} className="w-fit block self-start">
        <RxHamburgerMenu size={24} />
      </button>}


      { activeNav && <div className="w-full h-screen pt-14">
      <button className="absolute top-4 right-0" onClick={closeNav}>
        <IoCloseOutline size={30} />
      </button>
      
      <ul className="flex flex-col justify-between w-full h-full">
        <div className="flex flex-col gap-3 items-center w-full">
          <li className="w-full">
            <NavLink to="/" className={`w-full p-3 px-3 flex gap-4 items-center justify-star border rounded-lg ${({ isActive }: { isActive: boolean }) => ( isActive ? "bg-secondary text-white" : " text-secondary border-secondary bg-transparent" )}`}>
              <IoIosArrowBack size={20} />
              <p>Dashboard</p>
            </NavLink>
          </li>

          <li className="w-full">
            <NavLink to="/" className={`w-full p-3 px-3 flex gap-4 items-center justify-star border rounded-lg ${({ isActive }: { isActive: boolean }) => ( isActive ? "bg-secondary text-white" : " text-secondary border-secondary bg-transparent" )}`}>
              <IoIosArrowBack size={20} />
              <p>Meeting Schedule</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/" className={`w-full p-3 px-3 flex gap-4 items-center justify-star border rounded-lg ${({ isActive }: { isActive: boolean }) => ( isActive ? "bg-secondary text-white" : " text-secondary border-secondary bg-transparent" )}`}>
              <IoIosArrowBack size={20} />
              <p>Meeting Notes</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/" className={`w-full p-3 px-3 flex gap-4 items-center justify-star border rounded-lg ${({ isActive }: { isActive: boolean }) => ( isActive ? "bg-secondary text-white" : " text-secondary border-secondary bg-transparent" )}`}>
              <IoIosArrowBack size={20} />
              <p>Questionnaire History</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/" className={`w-full p-3 px-3 flex gap-4 items-center justify-star border rounded-lg ${({ isActive }: { isActive: boolean }) => ( isActive ? "bg-secondary text-white" : " text-secondary border-secondary bg-transparent" )}`}>
              <IoIosArrowBack size={20} />
              <p>Performance Metrics</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/" className={`w-full p-3 px-3 flex gap-4 items-center justify-star border rounded-lg ${({ isActive }: { isActive: boolean }) => ( isActive ? "bg-secondary text-white" : " text-secondary border-secondary bg-transparent" )}`}>
              <IoIosArrowBack size={20} />
              <p>File Manager</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/" className={`w-full p-3 px-3 flex gap-4 items-center justify-star border rounded-lg ${({ isActive }: { isActive: boolean }) => ( isActive ? "bg-secondary text-white" : " text-secondary border-secondary bg-transparent" )}`}>
              <IoIosArrowBack size={20} />
              <p>Chat Support</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/" className={`w-full p-3 px-3 flex gap-4 items-center justify-star border rounded-lg ${({ isActive }: { isActive: boolean }) => ( isActive ? "bg-secondary text-white" : " text-secondary border-secondary bg-transparent" )}`}>
              <IoIosArrowBack size={20} />
              <p>Subscription</p>
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/" className={`w-full p-3 px-3 flex gap-4 items-center justify-star border rounded-lg ${({ isActive }: { isActive: boolean }) => ( isActive ? "bg-secondary text-white" : " text-secondary border-secondary bg-transparent" )}`}>
              <IoIosArrowBack size={20} />
              <p>Settings</p>
            </NavLink>
          </li>

        </div>
          <li className="w-full">
            <NavLink to="/" className={`w-full p-3 px-3 flex gap-4 items-center justify-star border rounded-lg ${({ isActive }: { isActive: boolean }) => ( isActive ? "bg-secondary text-white" : " text-secondary border-secondary bg-transparent" )}`}>
              <IoIosArrowBack size={20} />
              <p>Logout</p>
            </NavLink>
          </li>
      </ul>
      </div>}
    </nav>
  )
}

export default MobileNav;
