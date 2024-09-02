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
        src="https://s3-alpha-sig.figma.com/img/3842/b99f/e7003b653626b4899b379c517657a039?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5zOZ4eEOaQ7LAX1tvoMcy7FRGyExJ5Fz2NEND~sJrov7UvQN2IwgKINWt4h1RdcXC420db3sAQhUB7qpLwWMLzLM30ZOxbJF5uSR-UXKrRxU81VTEY7o2QJk8zUd9zd5cutDfqS3mdPD-InEZi7NomESEjwmHVK~9fQ2ZCWI3m64NbYWAcOrOLafmWsrg5-HAyEc1kQ8UtTpqpEShcCwSZmjRuf20pRy-FpOpN-9iTTphlPPeUewGV03bTuxln~574eXhcNNwlLIOANEFS6EJq~8Noihp7d1OQGV45NyisiTEKQrDznE2eEzQosbJV59qu~TI0oG-sqAJwF5vsibg__"
        alt="Cyparta Logo"
        priority
        width={247}
        height={158}
        style={{ width: '100%', height: 'auto' }}
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
