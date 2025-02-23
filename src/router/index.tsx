import { useRoutes } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import SubscriptionPage from "../Pages/subscription";
import History from "../Pages/History";
import HomePage from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/Signup";
import Onboarding from "../Pages/onBoarding";
import Questions from "../Pages/History/Form";
import Metrics from "../Pages/Metrics";
import ALLmeeting from "../Pages/ALLmeeting";

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
        },
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/question",
          element: <Questions />
        },
        {
          path: "/subscription",
          element: <SubscriptionPage />,
        },
        {
          path: "/meetingnotes",
          element: <ALLmeeting />
        },
        {
          path: "/metrics",
          element: <Metrics />
        }
      ]
    },
    { path: "/forgot-password", element: <ForgotPassword /> },
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
      path: "/onboarding/:id",
      element: <Onboarding />,
    },
    {
      path: "/metrics",
      element: <Metrics />
    }
  ];

  return useRoutes(routes);
}

export default Router;
