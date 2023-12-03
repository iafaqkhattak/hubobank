import React from "react";
import FooterLogo from "../images/footer-logo.png";

const Footer = () => {
  return (
    <div className="container bg-warning ">
      <div className="row h-75">
        <div className="col-lg-3">
          <div>
            <img className="w-50 h-50" src={FooterLogo} alt="Footer Logo" />
          </div>
          <div>
            <p>
              A new way to make the payments <br /> easy, reliable and secure.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div>UseFullLinks</div>
          <div>
            <ul>
              <li>Content</li>
              <li>How it Works</li>
              <li>Create</li>
              <li>Explore</li>
              <li>Terms & Services</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div>Community</div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Partners</li>
              <li>Suggestions</li>
              <li>Blog</li>
              <li>Newsletters</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div>Partner</div>
          <div>
            <ul>
              <li>Our Partner</li>
              <li>Become a Partner</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row h-25">babdasbds</div>
    </div>
  );
};

export default Footer;
