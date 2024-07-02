import "./Header.css";
import logoCircle from "../logo_circle3.png";
import logoBlank from "../cropped-LOGO_blank.png";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const Header = () => {

  const [menu,setMenu] = useState(' closed');
  
 
  const toggle=(e)=>{
    if(menu===' closed'){
      setMenu(' opened')
    }else if(menu===' opened'){
      setMenu(' closed')
   }
  }

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoCircle} className="app-logo" alt="logo" />
        <img src={logoBlank} className="app-logo2" alt="logo" />
      </div>
     
      <div className="header-nav">
        <ul onClick={toggle} className={"header-nav-ul"}>
          <li className="menu-button-li">
            <div onClick={toggle}>MENU</div>
          </li>
          <li  className={'option-li' + menu}>
            <Link to={"/"}>Home</Link>
          </li>
          <li className={'option-li' + menu}>
            <Link to="/products">Products</Link>
          </li>
          <li className={'option-li' + menu}>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className={'option-li' + menu}>
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
