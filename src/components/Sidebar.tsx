import { useLocation, useNavigate } from "react-router-dom";

interface MenuItem {
  label: string;
  path: string;
}

const MENU: MenuItem[] = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Quản lý chức vụ", path: "/" },
  { label: "Quản lý phòng ban", path: "/" },
  { label: "Quản lý nhân viên ", path: "/" },
  { label: "Quản lý chấm công", path: "/time-keeping" },
  { label: "Quản lý lương", path: "/" },
];

function Sidebar() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const path = useLocation().pathname;
  console.log(path);

  return (
    <div className="w-full md:w-56 h-screen bg-[#1C2434] text-white pt-32">
      {MENU.map((item: MenuItem, index: number) => (
        <div
          key={index}
          onClick={() => handleNavigate(item.path)}
          className={`mt-2 p-3 rounded-lg cursor-pointer duration-150 ${
            path === item.path ? "bg-gray-500 text-white" : "hover:bg-gray-500"
          }`}
        >
          {item.label}
        </div>   
      ))}
    </div>
  );
}

export default Sidebar;
