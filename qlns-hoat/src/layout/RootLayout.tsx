import { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row mt-14">
        <Sidebar />
        <div className="flex-1 p-4">{children}</div>
      </div>
    </div>
  );
}

export default RootLayout;
