import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { quotesDb } from "../data/db";
import QuoteCard from "./QuoteCard";

function QuotesSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="slider-container max-w-6xl mx-auto">
      <Slider {...settings}>
        {quotesDb.map(quote => (
          <QuoteCard
            key={quote.id}
            name={quote.name}
            quote={quote.quote}
            img={quote.img}
            linkedin={quote.linkedin}
          />
        ))}
      </Slider>
    </div>
  );
}

export default QuotesSlider;
