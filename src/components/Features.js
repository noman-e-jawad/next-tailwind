import React from "react";

const Features = () => {
  return (
    <section>
      <div className="fluid py-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="py-3 md:pr-3 lg:pr-5">
            <h2 className="section-heading"> What’s different about Manage?</h2>
            <p className=" py-3 body-text w-full lg:w-10/12">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="md:pl-3 lg:pl-5">
            <div className="feature-box">
              <h3 className="feature-box-heading">
                <span className="feature-box-number">01</span>
                Track company-wide progress
              </h3>
              <p className="feature-box-desc">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-heading">
                <span className="feature-box-number">02</span>
                Advanced built-in reports
              </h3>
              <p className="feature-box-desc">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
            <div className="feature-box">
              <h3 className="feature-box-heading">
                <span className="feature-box-number">03</span>
                Everything you need in one place
              </h3>
              <p className="feature-box-desc">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
