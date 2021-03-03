import React from "react";
import bag from "../Products/ShopForm/bag.jpg";
import large from "../Products/ShopForm/large.png";
import emailjs from "emailjs-com";
import "./Checkout.css";
import BankDetails from "./BankDetails/BankDetails";
import soilPrice from "../../res";
import ClientDetails from "./ClientDetails.js";
import { getDefaultNormalizer } from "@testing-library/react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';



class Checkout extends React.Component{

  

  constructor (){
    super();
    this.state = {
        email: '',
        name: '',
        address: '',
        suburb:'',
        postal:'',
        contact: '',
        message: '',
        invNo:'',
        disabled:false,
        fullAddress:''

                }
}

//onUpdate={window.scrollTo(0, 0)}

componentDidMount() {
  window.scrollTo(0, 0)
}

onEmailChange = (event) => {
  this.setState({ email: event.target.value });
}
onNameChange = (event) => {
  this.setState({ name: event.target.value });
}
onAddressChange = (event) => {
  this.setState({ address:event.target.value },()=>{ this.onFullAddressChange() });
  
}
onSuburbChange = (event) => {
  this.setState({ suburb:event.target.value }, ()=>{ this.onFullAddressChange() });
}
onPostalChange = (event) => {
  this.setState({ postal:event.target.value }, ()=>{ this.onFullAddressChange() });
}
onFullAddressChange = () => {
  const {  address,suburb,postal} = this.state;
  const fullAddress = address + ', ' + suburb + ', ' + postal;
  this.setState({ fullAddress:fullAddress },()=>{  console.log(this.state.fullAddress) });

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
  const { invNo, email, name,  message,fullAddress,interested} = this.state;

  var interestedString = '';
  if (interested) {
    interestedString = 'I am interested in a large scale order.';
  }
 
var invParams = {
  invNo : invNo,
  email: email,
  name:name,
  address: fullAddress,
  message: message,
  bagQuantity: bagQuantity,
  total: bagQuantity*soilPrice,
  interested: interestedString
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
    console.log('from send email', result.text);
  }
);
}

onPlaceOrder = (e) => {
  console.log(`I've been clicked`);
  console.log('placeing order here');
  const { bagQuantity, interested } = this.props;
  const { email, name, contact, message,fullAddress} = this.state;

  this.onFullAddressChange();
  var hasError = false;
  var interestedString = '';
  if (interested) {
    interestedString = 'I am interested in a large scale order.';
  }
  e.preventDefault();  
  fetch('https://secure-shelf-32680.herokuapp.com/checkout', {
    method: 'post',
    headers:{ 'Content-Type': 'application/json'}, 
    
    body: JSON.stringify({
      
        email: email,
        name: name,
        contact: contact,
        address: fullAddress,
        message: message,
        bagQuantity: this.props.bagQuantity,
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
    if (this.state.invNo !== 'cannot add client or Invoice' ){
   // this.sendEmail();
 
    console.log('before email send');
    }else{
      console.log('failed to add to database', this.state.invNo);
      hasError=true;
    }
  })
  .then(
    (result) => {   
      if (!hasError){   
      this.props.onRouteChange("thank");
      alert("Thank you, your order has been recieved! If you do not recive and email please contact us.");
    }})
    .catch(   (error) => {
      console.log('my error messsage',error, 'body: ', this.body);
      alert(
        "Sorry there was an error, please try again or contact us at joumasesoilcpt@gmail.com"
          );
    })
}



render(){
    const { bagQuantity, interested, onRouteChange, route } = this.props;
    return (
      <div className="">
        {/* IF ROUTE = THANK THEN SHOW BANK DETAILS AND THANK YOU ELSE SHOW SHOPPING CARD AND DETAILS CARD */}
        {route === "thank" ? (
          <div>
            <div className='f2 '>Thanks mate, happy growing!</div>
            <div className='f4 pa4 '>Please ensure your email address is correct: {(this.state.email)}</div>
            <BankDetails />
  
          </div>
        ) : (
          // SHOPPING BASKET FIRST
          <div id='basket' className="centerPersonal mv4 shadow-5 b--black-10 backgroundImg container">
            <div className="centerPersonal mv4 shadow-5 b--black-10 contact-form ma3 bg-white">
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
                    <p className="f6 link hover-dark-gray pa3">
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
                      <p className="f6 link hover-dark-gray pa3">
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
                    <p className="f6 link  hover-dark-gray pa3">
                      R{bagQuantity*soilPrice}.00
                    </p>
                  </div>
                </li>
  
              </ul>
            </div>
            {/* DETAILS FORM, NEEDS TO GET UPDATED TO LOOK BETTER, LOOKS LIKE SHIT */}
            <div className="mb4 ma3 mr2">
              <ClientDetails
              onPlaceOrder = {this.onPlaceOrder}
              onNameChange = {this.onNameChange}
              onEmailChange = {this.onEmailChange}
              onContactChange = {this.onContactChange}
              onAddressChange = {this.onAddressChange}
              onSuburbChange = {this.onSuburbChange}
              onPostalChange = {this.onPostalChange}
              onMessageChange = {this.onMessageChange}
             
              />
            </div>
            <BankDetails/>  
            
          </div>
        )}
      </div>
    );

  }

};

export default Checkout;
