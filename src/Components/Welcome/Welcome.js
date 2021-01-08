import React from "react";
import "./Welcome.css";
import welcomeImg from "./welcomeImg.jpg";
import { Link } from "react-scroll";

const Welcome = () => {
  return (
    <div
      id="Welcome"
      className="tc-l  ph3 welcomeImg centerPersonal welcome"
      style={{ height: welcomeImg.height }}
    >
      {/* mt4 mt5-m mt6-l */}
      {/* <img src={welcomeImg} className="welcomeImg" /> */}
      <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">
        Welcome to Jou Ma Sê Soil!
      </h1>
      <h2 className="fw1 f3 white-80 mt3 mb4">
        Living soil crafted with a mothers love...
      </h2>

      <Link
        activeClass="active"
        to="Product"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
      >
        <button className="f3 btn btn-primary btn-xl glow pointer">
          {" "}
          Shop{" "}
        </button>
      </Link>
    </div>
  );
};
export default Welcome;
