import flecheG from '../assets/arrowG.png';
import flecheD from '../assets/arrowD.png';
import { useState } from 'react';


function Carrousel ({photos}) {

   const [index, changement] = useState(0);
   const max = photos.length;

   function mouvArr (num) {
        
        if (num === 0) {
            changement (max-1);
        } else {
            changement (num-1);
        }       
   }

   function mouvAv (num) {
        if (num === max-1) {
            changement (0);
        } else {
            changement (num+1);
        }  
   }

    if (photos.length>1) {
        
        return (
            <div className="contCarrousel">
                <div className='contFleche'>
                    <img className='fleche' src={flecheG} alt="flèche gauche" onClick={ () => mouvArr(index)}/>
                    <p id='numIndex'>{index+1}/{max}</p>
                    <img className='fleche' src={flecheD} alt="flèche droite" onClick={ () => mouvAv(index)} />
                </div>
                <div>
                    <img className='imgCa' key={index} src={photos[index]}  alt="Illustrations de l'appartement" />
                </div>
            </div>
        )
    } else {
        return (
            <div className="contCarrousel">
                {photos.map( x => {
                    return (<img  className='imgCa' key={x} src={x} alt="Illustrations de l'appartement"/>)
                })}
            </div>
        )
    }
    
}

export default Carrousel;

   /*  return (
            <div className="contCarrousel">
                <div className='contFleche'>
                <img className='fleche' src={flecheG} alt="flèche gauche" />
                <img className='fleche' src={flecheD} alt="flèche droite" />
                </div>
                <div>
                    {photos.map( x => {
                        return (<img className='imgCa' key={x} src={x} alt="Illustrations de l'appartement"/>)
                    })}
                </div>
            </div>
        ) */