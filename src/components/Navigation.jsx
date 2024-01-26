import React from "react";
import Logo from "../assets/images/logo.svg";

function Navigation() {
  return (
    <div>
      <div className="navcont flex justify-between">
        <img src={Logo} alt="logo img" className="pl-8" />
        <button className="pr-8">|||</button>
      </div>
    </div>
  );
}

export default Navigation;
