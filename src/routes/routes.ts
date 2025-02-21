import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import RootLayout from "../layout/RootLayout";
import { ReactNode } from "react";
import TimeKeeping from "../components/TimeKeeping";
import Salary from "../components/Salary";
<<<<<<< HEAD
import Employee from "../components/Employee";
=======
import Department from "../components/Department";
>>>>>>> e9788e765087e77a3149266f4b266dcb417b1a32


export interface IRoute {
    path: string;
    type: "PUBLIC" | "PRIVATE",
    component: () => JSX.Element,
    layout?: ({children}: {children: ReactNode}) => JSX.Element,
}

const routes: IRoute[] = [
    { path: '/login', type: 'PUBLIC', component: Login },
    { path: '/dashboard', type: 'PUBLIC', component: Dashboard, layout: RootLayout },
    { path: '/time-keeping', type: 'PUBLIC', component: TimeKeeping, layout: RootLayout },
    { path: '/salary', type: 'PUBLIC', component: Salary, layout: RootLayout },
<<<<<<< HEAD
    { path: '/employee', type: 'PUBLIC', component: Employee, layout: RootLayout },
=======
    { path: '/department', type: 'PUBLIC', component: Department, layout: RootLayout },

    
>>>>>>> e9788e765087e77a3149266f4b266dcb417b1a32
  ];
  
  export default routes;