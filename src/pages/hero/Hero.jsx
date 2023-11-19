import React from "react";
import discountLogo from "../images/Discount.png";
import frame1 from "../images/Frame 1.png";

export default function Hero() {
  return (
    <div className=" container-fluid vh-100">
      <div className="row h-50">
        <div className="bg-danger col-lg-6 d-flex h-100 flex-row align-items-center justify-content-center">
          <img
            className="discount-logo flex-row align-items-center justify-content-center"
            src={discountLogo}
            alt="discount logo"
          />
          <div className="discount-typo discount-layout">
            <h4 className="discount-text ">20% DISCOUNT FOR 1 MONTH ACCOUNT</h4>
          </div>
        </div>

        <div className="  col-lg-6 ">Hello</div>
      </div>
    </div>
  );
}
