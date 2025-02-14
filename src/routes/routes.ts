import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import RootLayout from "../layout/RootLayout";
import { ReactNode } from "react";
import TimeKeeping from "../components/TimeKeeping";


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
    
    
  ];
  
  export default routes;