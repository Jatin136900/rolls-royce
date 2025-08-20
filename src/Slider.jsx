import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function CustomImageSlider() {
  const images = [
    { imgURL: "/images/one.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/two.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/three.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/four.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/five.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/six.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/seven.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/eieght.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/nine.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/ten.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/eleven.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/twulve.avif", imgAlt: "Slide 1" },
    { imgURL: "/images/thirtheen.avif", imgAlt: "Slide 1" },

  ];


  const settings = {
    dots: true,          
    infinite: true,     
    speed: 300,          
    slidesToShow: 1,     
    slidesToScroll: 1,   
    autoplay: true,     
    autoplaySpeed: 2000, 
    arrows: true,        
  };

  return (
    <div className="App w-[70%] mx-auto mt-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.imgURL}
              alt={image.imgAlt}
              className="w-full h-auto "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}




