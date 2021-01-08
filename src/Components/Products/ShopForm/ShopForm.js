import React from "react";
import "./ShopForm.css";
import bag from "./bag.jpg";
import large from "./large.png";

const Product = ({ bagQuantity, interested, onRouteChange }) => {
  return (
    <div className="centerPersonal mv4 shadow-5 b--black-10 grow">
      <div className="shopCard">
        <h1 className="ma3 pa3">Shopping Basket</h1>
        <ul className="list pl0 mt0 measure center">
          <li className="flex items-center lh-copy  ph0-l bb b--black-10 padsides">
            <img className="w2 h2 w3-ns h3-ns br-100 pa3" src={bag} alt="" />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">30lt bag</span>
              <span className="f6 db black-70">Living Soil</span>
            </div>
            <div>
              <p className="f6 link blue hover-dark-gray pa3">x{bagQuantity}</p>
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
                <p className="f6 link blue hover-dark-gray pa3">Interested</p>
              </div>
            </li>
          )}
        </ul>
        <button
          className="f4 fw4 hover-black no-underline black-70 dib ml2 pv2 ph3 ba btnConfirm mv4 "
          onClick={() => onRouteChange("checkout")}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );

  // style={{ height: 250, width: 250 }}
};
export default Product;
