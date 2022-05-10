import React, {useState} from "react";
import "./Albums.css";
import SliderList from "./SliderList";
// import NavBar from './Components/nav';
// import Footer from "./footer";
import Slider from "./Slider";

function Albums(){

  const [songsList, setSongsList] = useState([]);

    return (
        <div className="Albums">
          {/* <NavBar /> */}
          <div class="container-fluid">
            <div className = "row">
              <div className = "col-lg-6">
                <Slider setSongsList={setSongsList}/>
              </div>
              <div className = "col-lg-6">
                <SliderList albumSongs={songsList}/>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
    );
}

export default Albums;