import Banniere from "./Banniere.jsx";
import UneCarte from "./UneCarte.jsx";
import donnees from "../data/logements.json";
import "../style/home.css";

function Home () {

    return (
        <div className="contSection"> 
            <Banniere ou="home"/>
            <div className="contCard">
                {donnees.map( donnee => {
                        return <UneCarte  key={donnee.id}  titre={donnee.title} couv={donnee.cover} alt={donnee.description} id={donnee.id}/>
                })}
            </div>
       </div>
    )
}

export default Home;