import './biografia.css';
import imagenBanda from "../imagenes/lineas_insurgentes.png"

function Bio() {
  return (
    <div className="Bio">
        <h2>Los Insurgentes</h2>
        <div class="container-fluid">
        
            <div class="row">
            
                <div class="col-lg-6 Imagen">
                    
                    <img src={imagenBanda} width="100%" height="auto"></img>
                    </div>
                <div class="col-lg-6 Biografia">
                    <p>Una banda de rock moderno, única en su clase, desde el punto de vista sonoro, visual e ideológico. Se caracteriza por tocar temas poco recurridos y tratar de generar impacto en sus oyentes. </p>
                    <p>Los Insurgentes es una banda de rock nacida en Monterrey conformada por Diego Garza, , Viko Guerra y Álvaro Rodríguez.  Durante este 2022 celebran su quinto aniversario con su nuevo material discográfico: EL GRAN FINAL. Este nuevo EP cierra la trilogía sonora que marca los primeros años de la banda regiomontona, la cual busca volverse uno de los actos nacionales que se tienen que ver en vivo.</p>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Bio;