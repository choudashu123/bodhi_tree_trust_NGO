import React from 'react'
import './HeroSection.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../../assets/21.jpg"
import hero2 from "../../assets/22.jpg"
import hero3 from "../../assets/23.jpg"
import hero4 from "../../assets/24.jpg"
import hero5 from "../../assets/25.jpg"
import hero6 from "../../assets/26.jpg"
import hero7 from "../../assets/27.jpg"


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
    <div className="container-fluid px-0 py-0 position-relative" >
      <div className="heroImageText">
      <h1 class="text-white mb-3">Join The Movement To end Child Poverty</h1>
      <p><a href="#" class="btn btn-success py-3 px-5 rounded-pill shadow-lg fw-bold text-uppercase donate-btn"><i class="fa-solid fa-heart me-2"></i>Donate Now</a></p>
      </div>
      <Slider {...settings}>
      <div className="heroImage">
        <div className="overlay"></div>
        <img src={hero1} alt="" className="w-100" />
      </div>
      <div className="heroImage">
        <div className="overlay"></div>
        <img src={hero2} alt="" className="w-100" />
      </div>
      <div className="heroImage">
        <div className="overlay"></div>
        <img src={hero3} alt="" className="w-100" />
      </div>
      <div className="heroImage">
        <div className="overlay"></div>
        <img src={hero4} alt="" className="w-100" />
      </div>
      <div className="heroImage">
        <div className="overlay"></div>
        <img src={hero5} alt="" className="w-100" />
      </div>
      <div className="heroImage">
        <div className="overlay"></div>
        <img src={hero6} alt="" className="w-100" />
      </div>
      <div className="heroImage">
        <div className="overlay"></div>
        <img src={hero7} alt="" className="w-100" />
      </div>
    </Slider>
    </div>
  )
}
