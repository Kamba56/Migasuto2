import { useRoutes } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import PrivateRoute from './PrivateRoute';

import History from "../Pages/History";
import Settings from "../Pages/Settings";



function Router() {
  const routes = [
   
    {
      path: "/",
      element: <Dashboard />,
     
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
    },
    {
      path: '/settings',
      element: <Settings />
    }



    

   
  ];

  return useRoutes(routes);
}

export default Router;

