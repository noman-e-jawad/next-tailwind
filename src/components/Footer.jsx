import React from "react";

const Footer = () => {
  return <footer className="fluid bg-dark-blue py-12 flex flex-col items-center justify-center gap-12 w-full md:flex-row md:items-start relative">
    {/* footer form */}
    <div className="flex flex-row justify-between w-full order-1 md:order-4">
      <input type="email" placeholder="Updates in your inbox" className="button-primary bg-white body-text focus-visible:outline-0 text-left font-normal shadow-none" />
      <button type="submit" className="button-primary shadow-none">GO</button>
    </div>
    {/* footer navigation */}
    <div className="flex flex-row justify-between w-full px-9 order-2">
        <ul className="nav-item">
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
        <ul className="nav-item">
          <li>Careers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
    </div>
    {/* icon box */}
    <div className="flex flex-col gap-12 w-full items-center order-3 md:order-1 md:flex-col-reverse md:justify-between h-36">
      <ul className="flex flex-row gap-9 md:gap-3">
        <li><i ><img className="social-icon" src="/images/icon-facebook.svg" /></i></li>
        <li><i ><img className="social-icon" src="/images/icon-youtube.svg" /></i></li>
        <li><i ><img className="social-icon" src="/images/icon-twitter.svg" /></i></li>
        <li><i ><img className="social-icon" src="/images/icon-pinterest.svg" /></i></li>
        <li><i ><img className="social-icon" src="/images/icon-instagram.svg" /></i></li>
      </ul>
    {/* footer logo */}
    <img className="w-40 h-auto order-2" src="/images/logo-white.svg" />
    </div>
    {/* copyright */}
    <p className="text-dark-graishBlue text-sm order-4 md:order-3 md:absolute md:self-end md:right-40">Copyright 2020. All Rights Reserved</p>
  </footer>
};

export default Footer;
