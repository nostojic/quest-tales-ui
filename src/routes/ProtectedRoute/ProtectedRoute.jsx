import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Navigate } from "react-router";

const ProtectedRoute = ({ element }) => {
  console.log(element);
  const { user } = useContext(AuthContext);
  console.log("protected route user: " + user);
  return user ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
