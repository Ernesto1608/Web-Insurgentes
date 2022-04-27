import './biografia.css';
import imagenBanda from "./imagenes/lineas_insurgentes.png"

function Bio() {
  return (
    <div className="Bio">
        <div class="container-fluid">
            <div class="row">
            <h2>Los Insurgentes</h2>
                <div class="col-lg-6 Imagen">
                    
                    <img src={imagenBanda} width="100%" height="auto"></img>
                    </div>
                <div class="col-lg-6 Biografia">
                    <p>Una banda de rock moderno, única en su clase, desde el punto de vista sonoro, visual e ideológico. Se caracteriza por tocar temas poco recurridos y tratar de generar impacto en sus oyentes. </p>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Bio;