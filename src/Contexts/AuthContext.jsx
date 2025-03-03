import { jwtDecode } from "jwt-decode";
import { useState, useEffect, createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    async function checkToken() {
      console.log("checking token: ", token);
      if (!token) {
        console.log("token not present...");
        setUser(null);
        return;
      }

      try {
        const decoded = jwtDecode(token);

        let data;

        if (decoded.exp * 1000 < new Date().getTime()) {
          console.log("decoded.exp: " + decoded.exp * 1000);
          console.log("now: " + new Date().getTime());
          console.log("refreshing token...");
          const url = `${import.meta.env.VITE_API_URL}/users/refresh/`;

          const response = await fetch(url, {
            method: "POST",
            credentials: "include",
          });

          if (!response.ok) {
            throw new Error("Failed to refresh token");
          }

          data = await response.json();

          setToken(data.token);
          setUser({
            userEmail: data.user_email,
            userName: data.user_name,
            userId: data.user_id,
          });
          localStorage.setItem("token", data.token);
        }
        if (!user) {
          console.log("getting user...");
          const url = `${import.meta.env.VITE_API_URL}/users/${
            decoded.user_id
          }`;
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          });

          const data = await response.json();

          setUser({
            userEmail: data.user_email,
            userName: data.user_name,
            userId: data.user_id,
          });
        }
      } catch (err) {
        console.log("error checking token: ", err);
        setUser(null);
      }
    }
    checkToken();
  }, [token]);

  const login = async (userEmail, password) => {
    console.log("logging in user...");
    const url = `${import.meta.env.VITE_API_URL}/users/login/`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_email: userEmail,
        user_password: password,
      }),
    });

    const data = await response.json();

    setToken(data.token);
    setUser({
      userEmail: data.user_email,
      userName: data.user_name,
      userId: data.user_id,
    });
    localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
