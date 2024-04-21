import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { techWorksDb } from "../data/db";
import Card from "./Card";

function ResponsiveSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {techWorksDb.map((work) => (
            <div key={work.id}>
                <Card key={work.id} title={work.title} img={work.img} description={work.description} tools={work.tools} videolink={work.videolink} subtitle={work.subtitle} fullDescription={work.fullDescription} />
            </div>
        ))}
      </Slider>
    </div>
  );
}

export default ResponsiveSlider;
