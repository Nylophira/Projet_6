import "../style/carte.css";
import { Link } from "react-router-dom";

function UneCarte ({titre, couv, alt}) {
    return (
        <Link className="uneCarte" to="/logement">
        <img src={couv} alt={alt}/>
        <div><h2>{titre}</h2></div>
        </Link>
    )
}

export default UneCarte;