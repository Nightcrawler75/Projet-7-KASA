import { NavLink } from "react-router-dom";
import "../styles/Error.css";

const Error = () => {
    return (
        <>
          <div className="error">404</div>
          <div className="errorQuote">Oups! La page que vous demandez n'existe pas.</div>
          <NavLink className="linkBackHome " to="/">Retourner sur la page d’accueil</NavLink>
        </>
      );
}
 
export default Error;
