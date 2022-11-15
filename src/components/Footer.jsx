import "../styles/Footer.css";
import footerLogo from "../assets/Footer-logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img alt="footerLogo" className="footerLogo" src={footerLogo}></img>
      <p className="footerTxt">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
