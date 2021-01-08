import React from "react";
import ProductCard from "./ProductCard/ProductCard.js";
import ProductCardLarge from "./ProductCardLarge/ProductCardLarge.js";
import ShopForm from "./ShopForm/ShopForm";
import "./Product.css";

const Product = ({
  setQuantity,
  bagQuantity,
  updateInterestedBasket,
  interested,
  onRouteChange,
}) => {
  return (
    <div id="Product" className="bg-white  ">
      <h1 className="f1  title">Our Products:</h1>
      <div className="container">
        <div className=" card centerPersonal">
          <ProductCard
            setQuantity={setQuantity}
            bagQuantity={bagQuantity}
            className=""
          />
        </div>

        <div className="centerPersonal card">
          <ProductCardLarge
            updateInterestedBasket={updateInterestedBasket}
            className=""
          />
        </div>

        <div className="centerPersonal shop">
          <ShopForm
            className=""
            bagQuantity={bagQuantity}
            interested={interested}
            onRouteChange={onRouteChange}
          />
        </div>
      </div>
    </div>
  );

  // style={{ height: 250, width: 250 }}
};
export default Product;
