import { useState } from "react";
import React from "react";
import Logo1 from "../Assets/images.png";

function Carousel() {
  return (
    <div
      id="carouselExampleControls "
      class="carousel slide  h-50 row col-12 d-flex justify-content-center mt-4 "
      data-ride="carousel">
      <a
        class="carousel-control-prev carousel"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev">
        <span class="carousel-control-prev-icon " aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>{" "}
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>{" "}
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>{" "}
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>{" "}
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>{" "}
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>{" "}
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>{" "}
      <div class="carousel-inner row" style={{ height: "10%", width: "6%" }}>
        <img
          src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          alt=""></img>
        <span>Amazing views</span>
      </div>
      <a
        class="carousel-control-next carousel"
        href="#carouselExampleControls"
        role="button"
        data-slide="next">
        <span class="carousel-control-next-icon " aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
