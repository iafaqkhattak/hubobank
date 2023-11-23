import React from "react";
import star from "../images/star.png";
import shield from "../images/shield.png";
import tele from "../images/tele.png";

const HowWeWork = () => {
  return (
    <div className="container-fluid ">
      <div className="row vh-100 how-we-work-main">
        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center   ">
          <div className="">
            <h2 className="work-h2 ">
              You do the business, <br /> we’ll handle the money.
            </h2>
            <p className="work-para my-5">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
          </div>
          <div className="align-self-start get-started-btn align-items-center d-flex justify-content-center">
            <span className="get-started-txt">Get Started</span>
          </div>
        </div>
        <div className="col-lg-6 bg-danger d-flex flex-column align-items-center justify-content-center ">
          <div className="Star ">
            <h2 className="">Rewards</h2>
            <p>
              The best credit cards offer some tantalizing <br />
              combinations of promotions and prizes
            </p>
            <img src={star} alt="start-logo" />
          </div>
          <div className="Shield ">
            <h2 className="">100% Secured</h2>
            <p>
              We take proactive steps make sure your <br /> information and
              transactions are secure.
            </p>
            <img src={shield} alt="start-logo" />
          </div>
          <div className="Tele ">
            <h2 className="">Balance Transfer</h2>
            <p>
              A balance transfer credit card can save <br /> you a lot of money
              in interest charges.
            </p>
            <img src={tele} alt="start-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
