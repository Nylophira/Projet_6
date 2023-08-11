import { Link } from 'react-router-dom';
import quatrecentquatre from '../assets/404.png';
import '../style/erreur404.css';

function Erreur () {
    return (
        <div className="contSection contErreur">
            <img src={quatrecentquatre} alt='Erreur 404'/>
            <h1>Oups ! La page que vous demandez n'existe pas.</h1>
            <Link to="/Projet_6">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Erreur;