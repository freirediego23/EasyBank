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
            <li className="lg:text-sm font-bold">One</li>
            <li className="lg:text-sm font-bold">Two</li>
            <li className="lg:text-sm font-bold">Three</li>
            <li className="lg:text-sm font-bold">Four</li>
            <li className="lg:text-sm font-bold">Five</li>
          </ul>

          <button className="tiny sm:hidden md:hidden lg:block rounded-full p-2 bg-red-600 text-white grad-back text-sm w-36 mr-20">
            Request Invite
          </button>
        </section>
      </div>
    </div>
  );
}

export default Navigation;
