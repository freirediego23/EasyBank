import React from "react";
import Logo from "../../assets/images/logo.svg";
import "./navigation.css";

function Navigation() {
  return (
    <div>
      <div className="navcont">
        <section className="top-nav">
          <div>
            <img src={Logo} alt="logo img" className="pl-8" />
          </div>
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" for="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Navigation;
