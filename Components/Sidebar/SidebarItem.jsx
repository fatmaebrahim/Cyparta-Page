import React from "react";
import {Dashboard, Payment,Payroll} from "../../public/icons/icons";
export default function SidebarItem({ index, label }) {
  const svgs = [
    <Dashboard/>,
    <Payroll/>,
    <Payment/>
  ];

  return (
    <div className="my-[16px] rounded-tr-[25px] rounded-br-[25px] hover:border-l-[5px] hover:border-[#EE232F] flex flex-row justify-center items-center pr-10 w-full h-[53px] hover:bg-[#F9EAEB] duration-300 group hover:cursor-pointer">
      {svgs[index]}

      <span className="absolute left-[100px] ml-[19px] text-[#242223]  group-hover:text-[#EE232F] font-lexend text-[16px] font-medium pb-2 transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}
