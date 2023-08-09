import imageFooter from "../assets/FooterD.png";
import imageFooterS from "../assets/FooterS.png";
import '../style/footer.css';

function Footer() {
    return (
      <div className="monFooter">
        <img className="Ordi" src={imageFooter} alt="Logo de Kasa" />
        <img className="mobile" src={imageFooterS} alt="Logo de Kasa" />
      </div>
    );
  }
  
  export default Footer;
  