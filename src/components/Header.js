import "./Header.css";
import logoCircle from "../logo_circle3.png";
import logoBlank from "../cropped-LOGO_blank.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoCircle} className="app-logo" alt="logo" />
        <img src={logoBlank} className="app-logo2" alt="logo" />
      </div>
      <div className="header-nav">
        <ul className={"header-nav-ul"}>
          <li className="menu-li">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="menu-li">
            <Link to="/products">Products</Link>
          </li>
          <li className="menu-li">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="menu-li">
            <Link to={"/about"}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="login-button-container">
        <button className="login-button">
          log<span>in</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
