import '../style/collapse.css';
import iFerme from '../assets/arrow_back.png';
import iOuvert from '../assets/arrow_back_bas.png';
import { useState } from "react";

function Collapse ({titre, texte}) {

    const [etat, changement] = useState(false);

    function modif (e) {
        e.preventDefault();
        if (etat) {
            changement(false);
        } else {
            changement(true)
        }
    }

    const contenu = texte;

    return (
        <div className='unCollapse'>
            <div className="collaTitre">
                <h2>{titre}</h2>
                <a href="" onClick={event => modif(event)}>{etat ?  <img src={iOuvert}  alt="flèche vers le bas"/>  : <img src={iFerme}  alt="flèche vers le haut"/> } </a>
            </div> 
            {etat ? <p>{contenu}</p>:"" }
        </div>
    )
}

export default Collapse;