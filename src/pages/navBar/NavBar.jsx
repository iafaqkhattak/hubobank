import React from "react";
import logoImg from "../images/Logo.png";
export default function NavBar() {
  return (
    <div className="pt-1 bg-col d-flex flex-row justify-content-between">
      <div className="">
        <img src={logoImg} alt="logo here" />
      </div>

      <div className=" nav-text me-5 w-50 d-flex flex-row align-items-center justify-content-end">
        <ul className="  my-0 w-50 d-flex flex-row list-unstyled align-items-center justify-content-between">
          <li className=" ">Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Solution</li>
        </ul>
      </div>
    </div>
  );
}
