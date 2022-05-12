import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Arrows from "./Arrows";
import Dots from "./Dots";
import sliderImage from "./sliderImage";
import "./slider.css";

const len = sliderImage.length - 1;

function Slider(props) {
  
  const [activeIndex, setActiveIndex] = useState(0);

  props.setSongsList(sliderImage[activeIndex].songs);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      props.setSongsList(sliderImage[activeIndex].songs);
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() => {
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            props.setSongsList(sliderImage[activeIndex].songs)
          }
        }
        nextSlide={() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            props.setSongsList(sliderImage[activeIndex].songs)
          }
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => {
            setActiveIndex(activeIndex)
            props.setSongsList(sliderImage[activeIndex].songs)
          }
        }
      />
    </div>
  );
}

export default Slider;