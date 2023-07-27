import Banniere from "./Banniere.jsx";
import Collapse from "./Collapse.jsx";
/* import { useState } from "react";

const [etat, changement] = useState(false); */

function Propos () {

    let contenu = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";


    return (
        <div className="contSection">
            <Banniere ou="propos"/>
            <Collapse titre="Fiabilité" texte={contenu}/>
        </div>
    )
}

export default Propos;