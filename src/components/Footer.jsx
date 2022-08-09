import React from "react";

const Footer = () => {
  return (
    <footer className=" fluid w-full  h-full flex flex-col justfiy-center gap-12 items-center bg-dark-blue py-12 md:flex-row-reverse md:items-start  ">
      {/* Form */}
      <div className="flex gap-4">
        <input
          type="email"
          placeholder="Updates on your inbox"
          className="text-input"
        />
        <input
          type="submit"
          value="Submit"
          className="button-primary shadow-none"
        />
      </div>
      {/* Menu */}
      <div className="flex w-full justify-center gap-24 text-white">
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#">Carrers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      {/* Extras */}
      <div className="flex w-full flex-col gap-8 md:gap-0 justify-between min-h-full items-center md:flex-col-reverse md:h-36 md:justify-between md:items-center">
        <div className="flex gap-6">
          {/* Social Icons */}
          <img
            src="/images/icon-facebook.svg"
            className="w-8 h-8 object-contain"
          />
          <img
            src="/images/icon-instagram.svg"
            className="w-8 h-8 object-contain"
          />
          <img
            src="/images/icon-pinterest.svg"
            className="w-8 h-8 object-contain"
          />
          <img
            src="/images/icon-twitter.svg"
            className="w-8 h-8 object-contain"
          />
          <img
            src="/images/icon-youtube.svg"
            className="w-8 h-8 object-contain"
          />
        </div>
        <img src="/images/logo-white.svg" alt="" className="w-64" />
      </div>

      <span className="text-white md:absolute md:bottom-0 md:pb-12">
        Copyright 2022. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
