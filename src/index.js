import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Routeur from './components/Routeur';
import Footer from './components/Footer.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routeur/>
    <Footer/>
  </React.StrictMode>
);