
import Login from "../components/Login";
import TrangChu from "../components/TrangChu";

export interface IRoute {
    path: string;
    type: "PUBLIC" | "PRIVATE",
    component: () => JSX.Element
}

const routes: IRoute[] = [
    { path: '/login', type: 'PUBLIC', component: Login },
    { path: '/', type: 'PUBLIC', component: TrangChu },
    
  ];
  
  export default routes;