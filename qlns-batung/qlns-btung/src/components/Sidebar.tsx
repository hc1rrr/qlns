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
    <div className="w-full md:w-56 h-auto">
      {MENU.map((item: MenuItem, index: number) => (
        <div
          key={index}
          onClick={() => handleNavigate(item.path)}
          className={`mt-2 p-3 rounded-lg cursor-pointer duration-150 ${
            path === item.path ? "bg-gray-200 text-black" : "hover:bg-gray-200"
          }`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
