import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import company from "../images/fineSew.png";

export const MainCarousel = () => {
  return (
    <div>
      <img
        alt="banner"
        src={company}
        className="cursor-pointer"
        role="presentation"
      />
    </div>
  );
};
