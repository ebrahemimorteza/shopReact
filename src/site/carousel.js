import React from "react";
import $ from "jquery";
import { CC } from "bootstrap-4-react";
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import OwlCarousel from "react-owl-carousel2";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MyCarousel = ({ items, options }) => {
  return (
    <>
      <OwlCarousel options={options}>{items}</OwlCarousel>
    </>
  );
};
export default MyCarousel;
