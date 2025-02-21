// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import routes, { IRoute } from "./routes/routes";
import { Fragment } from "react";

function App() {
  // const [isLogged, setIsLogged] = useState<boolean>(false)

  return (
    <Router>
      <Routes>
        {routes.map((route: IRoute, index) => {
          // const Page = (!isLogged && route.type == "PRIVATE") ? <Navigate to={'/login'} /> : route.component;
          // nếu chưa đăng nhập và route là Private thì chuyển đến trang đăng nhập
          const Page = route.component;
          const Layout = route.layout ? route.layout : Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {/* mặc định chuyển hướng tới login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
