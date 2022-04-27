import './nav.css';
import logo from "./imagenes/isotipo_alt_insurgentes-03.png"

function NavBar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="./Index.js">
        <img src={logo} alt="logo" width="30" height="24" class="d-inline-block align-text-top"></img>
        Los Insurgentes</a>
        <a class="nav-link" href="./Index.js">Inicio</a>
        <a class="nav-link" href="#">Eventos</a>
        <a class="nav-link" href="#">Albums</a>
        <a class="nav-link" href="#">Tienda</a>
    </div>
  </nav>
  );
}
export default NavBar;