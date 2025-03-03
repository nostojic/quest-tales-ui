import "./App.css";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import router from "./routes/index.jsx";
import { RouterProvider } from "react-router";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
