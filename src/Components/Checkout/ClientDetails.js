import React, { Component } from "react";
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import "./ClientDetails.css";

class ClientDetails extends Component {
 
  constructor() {
    super();
    this.state= {
      disabled:false
    }
  }

  setDisabled = (data) => {
    this.props.onPlaceOrder(data);
    this.setState({ disabled: true });
  }
  

  render(){
  const {onPlaceOrder,
          onNameChange, 
          onEmailChange, 
          onContactChange, 
          onAddressChange, 
          onSuburbChange, 
          onPostalChange, 
          onMessageChange, 
        }= this.props;

  return (
    


    <MDBContainer className="myRow">
      <MDBRow className="myRow" > 
        <MDBCol md="9" className="myRow">
          <MDBCard className="myRow">
            <MDBCardBody className="myRow">
              <form className='white ph2 mt3 w-100' onSubmit={this.setDisabled}>
                <p className='whiteText'> 1 </p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={onNameChange}
                    required
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={onEmailChange}
                    required
                  />
                    <MDBInput
                    label="Contact"
                    icon="phone"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={onContactChange}
                  />
                  <MDBInput
                    label="Address: Line 1"
                    icon="home"
                    group
                    type="text"
                    validate
                    required
                    error="wrong"
                    success="right"
                    onChange={onAddressChange}
                  />
                   <MDBInput
                    label="Address: Line 2"
                    icon="blank"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={onSuburbChange}
                  />
                  <MDBInput
                    label="Postal Code"
                    icon="blank"
                    group
                    type="text"
                    validate
                    required
                    error="wrong"
                    success="right"
                    onChange={onPostalChange}
                  />
                  <MDBInput
                    label="Message to Seller"
                    icon="message"
                    group
                    type="text"
                    validate
                    onChange={onMessageChange}
                  />
                </div>
{/* LOADING BAR FOR WHEN THE BUTTON IS CLICKED */}
                { this.state.disabled ? (
                  <div
                  className="f5 btnC btn-primaryC btn-xlC pointer ma5 pa5 greyBck"
                  >
                      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                  </div>

                ):(
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" 
                    className='btn btn-outline-cyan'
                    disabled = {(this.state.disabled)? "disabled" : ""}
                    data-mdb-ripple-color="dark"
                    //onClick={this.setDisabled}
                    type="submit"
                    >
                    Confirm
                  </MDBBtn>
                </div>
                )}
                
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
}

export default ClientDetails;