import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faSpotify, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import "./footer.css"

function Footer() {
    return (
        <nav class="navbar">
        <div class="container-fluid">
            <a href='https://open.spotify.com/artist/3ukFu8umbFWty86yaubSR6' target="_blank"><FontAwesomeIcon icon={faSpotify} size="lg"/></a> 
            <a href='https://www.facebook.com/losinsurgentes.mx' target="_blank"><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
            <a href='https://twitter.com/insurgentesmx' target="_blank"><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
            <a href='https://www.instagram.com/insurgentes.mx/' target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg"/></a>
        </div>
      </nav>
    );
    }

    export default Footer;