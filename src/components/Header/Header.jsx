import { useContext } from "react";
import "./Header.css";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <header>
        <div className="header-left">
          <p className="logo">
            <Link to="/">QuesTales</Link>
          </p>
        </div>
        <div className="header-middle">
          <p>Adventures</p>
        </div>
        <div className="header-right">
          <p>
            <Link to={user ? "/profile" : "/login"}>
              {user ? "Profile" : "Login"}
            </Link>
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
