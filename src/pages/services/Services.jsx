import React from "react";

const Services = () => {
  return (
    <div className="container my-5">
      <div className="row h-50 services-bg p-5 ">
        <div className="col-lg-6 ps-4 d-flex flex-column align-items-start justify-content-center">
          <div className="">
            <p className="try-now">Let’s try our service now!</p>
          </div>
          <div className="">
            <p className="try-para">
              Everything you need to accept card payments <br /> and grow your
              business anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-end">
          <div className="align-self-center get-started-btn align-items-center d-flex justify-content-center">
            <span className="get-started-txt">Get Started</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
