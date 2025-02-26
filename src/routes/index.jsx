import { createBrowserRouter } from "react-router";
import Home from "./Home/Home.jsx";
import UserLogin from "./UserLogin/UserLogin.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/", element: <UserLogin /> },
]);

export default router;
