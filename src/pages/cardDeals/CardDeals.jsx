import React from "react";
import Scan from "../images/Scan.svg";

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
        <div className=" col-lg-6 Right-Deals d-flex align-items-center  justify-content-center bg-warning">
          <div className="scan-credits p-5 d-flex flex-column align-items-center">
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
          <div className="pay-method d-flex flex-column border align-items-center justify-content-center bg-danger w-50 h-50">
            <div className="txt+poly d-flex w-100 flex-row align-items-center  justify-content-between">
              <div className="txt">Paymethod</div>
              <div>Polygon</div>
            </div>

            <div className="logos"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeals;
