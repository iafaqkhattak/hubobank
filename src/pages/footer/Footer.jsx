import React from "react";
import FooterLogo from "../images/footer-logo.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import Linkedin from "../images/linkedin.png";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row h-75 p-4">
        <div className="col-lg-3">
          <div>
            <img className="w-50 h-50" src={FooterLogo} alt="Footer Logo" />
          </div>
          <div className="my-4">
            <p className="footer-para-l">
              A new way to make the payments <br /> easy, reliable and secure.
            </p>
          </div>
        </div>
        <div className="col-lg-3 d-flex align-items-center justify-content-center flex-column ">
          <div className="w-75 d-flex align-items-center justify-content-center">
            <p className="footer-links">useFull Links</p>
          </div>
          <div className=" w-75 d-flex align-items-center justify-content-center">
            <ul className="footer-ul">
              <li>Content</li>
              <li>How it Works</li>
              <li>Create</li>
              <li>Explore</li>
              <li>Terms & Services</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 d-flex align-items-center justify-content-center flex-column">
          <div className=" w-75 d-flex align-items-center justify-content-center ms-4">
            <p className="footer-links">Community</p>
          </div>
          <div className=" w-75 d-flex align-items-center justify-content-center ">
            <ul className="footer-ul">
              <li>Help Center</li>
              <li>Partners</li>
              <li>Suggestions</li>
              <li>Blog</li>
              <li>Newsletters</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 align-items-start justify-content-start flex-column">
          <div className="w-75 d-flex align-items-center justify-content-center ">
            <p className="footer-links">Partner</p>
          </div>
          <div className="w-75 d-flex align-items-center justify-content-center ms-4">
            <ul className="footer-ul">
              <li>Our Partner</li>
              <li>Become a Partner</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row h-25">
        <div className="d-flex flex-column">
          <div className="hr">
            <hr />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-row ">
              <p className="mx-5 cr">Copyright</p>

              <p className="copyright-para">
                &copy; 2023 Your Company. All rights reserved.
              </p>
            </div>

            <div className="">
              <img className="social-icons mx-2" src={Facebook} alt="" />
              <img className="social-icons mx-2" src={Twitter} alt="" />
              <img className="social-icons mx-2" src={Instagram} alt="" />
              <img className="social-icons mx-2" src={Linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
