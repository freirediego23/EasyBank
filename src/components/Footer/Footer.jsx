import React from "react";
import Logo2 from "../../assets/images/logo3.jpg";
import Facebook from "../../assets/images/icon-facebook.svg";
import Instagram from "../../assets/images/icon-instagram.svg";
import Pinterest from "../../assets/images/icon-pinterest.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import Youtube from "../../assets/images/icon-youtube.svg";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer className="blue-col">
        <div className="flex justify-center pt-5">
          <img className="white-logo" src={Logo2} alt="logo image" />
        </div>

        {/* Social Media Icons */}
        <div className="social flex justify-center mt-5 mb-5">
          <img src={Facebook} alt="social icon" className="ml-2 mr-2" />
          <img src={Youtube} alt="social icon" className="ml-2 mr-2" />
          <img src={Twitter} alt="social icon" className="ml-2 mr-2" />
          <img src={Pinterest} alt="social icon" className="ml-2 mr-2" />
          <img src={Instagram} alt="social icon" className="ml-2 mr-2" />
        </div>

        <div className="flex justify-center items-center flex-col text-white ">
          <a className="mt-1 mb-1" href="#">
            About us
          </a>
          <a className="mt-1 mb-1" href="#">
            Contact
          </a>
          <a className="mt-1 mb-1" href="#">
            Blog
          </a>
          <a className="mt-1 mb-1" href="#">
            Careers
          </a>
          <a className="mt-1 mb-1" href="#">
            Supports
          </a>
          <a className="mt-1 mb-1" href="#">
            Privacy Policy
          </a>
        </div>

        <div className="flex justify-center mt-8">
          <button className="rounded-full p-4 bg-red-600 text-white grad-back text-lg w-52 font-bold">
            Request Invite
          </button>
        </div>

        <p className="low-gray text-center mt-6 pb-8">
          © Easybank. All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
