import React from "react";
import bag from "../Products/ShopForm/bag.jpg";
import large from "../Products/ShopForm/large.png";
import emailjs from "emailjs-com";
import "./Checkout.css";
import BankDetails from "./BankDetails/BankDetails";
import soilPrice from "../../res";
import { getDefaultNormalizer } from "@testing-library/react";


class Checkout extends React.Component{



  constructor (){
    super();
    this.state = {
        email: '',
        name: '',
        address: '',
        contact: '',
        message: '',
        invNo:''

                }
}

onEmailChange = (event) => {
  this.setState({ email: event.target.value });
}
onNameChange = (event) => {
  this.setState({ name: event.target.value });
}
onAddressChange = (event) => {
  this.setState({ address: event.target.value });
}
onContactChange = (event) => {
  this.setState({ contact: event.target.value });
}
onMessageChange = (event) => {
  this.setState({ message: event.target.value });
}
setInvNo = (data) => {
  this.setState({ invNo: data });
}

sendEmail = () => {
  const { bagQuantity } = this.props;
  const { invNo, email, name, address, message} = this.state;
var invParams = {
  invNo : invNo,
  email: email,
  name:name,
  address: address,
  message: message,
  bagQuantity: bagQuantity,
  total: bagQuantity*soilPrice
}
emailjs
  .send(
    "service_1n01s4n",
    "Invoice_p6d7nb4",
    invParams,
    "user_CjJwAVXqSVa4P9xqDEp9o"
  )
  .then(
  (result) => {
    console.log('from send emaili', result.text);
  }
);
}

onPlaceOrder = (e) => {
  console.log('placeing order here');
  const { bagQuantity, interested } = this.props;
  const { email, name, contact, address, message} = this.state;
  var interestedString = '';
  if (interested) {
    interestedString = 'I am interested in a large scale order.';
  }
  
  
  fetch('https://secure-shelf-32680.herokuapp.com/checkout', {
    method: 'post',
    headers:{ 'Content-Type': 'application/json'}, 
    body: JSON.stringify({
      
        email: email,
        name: name,
        contact: contact,
        address: address,
        message: message,
        bagQuantity: bagQuantity,
        interested: interestedString,
        total: bagQuantity*soilPrice
    })
  })
  .then(response => response.json())
  .then( invoice =>  {
    this.setState({ invNo: invoice });
    console.log('setting invno',this.state.invNo, invoice)
  })
  .then(response => {
    if (response !== 'cannot add client or Invoice' ){
    this.sendEmail();
    console.log('before email send');
    }else{
      alert(
        "Sorry there was an error, please try again or contact us at joumasesoilcpt@gmail.com"
          );
    }
  })
  .then(
    (result) => {      


      this.props.onRouteChange("thank");
      alert("Thank you, your order has been recieved! If you do not recive and email please contact us.");
    })
    .catch(   (error) => {
      console.log('my error messsage',error);
      alert(
        "Sorry there was an error, please try again or contact us at joumasesoilcpt@gmail.com"
          );
    })
}



render(){
    const { bagQuantity, interested, onRouteChange, route } = this.props;
    return (
      <div className="">
        {route === "thank" ? (
          <div>
            <div className='f2 '>Thanks mate, happy growing!</div>
            <BankDetails />
  
          </div>
        ) : (
          <div id='basket' className="centerPersonal mv4 shadow-5 b--black-10 backgroundImg container">
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
              <li className="flex items-center lh-copy  ph0-l bb b--black-10 padsides">
                
                  <div className="pl3 flex-auto">
                    <span className="f6 db black-70 b">TOTAL:</span>
            
                  </div>
                  <div>
                    <p className="f6 link blue hover-dark-gray pa3">
                      R{bagQuantity*soilPrice}.00
                    </p>
                  </div>
                </li>
  
              </ul>
            </div>
            <div className="grow">
              <form
                onSubmit = {this.onPlaceOrder}
                className="centerPersonal mv4 shadow-5 b--black-10 contact-form ma3  bg-white"
                >
                <div className="pa3 ">
                  <label className="f5">Name:</label>
                  <input type="text"
                          name="user_name"
                          onChange={this.onNameChange}
                          />
                </div>
                <div className="pa3 ">
                  <label className="f5 ">Email:</label>
                  <input type="email" 
                          name="user_email" 
                          onChange={this.onEmailChange}
                          />
                </div>
                <div className="pa3 ">
                  <label className="f5 ">Contact:</label>
                  <input type="tel"
                          name="contact" 
                          onChange={this.onContactChange}
                          />
                </div>
                <div className="pa3 ">
                  <label className="f5">Address:</label>
                  <textarea name="Address" 
                            onChange={this.onAddressChange}
                          />
                </div>
                <div className="pa3 ">
                  <label className="f5">Message:</label>
                  <textarea name="message"
                            onChange={this.onMessageChange}
                            />
                </div>
  
                
                <input
                  className="f5 btnC btn-primaryC btn-xlC pointer ma3"
                  // type="submit"
                  value="Place Order!"
                  onClick = {this.onPlaceOrder}
                />
              </form>
            </div>
            <BankDetails/>
          </div>
        )}
      </div>
    );

  }

};

export default Checkout;
