import '../style/header.css';
import accueil from '../assets/LOGOD.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {

 let location = useLocation();
 const monChemin = location.pathname;

  return (
    <div className='monHeader'>
      <img src={accueil} alt="Logo de Kasa" />
      <nav>
        
        <Link to="/" className={monChemin === "/" ? "active":""}>Accueil</Link>
        <Link to="/aPropos" className={monChemin === "/aPropos" ? "active":""}>A propos</Link>
        {/* <Link to={`/aPropos/${ouClick}`}>A propos</Link> */}
      </nav>
    </div>
  );
}

export default Header;
