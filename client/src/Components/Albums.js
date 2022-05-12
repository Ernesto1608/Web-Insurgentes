import React, {useState} from "react";
import "./Albums.css";
import SliderList from "./SliderList";
import NavBar from './nav';
import Footer from "./footer";
import Slider from "./Slider";

function Albums(){

  const [songsList, setSongsList] = useState([]);

    return (
      <>
        <NavBar />
        <div className="Albums">
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
        </div>
        <Footer />
      </>
    );
}

export default Albums;