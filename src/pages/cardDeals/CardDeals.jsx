import React from "react";
import Scan from "../images/Scan.svg";
import ArrowDropDown from "../images/arrow_drop_down.svg";
import Paypal from "../images/paypal.svg";
import Apple from "../images/apple.svg";
import Visa from "../images/visa.svg";
import Shopify from "../images/Shopify.svg";
import Victor1 from "../images/Frame3.png";

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
        <div className=" col-lg-6 Right-Deals deals-bg-img d-flex align-items-center justify-content-center ">
          <div className="scan-credits p-3 d-flex flex-column align-items-center">
            <div className="scan-logo d-flex justify-content-center">
              <img className=" w-75 " src={Scan} alt="scanner logo" />
            </div>
            <div className="my-3">
              <h2 className="scan-title">Scan Credit Cards</h2>
            </div>
            <div>
              <p className="scan-para">
                Scan yourcredit card in <br /> 4 minutes.
              </p>
            </div>
          </div>
          <div className="pay-method d-flex flex-column  align-items-center justify-content-center w-50 ">
            <div className="d-flex w-75 flex-row align-items-center  justify-content-between my-3 ">
              <div className="payment-method-para ">Pay Method</div>
              <div>
                <img src={ArrowDropDown} alt="Arrow Drop Down" />
              </div>
            </div>

            <div className="logos d-flex flex-row align-items-center">
              <div className="mx-2 white-rectangle d-flex justify-content-center ">
                <img className="w-50" src={Paypal} alt="Paypal logo" />
              </div>
              <div className="mx-2 white-rectangle d-flex justify-content-center">
                <img className="w-50" src={Apple} alt="Apple logo" />
              </div>
              <div className="mx-2 white-rectangle d-flex justify-content-center">
                <img className="w-50" src={Visa} alt="Visa logo" />
              </div>
              <div className="mx-2 white-rectangle d-flex justify-content-center">
                <img className="w-75" src={Shopify} alt="Shopify logo" />
              </div>
            </div>
          </div>
          <div className="Online-analysis d-flex flex-column p-3 ">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div>
                <h2 className="analysis-txt">Online Analysis</h2>
              </div>
              <div className="month-poly d-flex flex-row align-items-center justify-content-center">
                <div className="analysis-txt d-flex align-items-center  justify-content-center">
                  <p className="my-0"> 1 Month</p>
                </div>
                <div className="align-items-center justify-content-center">
                  <img
                    className=" "
                    src={ArrowDropDown}
                    alt="Arrow Drop Down logo"
                  />
                </div>
              </div>
            </div>
            <div className="income+expense d-flex flex-row align-items-center justify-content-between my-4">
              <div className="d-flex flex-column ">
                <div className="income-price">$ 2,334,67 </div>
                <div className="income-txt">Income </div>
              </div>
              <div>
                <div className="expense-price">$ 5.31M</div>
                <div className="expense-txt">Expenses</div>
              </div>
            </div>
            <div className="vector- d-flex align-items-center justify-content-center my-2">
              <img src={Victor1} alt="victor 1 " />
            </div>
            <div className="months d-flex flex-row align-items-center justify-content-center">
              <h4 className="mx-1 months-h4">Jan</h4>
              <h4 className="mx-1  months-h4">Feb</h4>
              <h4 className="mx-1 month-mar d-flex align-items-center justify-content-center">
                Mar
              </h4>
              <h4 className="mx-1  months-h4">Apr</h4>
              <h4 className="mx-1  months-h4">May</h4>
              <h4 className="mx-1  months-h4">Jun</h4>
              <h4 className="mx-1  months-h4">Jul</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeals;
