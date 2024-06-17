// src/Slider.js

import React from 'react';
import Slider from 'react-slick';
import img1 from './images/img2.jpg'
import img2 from './images/img2.png'
import img3 from './images/img1.png'
import img4 from './images/img5.jpg'
import './Slider.css'; // Your custom styles if needed

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className='main-section'>
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className="img_class" src={img1} alt="Slide 1" />
        </div>
        <div>
          <img className="img_class" src={img2} alt="Slide 2" />
        </div>
        <div>
          <img className="img_class" src={img3} alt="Slide 3" />
        </div>
        <div>
          <img className="img_class" src={img4} alt="Slide 4" />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default ImageSlider;
