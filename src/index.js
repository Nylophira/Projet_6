import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Logement from './components/Logement.jsx';
import Propos from './components/APropos.jsx';
import Erreur from './components/Erreur404.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/logement' element={<Logement/>}/>
        <Route path='/aPropos' element={<Propos/>}/>
        <Route path='*' element={<Erreur/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);


