
import Home from './Home.jsx';
import Logement from './Logement.jsx';
import Propos from './APropos.jsx';
import Erreur from './Erreur404.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Header.jsx";

function Routeur () {

    return (
      <div className='corpsDoc'>
        <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/logement/:id' element={<Logement/>}/>
          <Route path='/aPropos' element={<Propos/>}/>
          <Route path='*' element={<Erreur/>}/>
        </Routes>
      </Router>
      </div>
    )
}

export default Routeur;