import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import Dropdown from "../Dropdownmenu/Dropdown";

export default function Sidebar() {
  
  const dropmenuItems = [
    { href:"/employees/profile", label: "Profile" },
    { href:"/employees/profile", label: "Attendance" },
    { href:"/employees/profile",label: "Task" },
   
  ];
  return (
    <div className="bg-[#F8F8F8] w-[329px] h-[943px] top-[41px] left-[28px]  absolute rounded-[40px] border shadow-[1px_1px_3px_0px_rgba(202,202,202,0.15)]">
      <Image
        src="/icons/cyparta logo.png"
        alt="Cyparta Logo"
        priority
        width={247}
        height={158}
        className="absolute top-[3px] left-[41px] h-auto"
      />
      <div className=" w-full top-[246px] absolute flex flex-col">
      <Link href="#/dashboard" passHref>
        <SidebarItem index={0} label="Dashboard" />
      </Link>
     
        <Dropdown
          label="Employees"
          index={0}
          menuItems={dropmenuItems}
          open={true}
        />
   
      <Link href="#/payroll" passHref>
        <SidebarItem index={1} label="Payroll" />
      </Link>
     
        <Dropdown label="Holidays" index={1} menuItems={[]} open={false} />
    
      <Link href="#/advanced-payment" passHref>
        <SidebarItem index={2} label="Advanced Payment" />
      </Link>
      </div>
    </div>
  );
}
