import { useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./UserLogin.css";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const UserLogin = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    await login(email, password);
    console.log("navigating to profile...");
    navigate("/profile");
  };

  return (
    <>
      <Header />
      <div className="user-login">
        <h2>Sign In</h2>
        <form className="login-form" onSubmit={submitForm}>
          <label>Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="bob@abc.com"
          />
          <label>Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserLogin;
