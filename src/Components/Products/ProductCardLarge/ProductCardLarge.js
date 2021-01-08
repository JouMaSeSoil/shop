import React from "react";
import "./ProductCardLarge.css";
import productlarge from "./productlarge.jpeg";

const ProductCardLarge = ({ updateInterestedBasket }) => {
  return (
    <div className="">
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 mw5 grow center shadow-5">
        <img
          src={productlarge}
          className="db w-100 br2 br--top"
          alt="Kitten looking menacing."
        />
        <div className="pa2 ph3-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="f5 f4-ns mv0">500l +</h1>
            </div>
            <div className="dtc tr">
              <h2 className="f5 mv0">Contact for Pricing</h2>
            </div>
          </div>
          <p className="f6 lh-copy measure mt2 mid-gray">
            If you are interested in ordering large quantities of soil we do
            onsite mixing or pre-mixed deliveries depending on size. Contact for
            pricing!
          </p>
        </div>
      </article>
      <div className="flex items-center mb2 centerPersonal b--black-10 shadow-5 pa3 m5 grow">
        <input
          className="mr2 myInput"
          type="checkbox"
          id="spacejam"
          value="lrgSoil"
          onClick={updateInterestedBasket}
        />
        <label htmlFor="spacejam" className="lh-copy">
          I'm interested
        </label>
      </div>
    </div>
  );
};
export default ProductCardLarge;
