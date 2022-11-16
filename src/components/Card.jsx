import "../styles/Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ children, src, lodgingId }) => {
  let navigate = useNavigate();
  return (
    <div onClick={() => navigate("/logement/" + lodgingId)} className="card" style={!src ? { background: "linear-gradient(180deg, rgba(249, 105, 106, 1) 0%, rgba(129, 50, 50, 1) 100%)" } : { backgroundImage: "url(" + src + ")" }}>
      <p className="cardTitle">{children}</p>
    </div>
  );
};

export default Card;
