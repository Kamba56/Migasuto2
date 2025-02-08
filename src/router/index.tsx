import { useRoutes } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import PrivateRoute from './PrivateRoute';

import History from "../Pages/History";
import HomePage from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/Signup";



function Router() {
  const routes = [
    {
      path: "/login",
      element: <Login />
    },

    {
      path: "/signup",
      element: <SignUp />
    },
   
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <HomePage />
        }
      ]
     
    },
    {path: "/forgot-password", element: <ForgotPassword/>},
    // {path: "/scan", element: <QrReader/>},

  
    {
      // path: "/dashboard",
      element: <PrivateRoute />,
      children: [
        
     
        // {
        //   path: "/dashboard",
        //   element: <Dashboard />,
        // },  

      ],
    },

    {
      path: '/history',
      element: <History />
    }



    

   
  ];

  return useRoutes(routes);
}

export default Router;

