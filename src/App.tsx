// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import routes, { IRoute } from './routes/routes';
// import { useState } from 'react';


function App() {

  // const [isLogged, setIsLogged] = useState<boolean>(false)

  return (
    <Router>
        <Routes>
          {routes.map((route: IRoute, index) => {
            // const Page = (!isLogged && route.type == "PRIVATE") ? <Navigate to={'/login'} /> : route.component;
            // nếu chưa đăng nhập và route là Private thì chuyển đến trang đăng nhập
            const Page = route.component;

            return (<Route
              key={index}
              path={route.path}
              element={
                <Page />
              }
            />)
          } )}
        </Routes>
    </Router>
  )
}

export default App
