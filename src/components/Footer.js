import "./Footer.css";

import wheelsLeft from "../assets/wheels-blue.png";
import wheelsRight from "../assets/wheels-blue-right.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <img className="wheels-left" src={wheelsLeft} alt="wheels"></img>
      <img className="wheels-right" src={wheelsRight} alt="wheels"></img>
      <div className="footer-border"></div>
      <div className="footer-container">
        <ul className="footer-link-ul">
          <li>
            <Link to={"/"}>
                <i class="fi fi-rr-home"> Home</i>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
                <i class="fi fi-rr-info"> About</i>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
                <i class="fi fi-rr-customer-service"> Contact</i>
            </Link>
          </li>
          <li>
            <Link to={"/products"}>
                <i class="fi fi-rr-supplier"> Products</i>
            </Link>
          </li>
        </ul>
        <ul className="footer-link-ul">
          <li>
            <i class="fi fi-rr-comment-question"> FAQ section</i>
          </li>
          <li>
            <i class="fi fi-brands-facebook"> Facebook</i>
          </li>
          <li>
            <i class="fi fi-rr-heart-partner-handshake"> Our Partners</i>
          </li>
          <li>
            <i class="fi fi-rr-career-growth"> Careers & Growth</i>
          </li>
        </ul>
        <ul className="footer-link-ul">
          <li>
            <a
              href="https://schiebel-actuators.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCHIEBEL Antriebstechnik GmbH
            </a>
          </li>
          <li>
            <a
              href="https://www.sw.siemens.com/en-US/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Siemens - Digital Industries Software
            </a>
          </li>
          <li>
            <a
              href="https://www.siemens.com/bg/bg.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Siemens - Bulgaria
            </a>
          </li>
          <li>
            <a
              href="https://aquajet.bg/products/elektricheski-zadvijki"
              target="_blank"
              rel="noopener noreferrer"
            >
              AQUAJET - Bulgaria
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
