import React from "react";
import discountLogo from "../images/Discount.png";
import frame1 from "../images/Frame 1.png";
import getStarted from "../images/getStarted.png";
export default function Hero() {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="h-100 col-lg-6 d-flex align-items-center justify-content-center ">
          <div className="d-flex flex-column align-items-center justify-content-center col-lg-9 get-started-main ">
            <div className="d-flex align-self-start text-white rounded-5 px-2 align-items-center justify-content-start bg-dark">
              <div className="d-flex flex-row align-items-center ">
                <img src={discountLogo} alt="mini-logo" />
              </div>
              <div className="d-flex flex-row align-items-center">
                <p className="my-0"> 20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
              </div>
            </div>
            <div className="align-self-start ">
              <h2 className="top-text"> The Next</h2>
              <h2 className="gen-text">Generation</h2>
              <h2 className="top-text">Payment Methods.</h2>
            </div>

            <div className="get-started ">
              <img src={getStarted} alt="get started button" />
            </div>
            <div className="top-para">
              <p>
                Our team of experts uses a methodology to identify the credit
                cards most likely to fit your needs. We examine annual
                percentage rates, annual fees.
              </p>
            </div>
          </div>
        </div>

        <div className="h-100 col-lg-6 d-flex align-items-center justify-content-center">
          <img className="w-100 h-100" src={frame1} alt="xysgcsd" />
        </div>
      </div>
      <div className="row h-25 bg-navbar">
        <div className="col-lg-12 d-flex flex-row align-items-center justify-content-center">
          <div className="me-4 d-flex flex-row align-items-center justify-content-center">
            <h4 className="my-0 me-3 users-style"> 3800+</h4>
            <span className="users pe-5 my-0 border-right-1 right-bordered-span">
              Users
            </span>
          </div>
          <div className="me-4  d-flex flex-row align-items-center justify-content-center">
            <h4 className="my-0 me-3 users-style"> 230+</h4>
            <span className="pe-5 my-0 border-right-1 right-bordered-span users">
              TRUSTED BY COMPANY
            </span>
          </div>
          <div className=" me-4  d-flex flex-row align-items-center justify-content-center">
            <h4 className="my-0 me-3 users-style"> $230M+</h4>
            <span className="pe-5 my-0 border-right-1 users ">TRANSACTION</span>
          </div>
        </div>
      </div>
    </div>
  );
}
