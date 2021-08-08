import React from "react";
import "./Welcome.css";
import welcomeImg from "./welcomeImg.jpg";
import leaf from "./leaf.png";
import seeds from "./seeds.png"
import cartoon2 from "./cartoon2.png"
import { Link } from "react-scroll";

const Welcome = () => {
  return (
   <div>

  
    <div
      id="Welcome"
      className="tc-l   welcomeImg centerPersonal welcome"
 
    >


      <div   className="whitebck shadow-5 center pa4"> 
      <h1 className="  mb0 titleMine colourPrimary">
       <span className='colourAccent'>Welcome to</span>  <span className='colourPrimary'>Jou Ma Se Soil</span> <span className='colourAccent'></span>
      </h1>
      <h2 className="fw1 f3  mt3 mb4 colourSecondary">
        Living soil crafted with a mother's love...
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
        <button className="f3 btn  btn-lg glow pointer colorAccent">
          {" "}
          Shop{" "}
        </button>
      </Link>

      </div>

     
    </div>
    <div className=" mv-2 card4"></div>
    </div>
  
  );
};
export default Welcome;
