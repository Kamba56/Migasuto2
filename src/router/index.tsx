import { useRoutes } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import SubscriptionPage from "../Pages/subscription";
import History from "../Pages/History";
import Settings from "../Pages/Settings";

import HomePage from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/Signup";
import Onboarding from "../Pages/onBoarding";
import Questions from "../Pages/History/Form";
import Metrics from "../Pages/Metrics";
import ALLmeeting from "../Pages/ALLmeeting";
import Filemanager from "../Pages/fileManager";
import FileUpload from "../Pages/fileUpload";
import { SignupProvider } from "../Components/onboarding/SignupContext";
import UserContextProvider from "../stores/context/userContect";

function Router() {
  const routes = [
    {
      path: "/login",
      element: (
        <UserContextProvider>
          <Login />
        </UserContextProvider>
      ),
    },

    {
      path: "/signup",
      element: (
        <SignupProvider>
          <SignUp />
        </SignupProvider>
      ),
    },

    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/question",
          element: <Questions />,
        },
        {
          path: "/subscription",
          element: <SubscriptionPage />,
        },
        {
          path: "/meetingnotes",
          element: <ALLmeeting />,
        },
        {
          path: "/metrics",
          element: <Metrics />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "manager",
          element: <Filemanager />, // Only renders on "/manager"
        },
        {
          path: "manager/upload",
          element: <FileUpload />, // Separate from Filemanager
        },
      ],
    },
    { path: "/forgot-password", element: <ForgotPassword /> },
    // {path: "/scan", element: <QrReader/>},

    {
      path: "/dashboard",
      element: (
        <UserContextProvider>
          <PrivateRoute />
        </UserContextProvider>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "history",
              element: <History />,
            },
            {
              path: "question",
              element: <Questions />,
            },
            {
              path: "subscription",
              element: <SubscriptionPage />,
            },
            {
              path: "meetingnotes",
              element: <ALLmeeting />,
            },
            {
              path: "metrics",
              element: <Metrics />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
            {
              path: "manager",
              element: <Filemanager />, // Only renders on "/manager"
            },
            {
              path: "manager/upload",
              element: <FileUpload />, // Separate from Filemanager
            },
          ],
        },
      ],
    },

    {
      path: "/history",
      element: <History />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/onboarding/:id",
      element: (
        <SignupProvider>
          <Onboarding />
        </SignupProvider>
      ),
    },
  ];

  return useRoutes(routes);
}

export default Router;
