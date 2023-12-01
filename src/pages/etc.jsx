import React from "react";

const etc = () => {
  return (
    <div>
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
      <div className="pay-method d-flex flex-column  align-items-center justify-content-center  w-50 h-25 ">
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
    </div>
  );
};

export default etc;
