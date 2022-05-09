import React from "react";
import "./Albums.css";
import NavBar from './Components/nav';
import Footer from "./footer";

import Slider from "./Components/Slider";

function Albums(){
    return (
        <div className="Albums">
          <NavBar />
          <Slider />
          <Footer />
        </div>
    );
}

export default Albums;