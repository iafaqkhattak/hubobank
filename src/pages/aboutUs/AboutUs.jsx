import React from "react";
import Slash from "../images/“.svg";
import Founder1 from "../images/founder1.png";
import Founder2 from "../images/founder2.png";
import Founder3 from "../images/founder3.png";

const AboutUs = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="  h-100 d-flex flex-column w-100 align-items-center justify-content-center">
        <div className=" d-flex w-75 flex-row align-items-center justify-content-between">
          <div className="align-items-center justify-content-start d-flex">
            <p className="aboutus-para">
              What people are <br />
              saying about us
            </p>
          </div>
          <div className="">
            <p className="aboutus-para-2">
              Everything you need to accept card payments <br />
              and grow your business anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="Founders w-75 d-flex flex-row ">
          <div className="card1 d-flex flex-column justify-content-between p-4">
            <div className="my-4">
              <img src={Slash} alt="Slash Logo" />
            </div>
            <div className="my-4">
              <p className="card-para">
                Money is only a tool. It will take <br /> you wherever you wish,
                but it <br />
                will not replace you as the
                <br /> driver.
              </p>
            </div>
            <div className="image+des d-flex flex-row ">
              <div className="me-4">
                <img className="w-100 h-75" src={Founder1} alt="Founder Img" />
              </div>
              <div className="d-flex flex-column">
                <div>
                  <p className="founder-para">Herman Jensen</p>
                </div>
                <div>
                  <p className="founder-tag">Founder Leader</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card2 d-flex flex-column justify-content-between p-4">
            <div className="my-4">
              <img src={Slash} alt="Slash Logo" />
            </div>
            <div className="my-4">
              <p className="card-para">
                Money makes your life easier. If <br /> you're lucky to have it,
                you're
                <br /> lucky.
              </p>
            </div>
            <div className="d-flex flex-row ">
              <div className="me-4">
                <img className="w-100 h-75" src={Founder2} alt="Founder Img" />
              </div>
              <div className="d-flex flex-column">
                <div>
                  <p className="founder-para">Steve Mark</p>
                </div>
                <div>
                  <p className="founder-tag">Founder Leader</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card2 d-flex flex-column justify-content-between  p-4 ">
            <div className="my-4">
              <img src={Slash} alt="Slash Logo" />
            </div>
            <div className="my-4">
              <p className="card-para">
                It is usually people in the <br />
                money business, finance, and <br /> international trade that are
                <br /> really rich.
              </p>
            </div>
            <div className=" d-flex flex-row ">
              <div className="me-4">
                <img className="w-100 h-75" src={Founder3} alt="Founder Img" />
              </div>
              <div className="d-flex flex-column">
                <div>
                  <p className="founder-para">Kenn Gallagher</p>
                </div>
                <div>
                  <p className="founder-tag">Founder Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
