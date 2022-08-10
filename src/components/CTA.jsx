import React from "react";

const CTA = () => {
  return (
    <section className="container-fluid bg-primary-red py-24 flex flex-col justify-center items-center px-10 gap-5 mt-5 md:flex-row md:justify-between md:px-40 bg-[url('/images/bg-simplify-section-mobile.svg')] bg-left bg-no-repeat md:bg-[url('/images/bg-simplify-section-desktop.svg')] md:bg-right md:bg-contain">
      <h2 className="banner-heading  md:w-1/2 md:text-left md:section-heading text-white md:text-white md:leading-snug lg:leading-snug">
        Simplify how your team works today.
      </h2>
      <button className="button-primary bg-white text-primary-red">
        Get Started
      </button>
    </section>
  );
};

export default CTA;
