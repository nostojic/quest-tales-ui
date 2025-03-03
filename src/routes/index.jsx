import { createBrowserRouter } from "react-router";
import Home from "./Home/Home.jsx";
import UserLogin from "./UserLogin/UserLogin.jsx";
import UserProfile from "./UserProfile/UserProfile.jsx";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <UserLogin /> },
  {
    path: "/profile",
    element: <ProtectedRoute element={<UserProfile />} />,
  },
]);

export default router;
