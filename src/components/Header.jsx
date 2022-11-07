import {NavLink} from "react-router-dom"
import "../styles/Header.css"
import logo from "../assets/LOGO.svg"

const Header = () => {
    return (  
        <div className="headerContainer">
            <img src={logo} alt="headerLogo" />
            <nav className="linkContainer">
                <NavLink className="link" to={'/'}>Accueil</NavLink>
                <NavLink className="link" to={'/a-propos'}>A propos</NavLink>
            </nav>
        </div>
    );
}
 
export default Header;