import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import shit from "../images/SimonGame.png";
import thanks from "../images/thanks.png";

export const mainCaroselData = [
  {
    name: "dress1",
    image: shit,
  },
  {
    name: "dress2",
    image: thanks,
  },
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    1
  </div>,
  <div className="item" data-value="2">
    2
  </div>,
  <div className="item" data-value="3">
    3
  </div>,
  <div className="item" data-value="4">
    4
  </div>,
  <div className="item" data-value="5">
    5
  </div>,
];

export const MainCarousel = () => {
  const items = mainCaroselData.map((item) => (
    <img
      alt={item.name}
      src={item.image}
      className="cursor-pointer"
      role="presentation"
    />
  ));
  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
      />
    </div>
  );
};
