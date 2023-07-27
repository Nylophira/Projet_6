import banner from '../assets/banner.png';
import bannerAP from '../assets/bannerAP.png';
import '../style/banniere.css';

function Banniere ({ou}) {

   //console.log(ou);
    if (ou==="propos") {
        return (
            <div className='contBanner'>
                <img className='bannerAccueil' src={bannerAP} alt="Forêt avec rivière et montagnes enneignées au loin"/> 
            </div>)
    } else {
        return (
            <div className='contBanner'>
                <img className='bannerAccueil' src={banner} alt="Petite falaise dans le brouillard avec une mer agitée"/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div> )
    }
    
    
}

export default Banniere;