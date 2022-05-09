import logo from './logo.svg';
import Events from './Events';
import NavBar from './nav';
import Footer from './footer';

function Conciertos() {
  return (
    <div className="Conciertos">
        <NavBar />
        <h2>Proximos conciertos</h2>
        <Events /> 
        <Footer />
    </div>
  );
}

export default Conciertos;