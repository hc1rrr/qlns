import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <img
              src="https://static.ybox.vn/2024/8/4/1722486286062-Logo-Sonat.png"
              className="h-8 me-3"
              alt="SONAT LOGO"
            />
            <span className="self-center text-xl font-semibold sm:text-xl whitespace-nowrap dark:text-white">
              SONAT GAME STUDIO
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3 relative">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded={isDropdownOpen}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full cursor-pointer"
                  src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                  alt="user photo"
                />
              </button>

              {/* Dropdown menu */}
              <div
                className={`absolute right-0 top-12 w-48 bg-white border rounded-lg shadow-lg p-2 dark:bg-gray-700 transition-opacity duration-200 transform ${
                  isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="px-4 py-3">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                    Admin@gmail.com
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg"
                      onClick={() => navigate("/login")}
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
