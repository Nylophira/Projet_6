import Banniere from "./Banniere.jsx";
import Collapse from "./Collapse.jsx";

function Propos () {

    const contenuF = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const contenuR = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const contenuS = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


    return (
        <div className="contSection">
            <Banniere ou="propos"/>
            <Collapse titre="Fiabilité" texte={contenuF}/>
            <Collapse titre="Respect" texte={contenuR}/>
            <Collapse titre="Service" texte={contenuR}/>
            <Collapse titre="Sécurité" texte={contenuS}/>
        </div>
    )
}

export default Propos;