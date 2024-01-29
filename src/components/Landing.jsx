import React from "react";

import Navigation from "./Navigation/Navigation.jsx";
import MobIcon from "../assets/images/bg-intro-mobile.svg";
import Cell from "../assets/images/image-mockups.png";
import Online from "../assets/images/icon-online.svg";
import Budget from "../assets/images/icon-budgeting.svg";
import Onboarding from "../assets/images/icon-onboarding.svg";
import Icon_api from "../assets/images/icon-api.svg";
import Dollars from "../assets/images/image-currency.jpg";
import Restaurant from "../assets/images/image-restaurant.jpg";
import Plane from "../assets/images/image-plane.jpg";
import Confetti from "../assets/images/image-confetti.jpg";
import Footer from "./Footer/Footer.jsx";
import "./landing.css";

function Landing() {
  return (
    <>
      <div className="img-container">
        <Navigation></Navigation>
        <img src={MobIcon} alt="icon banner" className="w-full mobil" />

        <img src={Cell} alt="cellphones" className="cell-img" />
      </div>

      <h1 className="text-center text-5xl ml-2 mr-2 ">
        Next generation digital banking
      </h1>

      <p className="text-center ml-12 mr-12 text-lg mt-4">
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>

      <div className="flex justify-center mt-8">
        <button className="rounded-full p-4 bg-red-600 text-white grad-back text-lg w-52">
          Request Invite
        </button>
      </div>

      <div className="grayback">
        <h1 className="text-center text-5xl ml-2 mr-2 ">
          Why choose Easybank?
        </h1>
        <p className="text-center ml-12 mr-12 text-lg mt-4">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="flex justify-center mt-8">
          <img src={Online} alt="card image" className="text-center" />
        </div>

        <h1 className="text-center text-5xl ml-2 mr-2 mt-8">Online Banking</h1>
        <p className="text-center ml-12 mr-12 text-lg mt-4">
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </p>
        <div className="flex justify-center mt-8">
          <img src={Budget} alt="card image" className="text-center" />
        </div>

        <h1 className="text-center text-5xl ml-2 mr-2 mt-8">
          Simple Budgeting
        </h1>
        <p className="text-center ml-12 mr-12 text-lg mt-4">
          See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits.
        </p>
        <div className="flex justify-center mt-8">
          <img src={Onboarding} alt="card image" className="text-center" />
        </div>

        <h1 className="text-center text-5xl ml-2 mr-2 mt-8">Fast Onboarding</h1>
        <p className="text-center ml-12 mr-12 text-lg mt-4">
          We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away.
        </p>
        <div className="flex justify-center mt-8">
          <img src={Icon_api} alt="card image" className="text-center" />
        </div>

        <h1 className="text-center text-5xl ml-2 mr-2 mt-8">Open API</h1>
        <p className="text-center ml-12 mr-12 text-lg mt-4">
          Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier.
        </p>
      </div>

      {/* Latest Articles Section */}

      <h1 className="text-center text-5xl ml-2 mr-2 mt-8">Latest Articles</h1>

      <div className="flex justify-center mt-8 img-cont ml-6 mr-6">
        <img src={Dollars} alt="card image" className="text-center resize" />
      </div>

      <div className="article ml-20 mr-20 mt-6 mb-12">
        <p className="text-sm">By Claire Robinson</p>
        <h3 className="text-xl font-bold mt-2 mb-2">
          Receive money in any currency with no fees
        </h3>
        <p>
          The world is getting smaller and we’re becoming more mobile. So why
          should you be forced to only receive money in a single …
        </p>
      </div>

      <div className="flex justify-center mt-8 img-cont ml-6 mr-6">
        <img src={Restaurant} alt="card image" className="text-center resize" />
      </div>

      <div className="article ml-20 mr-20 mt-6 mb-12">
        <p className="text-sm">By Wilson Hutton</p>
        <h3 className="text-xl font-bold mt-2 mb-2">
          Treat yourself without worrying about money
        </h3>
        <p>
          Our simple budgeting feature allows you to separate out your spending
          and set realistic limits each month. That means you …
        </p>
      </div>

      <div className="flex justify-center mt-8 img-cont ml-6 mr-6">
        <img src={Plane} alt="card image" className="text-center resize" />
      </div>

      <div className="article ml-20 mr-20 mt-6 mb-12">
        <p className="text-sm">By Wilson Hutton</p>
        <h3 className="text-xl font-bold mt-2 mb-2">
          Take your Easybank card wherever you go
        </h3>
        <p>
          We want you to enjoy your travels. This is why we don’t charge any
          fees on purchases while you’re abroad. We’ll even show you …
        </p>
      </div>

      <div className="flex justify-center mt-8 img-cont ml-6 mr-6">
        <img src={Confetti} alt="card image" className="text-center resize" />
      </div>

      <div className="article ml-20 mr-20 mt-6 mb-40">
        <p className="text-sm">By Claire Robinson</p>
        <h3 className="text-xl font-bold mt-2 mb-2">
          Our invite-only Beta accounts are now live!
        </h3>
        <p>
          After a lot of hard work by the whole team, we’re excited to launch
          our closed beta. It’s easy to request an invite through the site ...
        </p>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Landing;
