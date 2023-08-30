import { useState } from "react";
import control from 'assets/control.png'
import logo from 'assets/logo.png'
import Chart_fill from 'assets/Chart_fill.png'
import Chat from 'assets/Chat.png'
import User from 'assets/User.png'
import Calendar from 'assets/Calendar.png'
import Search from 'assets/Search.png'
import Chart from 'assets/Chart.png'
import Folder from 'assets/Folder.png'
import Setting from 'assets/Setting.png'

import logout from "assets/svg/logout.svg"


import { Link } from "react-router-dom"
 
const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ];

  return (
    <div className={` ${open ? "w-72" : "w-20 "} bg-primary-600 h-screen p-5  pt-8 relative duration-300`} >
      <img alt="" src={control} className={`absolute cursor-pointer -right-3 top-9 w-7 border-primary-600 border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
      <div className="flex gap-x-4 items-center">
        <img alt="" src={logo} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
        <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0" }`} >
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li key={index} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-200 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white" } `} >
            <img alt="" src={Menu.src} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
        <Link to="/" className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-200 text-sm items-center gap-x-4 ${true ? "mt-20" : "mt-2"} `} >
            <img alt="" src={logout} className="h-7 w-7" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Logout
            </span>
        </Link>
      </ul>
    </div>
  );
};
export default App;
