import './nav.css';
import nombre from "../imagenes/logotipo_insurgentes-05.png"

function NavBar() {
  return (
    <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">
        <img src={nombre} alt="logo" width="150" height="auto" class="d-inline-block align-text-top"></img></a>
        <a href="/home">Inicio</a>
        <a  href="/conciertos">Eventos</a>
        <a  href="/albums">Albums</a>
        <a  href="https://main.d36vs425hxko9i.amplifyapp.com/" target="blank" >Tienda</a>
    </div>
  </nav>
  );
}
export default NavBar;