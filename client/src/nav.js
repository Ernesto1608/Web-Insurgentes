import './nav.css';
import nombre from "./imagenes/Nombre.png"

function NavBar() {
  return (
    <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="./Index.js">
        <img src={nombre} alt="logo" width="150" height="auto" class="d-inline-block align-text-top"></img></a>
        <a href="./Index.js">Inicio</a>
        <a  href="./App.js">Eventos</a>
        <a  href="./Albums.js">Albums</a>
        <a  href="#">Tienda</a>
    </div>
  </nav>
  );
}
export default NavBar;