import React from "react";

const Features = () => {
  return (
    <section className="fluid py-20 bg-white grid grid-cols-1 md:gap-6 lg:gap-10  lg:grid-cols-2">
      <div className="pb-3 ">
        <h2 className="section-heading"> What’s different about Manage?</h2>
        <p className=" pt-5 body-text w-full lg:w-10/12">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="flex flex-col gap-12 mt-5">
        <div className="feature-box">
          <h3 className="feature-box-heading">
            <span className="feature-box-number">01</span>
            Track company-wide progress
          </h3>
          <p className="lg:ml-24 body-text text-left">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="feature-box">
          <h3 className="feature-box-heading">
            <span className="feature-box-number">02</span>
            Advanced built-in reports
          </h3>
          <p className="lg:ml-24 body-text text-left">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="feature-box">
          <h3 className="feature-box-heading">
            <span className="feature-box-number">03</span>
            Everything you need in one place
          </h3>
          <p className="lg:ml-24 body-text text-left">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
