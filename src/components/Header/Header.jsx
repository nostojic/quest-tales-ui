import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <h1>QuesTales</h1>
        </div>
        <div className="header-middle">
          <p>Adventures</p>
        </div>
        <div className="header-right">
          <p>
            <Link to="/login/">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
