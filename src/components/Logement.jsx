import { useParams, Navigate } from "react-router";
import donnees from "../data/logements.json";
import Carrousel from "./Carrousel.jsx";
import "../style/logement.css";
import starAct from "../assets/star-active.png";
import startIna from "../assets/star-inactive.png";
import Collapse from "./Collapse";

function Logement () {

    const {id} = useParams();

    const mesDonnees = donnees.filter( donnee => donnee.id === id);

    const echelle = [1, 2, 3, 4, 5]; 
    
    //recherche si l'id existe
    let vraiID = false;
    donnees.forEach ( x => {
        if (x.id === id) {
           return vraiID= true;
        }
    })
   if (!vraiID) {
        return <Navigate to="*"/>;
    } else {
    
        return (
            <div  className="contSection">
            {mesDonnees.map( (donnee, num) => {
                    return (
                        <div className="contLogement" key={donnee.id}>
                            <Carrousel  key={`${donnee.id}-${num}`}  photos={donnee.pictures}/>
                            <div className="contCol">
                                <div className="colG">
                                    <h1>{donnee.title}</h1>
                                    <h2>{donnee.location}</h2>
                                    <ul className="listeTag">
                                        {donnee.tags.map ((unTag, numero) => {
                                            return <li key={`${donnee.tags}-${numero}`}>{unTag}</li>
                                        })}
                                    </ul> 
                                </div>
                                <div  className="colD">
                                    <div className="hostPho">
                                        <p>{donnee.host.name}</p>
                                        <img src={donnee.host.picture}alt="portrait de votre hôte"/>
                                    </div>
                                    <div className="rating">
                                        {echelle.map ((x, numero) => {
                                        return donnee.rating>=x ? <img key={`${donnee.rating}/${numero}`} src={starAct} alt="étoile complète"/> :  <img key={`${donnee.rating}/${numero}`} src={startIna} alt="étoile vide"/>
                                        })}
                                    </div>
                                </div> 
                            </div>
                            <div className="contCollaLog">
                            <Collapse titre="Description" texte={donnee.description} typeLog="texte"/>
                            <Collapse titre="Equipements" texte=
                                {donnee.equipments.map ((unE, numero) => {
                                return <li key={`${donnee.equipments}-${numero}`}>{unE}</li> 
                                })}
                                typeLog="liste"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } 
}

export default Logement;