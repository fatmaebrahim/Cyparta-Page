import Sidebar from "../../../Components/Sidebar/Sidebar";
import Info from "../../../Components/Profile/Info";


export default function profile() {
  return (
    <div>
      <div className="w-full bg-[#F8F8F8] h-[1024px]">
        <Sidebar />
        <Info />
      </div>
    </div>
  );
}
