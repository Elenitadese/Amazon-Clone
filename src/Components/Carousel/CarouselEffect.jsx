import React from 'react'
import { Carousel } from "react-responsive-carousel";
import {img} from './Img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  classes from './Carousel.module.css'

const CarouselEffect = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItem, index) => (
          <div key={index}>
            <img src={imageItem} alt={`slide-${index}`} />
          </div>
        ))}
      </Carousel>

      <div className={classes.hero_img}></div>
    </>
  );
}

export default CarouselEffect;