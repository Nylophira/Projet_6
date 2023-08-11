import "../style/carte.css";
import { Link } from "react-router-dom";
import "../style/carrousel.css"


function UneCarte ({titre, couv, alt, id}) {

   return (
        <Link className="uneCarte" to={`/logement/${id}`}>
                <img src={couv} alt={alt}/>
                <div><h2>{titre}</h2></div>
        </Link>
   )
}

export default UneCarte;