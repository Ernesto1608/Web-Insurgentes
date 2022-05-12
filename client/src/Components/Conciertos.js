import "./Conciertos.css";
import Events from './Events';
import NavBar from './nav';
import Footer from './footer';

function Conciertos() {
  return (
    <>
    <NavBar />
    <div className="Conciertos">
      <h2>Proximos conciertos</h2>
    </div>
    <Events /> 
    <Footer />
    </>
  );
}

export default Conciertos;