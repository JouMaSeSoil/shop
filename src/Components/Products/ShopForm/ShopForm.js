import React from "react";
import "./ShopForm.css";
import bag from "./bag.jpg";
import large from "./large.png";

const ShopForm = ({ bagQuantity, interested, onRouteChange }) => {
  return (
    <div className="centerPersonal mv4 shadow-5 b--black-10 grow">
      <div className="shopCard">
        <h1 className="ma3 pa3 colourPrimary">Shopping Basket</h1>
        <div className="card1 "></div>
        <ul className="list pl0 mt0 measure center">
          <li className="flex items-center lh-copy  ph0-l bb b--black-10 padsides">
            <img className="w2 h2 w3-ns h3-ns br-100 pa3" src={bag} alt="" />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">30lt bag</span>
              <span className="f6 db black-70">Living Soil</span>
            </div>
            <div>
              <p className="f6 link  hover-dark-gray pa3">x{bagQuantity}</p>
            </div>
          </li>
          {interested && (
            <li className="flex items-center lh-copy ph0-l bb b--black-10 padsides">
              <img
                className="w2 h2 w3-ns h3-ns br-100 pa3"
                src={large}
                alt=""
              />
              <div className="pl3 flex-auto">
                <span className="f6 db black-70">500lt +</span>
                <span className="f6 db black-70">Living soil</span>
              </div>
              <div>
                <p className="f6 link  hover-dark-gray pa3">Interested</p>
              </div>
            </li>
          )}
        </ul>
        <div className="card1"></div>
        <div className="m-5">  </div>
        <button
          className="btn text-white colourBlue"
          onClick={() => onRouteChange("checkout")}
          activeClass="active"
          to="basket"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );

  // style={{ height: 250, width: 250 }}
};
export default ShopForm;
