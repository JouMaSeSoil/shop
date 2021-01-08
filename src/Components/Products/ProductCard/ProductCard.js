import React from "react";
import "./ProductCard.css";
import product from "./product.jpeg";

const ProductCard = ({ setQuantity, bagQuantity }) => {
  return (
    <div className="">
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 mw5 grow center shadow-5">
        <img
          src={product}
          className="db w-100 br2 br--top"
          alt="Kitten looking menacing."
        />
        <div className="pa2 ph3-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="f5 f4-ns mv0">30l Living Soil</h1>
            </div>
            <div className="dtc tr">
              <h2 className="f5 mv0">R170.00</h2>
            </div>
          </div>
          <p className="f6 lh-copy measure mt2 mid-gray">
            A coco based organic living soil, blended with a mix of bacterial
            microbes and michorrhizae, amended with a selected blend of perlite,
            vermiculite, various rock phosphates, organic fertilizers and more.
            Feeding the plant and microbes throughout their full life cycle.
          </p>
        </div>
      </article>
      <div className="number-input md-number-input shadow-5 grow m5 centerPersonal">
        <button onClick={setQuantity} className="minus btnPadding"></button>
        <input
          id="inputQuantity"
          className="quantity"
          min="0"
          name="quantity"
          value={bagQuantity}
          type="number"
        />
        <button onClick={setQuantity} className="plus btnPadding"></button>
      </div>
    </div>
  );
};
export default ProductCard;
