import React from "react";
import Logo from "../../assets/images/logo.svg";
import Logo2 from "../../assets/images/logo3.jpg";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer className="blue-col">
        <div className="flex justify-center">
          <img className="white-logo" src={Logo2} alt="logo image" />
        </div>

        {/* Social Media Icons */}
        <div className="social"></div>

        <div className="flex justify-center items-center flex-col text-white">
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Supports</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="flex justify-center mt-8">
          <button className="rounded-full p-4 bg-red-600 text-white grad-back text-lg w-52">
            Request Invite
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
