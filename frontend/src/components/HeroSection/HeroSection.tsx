import React from 'react'
import './HeroSection.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from '../../assets/hero_1.jpg'
import hero2 from '../../assets/hero_2.jpg'
import hero3 from '../../assets/hero_3.jpg'


export default function HeroSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="container">
      <div className="heroImageText">
      <h1 class="text-white mb-3">Join The Movement To end Child Poverty</h1>
      <p><a href="#" class="btn btn-primary py-3 px-4 rounded-0">Donate Now</a></p>
      </div>
      <Slider {...settings}>
      <div className="heroImage">
        <img src={hero1} alt="" className="w-100" />
      </div>
      <div className="heroImage">
        <img src={hero2} alt="" className="w-100" />
      </div>
      <div className="heroImage">
        <img src={hero3} alt="" className="w-100" />
      </div>
    </Slider>
    </div>
  )
}
