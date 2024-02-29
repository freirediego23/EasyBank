import React from "react";

import Navigation from "./Navigation/Navigation.jsx";
import MobIcon from "../assets/images/bg-intro-mobile.svg";
import Cell from "../assets/images/image-mockups.png";
import Cell_Large_Bg from "../assets/images/bg-intro-desktop.svg";
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
      <Navigation></Navigation>
      <div className="lg:flex lg:flex-row-reverse">
        <div className="img-container ">
          <img src={MobIcon} alt="icon banner" className="w-full mobil " />
          <img src={Cell} alt="cellphones" className="cell-img " />
          <img
            src={Cell_Large_Bg}
            alt="cellphones-large screen"
            className="mobil-large"
          />
        </div>

        <div className="head-text-cont">
          <div className="head-content">
            <h1 className=" lg:text-left text-center text-5xl ml-2 mr-2 ">
              Next generation digital banking
            </h1>

            <p className="lg:text-left lg:ml-2 text-center ml-12 mr-12 text-lg mt-4 low-gray font-bold">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>

            <div className="lg:block flex justify-center mt-8">
              <button className="rounded-full p-4 bg-red-600 text-white grad-back text-lg w-52">
                Request Invite
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grayback pb-20">
        <div className="gray-wrap">
          <div className="top-header lg:mb-5">
            <h1 className="text-center text-5xl ml-2 mr-2 lg:ml-0 lg:text-left">
              Why choose Easybank?
            </h1>
            <p className="text-center ml-12 mr-12 text-lg mt-4 low-gray font-bold lg:text-left lg:ml-0">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          {/* Paragraphs below easybank */}
          <div className="grid-container">
            <div className="para-cont">
              <div className="flex justify-center lg:justify-start mt-8">
                <img src={Online} alt="card image" className="text-center" />
              </div>

              <h1 className="text-center text-2xl ml-2 mr-2 mt-8 lg:ml-0">
                Online Banking
              </h1>
              <p className="text-center ml-12 mr-12 text-lg mt-4 low-gray font-bold lg:ml-0 lg:mr-0">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>

            <div className="para-cont">
              <div className="flex justify-center lg:justify-start mt-8">
                <img
                  src={Budget}
                  alt="card image"
                  className="text-center lg:text-left"
                />
              </div>

              <h1 className="text-center text-2xl ml-2 mr-2 mt-8 lg:ml-0">
                Simple Budgeting
              </h1>
              <p className="text-center ml-12 mr-12 text-lg mt-4 low-gray font-bold lg:ml-0 lg:mr-0">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>

            <div className="para-cont">
              <div className="flex justify-center lg:justify-start mt-8">
                <img
                  src={Onboarding}
                  alt="card image"
                  className="text-center lg:text-left"
                />
              </div>

              <h1 className="text-center text-2xl ml-2 mr-2 mt-8 lg:ml-0">
                Fast Onboarding
              </h1>
              <p className="text-center ml-12 mr-12 text-lg mt-4 low-gray font-bold lg:ml-0 lg:mr-0">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>

            <div className="para-cont ">
              <div className="flex justify-center lg:justify-start mt-8">
                <img src={Icon_api} alt="card image" className="text-center" />
              </div>

              <h1 className="text-center text-2xl ml-2 mr-2 mt-8 lg:ml-0 lg:mr-0">
                Open API
              </h1>
              <p className="text-center ml-12 mr-12 text-lg mt-4 low-gray font-bold lg:ml-0 lg:mr-0">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}

      <div className="article-container gray-wrap">
        <h1 className="text-center text-5xl ml-2 mr-2 mt-20 lg:ml-0 lg:text-left lg:mb-8">
          Latest Articles
        </h1>

        <div className="grid-container">
          <div className="grid-item">
            <div className="flex justify-center mt-8 img-cont ml-6 mr-6 lg:ml-0 lg:mr-0 lg:h-56">
              <img
                src={Dollars}
                alt="card image"
                className="text-center resize"
              />
            </div>

            <div className="article ml-20 mr-20 mt-6 mb-12 lg:ml-5 lg:mr-0">
              <p className="text-sm">By Claire Robinson</p>
              <h3 className="text-xl font-bold mt-2 mb-2">
                Receive money in any currency with no fees
              </h3>
              <p>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="flex justify-center mt-8 img-cont ml-6 mr-6 lg:ml-0 lg:mr-0 lg:h-56">
              <img
                src={Restaurant}
                alt="card image"
                className="text-center resize"
              />
            </div>

            <div className="article ml-20 mr-20 mt-6 mb-12 lg:ml-5 lg:mr-10">
              <p className="text-sm">By Wilson Hutton</p>
              <h3 className="text-xl font-bold mt-2 mb-2">
                Treat yourself without worrying about money
              </h3>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="flex justify-center mt-8 img-cont ml-6 mr-6 lg:ml-0 lg:mr-0 lg:h-56">
              <img
                src={Plane}
                alt="card image"
                className="text-center resize"
              />
            </div>

            <div className="article ml-20 mr-20 mt-6 mb-12 lg:ml-5 lg:mr-10">
              <p className="text-sm">By Wilson Hutton</p>
              <h3 className="text-xl font-bold mt-2 mb-2">
                Take your Easybank card wherever you go
              </h3>
              <p>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>

          <div className="grid-item">
            <div className="flex justify-center mt-8 img-cont ml-6 mr-6 lg:ml-0 lg:mr-0 lg:h-56">
              <img
                src={Confetti}
                alt="card image"
                className="text-center resize"
              />
            </div>

            <div className="article ml-20 mr-20 mt-6 mb-40 lg:ml-5 lg:mr-7">
              <p className="text-sm">By Claire Robinson</p>
              <h3 className="text-xl font-bold mt-2 mb-2">
                Our invite-only Beta accounts are now live!
              </h3>
              <p>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Landing;
