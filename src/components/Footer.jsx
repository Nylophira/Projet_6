import imageFooter from "../assets/FooterD.png";
import '../style/footer.css';

function Footer() {
    return (
      <footer className="monFooter">
        <img src={imageFooter} alt="Logo de Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
  
  export default Footer;
  