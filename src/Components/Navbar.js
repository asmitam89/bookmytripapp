import React from "react";
import Logo from "../Assets/logo.png";
import worldlogo from "../Assets/worldlogo.svg";
import icon from "../Assets/images.png";
import menu from "../Assets/menu.png";

function Navbar() {
  return (
    <nav class="navbar d-flex justify-content-center navBAR">
      <div class="container row ">
        <div class="col-xl-3">
          <a class="navbar-brand" href="#">
            <img src={Logo} style={{ maxWidth: "25%" }} />
          </a>
        </div>
        <div class="col-xl-4">
          <a class="px-2"> Stays</a>
          <a class="px-2">Experiance</a>
          <a class="px-2">Online Experiance</a>
        </div>
        <div class="col-xl-2 ">
          Airbnb your home
          <span> </span>
          <img src={worldlogo} style={{ maxWidth: "10%" }} />
        </div>
        <div class=" col-xl-1 mx-1 navSettings">
          <img src={menu} style={{ maxWidth: "40%" }} />
          <img src={icon} style={{ maxWidth: "40%" }} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
