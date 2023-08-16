import '../style/collapse.css';
import iFerme from '../assets/arrow_back.png';
import iOuvert from '../assets/arrow_back_bas.png';
import { useState } from "react";

function Collapse ({titre, texte, typeLog}) {

    const [etat, changement] = useState(false);

    function modif (e) {
        e.preventDefault();
        if (etat) {
            changement(false);
        } else {
            changement(true)
        }
    }

   //const contenu = texte;
   let maBalise;

   let etatLogement = "";
    if (typeLog) {
        etatLogement = typeLog;
    }

    if (typeLog === "liste") {
        maBalise = <ul className={etat ? 'actif':'null'}>{texte}</ul>;
    } else {
       maBalise = <p className={etat ? 'actif':'null'}>{texte}</p>;
    }
    
    return (
        <div className={`unCollapse ${etatLogement}`}>
            <div className="collaTitre">
                <h2>{titre}</h2>
                <button onClick={event => modif(event)}>{etat ?  <img src={iOuvert}  alt="flèche vers le bas"/>  : <img src={iFerme}  alt="flèche vers le haut"/> } </button>
            </div>
             <div className='contenuColl'>
                {maBalise}
            </div>
        </div>
    )
}

export default Collapse;