import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../stores/context/userContect";

// Define the types for the context value
interface User {
  id: string;
  role: string;
  // Add other properties of the user as needed
}

interface UserContextType {
  user: User | null;
//   loading: boolean;
}

const PrivateRoute: React.FC = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  console.log("PrivateRoute - user:", user);
  console.log("PrivateRoute - loading:" );

  if (!user?.token || !user?.user ) {
    console.log("Redirecting to login...");
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  console.log("Rendering Outlet...");
  return <Outlet />;
};

export default PrivateRoute;
