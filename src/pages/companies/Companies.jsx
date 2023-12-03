import React from "react";
import AirBnb from "../images/AirBnb.png";
import Binance from "../images/Binance.png";
import Coinbase from "../images/Coinbase.png";
import Dropbox from "../images/DropBox.png";

const Companies = () => {
  return (
    <div className="container h-100 my-5">
      <div className="row h-100">
        <div className="h-25 d-flex flex-row align-items-center justify-content-center ">
          <div className="d-flex align-items-center justify-content-center me-5">
            <img className="airbnb" src={AirBnb} alt="Air Bnb Logo" />
          </div>
          <div className=" d-flex align-items-center justify-content-center me-5">
            <img className="binance" src={Binance} alt="Binance Logo" />
          </div>
          <div className=" d-flex align-items-center justify-content-center me-5">
            <img className="coinbase my-0" src={Coinbase} alt="Coinbase logo" />
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <img className="dropbox " src={Dropbox} alt="DropBox Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
