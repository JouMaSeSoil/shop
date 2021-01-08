import React from "react";
import bag from "../Products/ShopForm/bag.jpg";
import large from "../Products/ShopForm/large.png";
import emailjs from "emailjs-com";
import "./Checkout.css";
import BankDetails from "./BankDetails/BankDetails"

const Checkout = ({ bagQuantity, interested, onRouteChange, route }) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1n01s4n",
        "template_2igcyqn",
        e.target,
        "user_CjJwAVXqSVa4P9xqDEp9o"
      )
      .then(
        (result) => {
          console.log(result.text);
          onRouteChange("thank");
          alert("Thank you, your order has been recieved!");
        },
        (error) => {
          alert(
            "Sorry there was an error, please try again or contact us at joumasesoilcpt@gmail.com"
          );
          console.log(error.text);
        }
      );
  }

  return (
    <div className="">
      {route === "thank" ? (
        <div>
          <div>Thanks mate, happy growing!</div>
          <BankDetails/>

        </div>
      ) : (
        <div className="centerPersonal mv4 shadow-5 b--black-10 backgroundImg container">
         <div className="centerPersonal mv4 shadow-5 b--black-10 contact-form ma3 grow bg-white notice">
           <h1>Temporary Notice! </h1>
           <div><p>We are currently only serving the Cape Town and surrounds Area, we are in the process of expanding and hope to be supplying all of South Africa in the near Future!</p></div>
         </div>
          <div className="centerPersonal mv4 shadow-5 b--black-10 contact-form ma3 grow bg-white">
            <h1 className="ma3 pa3">Shopping Basket</h1>
            <ul className="list pl0 mt0 measure center">
              <li className="flex items-center lh-copy  ph0-l bb b--black-10 padsides">
                <img
                  className="w2 h2 w3-ns h3-ns br-100 pa3"
                  src={bag}
                  alt=""
                />
                <div className="pl3 flex-auto">
                  <span className="f6 db black-70">30lt bag</span>
                  <span className="f6 db black-70">Living Soil</span>
                </div>
                <div>
                  <p className="f6 link blue hover-dark-gray pa3">
                    x{bagQuantity}
                  </p>
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
                    <p className="f6 link blue hover-dark-gray pa3">
                      Interested
                    </p>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="grow">
            <form
              className="centerPersonal mv4 shadow-5 b--black-10 contact-form ma3  bg-white"
              onSubmit={sendEmail}
            >
              <div className="pa3 ">
                <label className="f5">Name:</label>
                <input type="text" name="user_name" />
              </div>
              <div className="pa3 ">
                <label className="f5 ">Email:</label>
                <input type="email" name="user_email" />
              </div>
              <div className="pa3 ">
                <label className="f5 ">Contact:</label>
                <input type="tel" name="contact" />
              </div>
              <div className="pa3 ">
                <label className="f5">Address:</label>
                <textarea name="Address" />
              </div>
              <div className="pa3 ">
                <label className="f5">Message:</label>
                <textarea name="message" />
              </div>

              <input
                className="hidden"
                type=""
                name="bagQuantity"
                value={bagQuantity}
              />
              {interested && (
                <input
                  className="hidden"
                  type=""
                  name="largeScale"
                  value="I am interested in a Large scale order"
                />
              )}

              <input
                className="f5 btnC btn-primaryC btn-xlC pointer ma3"
                type="submit"
                value="Place Order!"
              />
            </form>
          </div>
          <BankDetails/>
        </div>
      )}
    </div>
  );
};
export default Checkout;
