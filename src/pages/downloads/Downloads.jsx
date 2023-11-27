import React from "react";
import DribbleLogo from "../images/dribble-logo.svg";
import PolyRed from "../images/Polygon.svg";
import NetflixLogo from "../images/Netflix-Logo.svg";
import MCLogo from "../images/mc.svg";
import PolyGreen from "../images/Polygon-Green.svg";
import Paypal from "../images/paypal.svg";
import Check from "../images/greenTik.svg";
import AppStore from "../images/AppStore.svg";
import GooglePlay from "../images/GooglePlay.svg";

const Downloads = () => {
  return (
    <div className="container-fluid vh-100 my-5">
      <div className="row h-100 my-5">
        <div className="col-lg-6  d-flex paypal-main paypal-main flex-row">
          <div className=" charges-w  d-flex align-items-center justify-content-center ">
            <div className="transactions-main d-flex flex-column px-3 card-trans">
              <div className="trc-txt my-4">Last Transaction</div>

              <div className="d-flex flex-row w-100 justify-content-rounded">
                <div className="logo+dec d-flex flex-row me-5 w-100">
                  <div className="logo w-25 me-2">
                    <img
                      className="w-100"
                      src={DribbleLogo}
                      alt="dribble logo"
                    />
                  </div>
                  <div className="desc ">
                    <h2 className="trc-h2">Dribblle Pro</h2>
                    <p className="trc-p">15 Days Ago</p>
                  </div>
                </div>
                <div className="Price-main d-flex flex-row">
                  <div className="polygon me-1">
                    <img className="" src={PolyRed} alt="" />
                  </div>
                  <div className="price">
                    <h3 className="trc-h3 my-1">-$250,93</h3>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row w-100 justify-content-between">
                <div className="logo+dec d-flex flex-row me-5 w-100">
                  <div className="logo w-25 circular-div me-2">
                    <img
                      className="w-100 "
                      src={NetflixLogo}
                      alt="dribble logo"
                    />
                  </div>
                  <div className="desc  ">
                    <h2 className="trc-h2">Netflix</h2>
                    <p className="trc-p">4 Days Ago</p>
                  </div>
                </div>
                <div className="Price-main d-flex flex-row ">
                  <div className="polygon me-1">
                    <img src={PolyRed} alt="" />
                  </div>
                  <div className="price">
                    <h3 className="trc-h3 my-1">-$250,93</h3>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row w-100 justify-content-between">
                <div className="logo+dec d-flex flex-row me-5 w-100 ">
                  <div className="logo w-25 circular-div me-2">
                    <img src={MCLogo} className="w-30" alt="dribble logo" />
                  </div>
                  <div className="desc ">
                    <h2 className="trc-h2">Manulife Cash</h2>
                    <p className="trc-p">4 Days Ago</p>
                  </div>
                </div>
                <div className="Price-main d-flex flex-row ">
                  <div className="polygon  me-1">
                    <img className="" src={PolyGreen} alt="" />
                  </div>
                  <div className="price ">
                    <h3 className="trc-h3 my-1">-$250,93</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="paypal-w d-flex flex-column paypal-position align-items-center justify-content-center h-50 paypal-bg">
            <div className=" d-flex flex-row justify-content-start w-100 px-4">
              <div className="paypal-logo circular-div me-3">
                <img className="" src={Paypal} alt="paypal-logo" />
              </div>

              <div className="d-flex flex-column">
                <h2 className="paypal-txt"> Paypal</h2>
                <p className="checkout-txt"> CheckOut</p>
              </div>
            </div>

            <div className="price-paypal d-flex flex-row align-items-center justify-content-between w-75">
              <div className="total">
                <p className="checkout-txt my-0 mb-1">Total</p>
                <h3 className="paypal-txt">$210</h3>
              </div>
              <div className="change-btn-main d-flex align-items-center justify-content-between">
                <span className="change-btn bg-transparent">Change</span>
              </div>
            </div>
            <div className="make-payment-btn d-flex align-items-center justify-content-center w-75 my-4">
              Make payment
            </div>
          </div>
          <div className=" great-w great great-position bg-white p-2 rounded ">
            <div className="main-great d-flex flex-row align-items-center justify-content-center">
              <div className="great-logo me-2">
                <img src={Check} alt="Great" />
              </div>
              <div className="great-desc"></div>
              <p className="my-0">Great! Your Payment is succesfully.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-start ">
          <div className=" my-4 align-items-center d-flex">
            <h1 className="control-title">
              Easily control your <br />
              billing & invoicing.
            </h1>
          </div>
          <div className=" my-4">
            <p className="control-para">
              Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices
              ametodio aenean neque. Fusce ipsum orci <br /> rhoncus
              aliporttitor integer platea placerat.
            </p>
          </div>
          <div className="logos d-flex flex-row">
            <div className="App store me-5">
              <img src={AppStore} alt="App Store Logo" />
            </div>
            <div className="Google Play">
              <img src={GooglePlay} alt="App Store Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
