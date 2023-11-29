import React from "react";

const CardDeals = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-lg-6 d-flex align-items-center  justify-content-center  ">
          <div className="Deals-left d-flex flex-column me-5  align-items-start  justify-content-center">
            <div className="my-3">
              <h1 className="cardDeal-title">
                Find a better card deal
                <br /> in few easy steps.
              </h1>
            </div>
            <div className="my-3">
              <p className="cardDeal-para">
                Arcu tortor, purus in mattis at sed integer faucibus. <br />{" "}
                Aliquet quis aliquet eget mauris tortor.ç Aliquet
                <br /> ultrices ac, ametau.
              </p>
            </div>
            <div className="align-self-start get-started-btn align-items-center d-flex justify-content-center">
              <span className="get-started-txt">Get Started</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
};

export default CardDeals;
