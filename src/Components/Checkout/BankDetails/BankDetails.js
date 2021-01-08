import React from "react";
import "./BankDetails.css"
const BankDetails = () => {
    return (
        <div className="centerPersonal mv4 shadow-5 b--black-10 contact-form ma3 grow bg-white bankDetails">
            <div className="shopCard">
                <h1 className="ma3 pa3">Banking Details</h1>
                <ul className="list pl0 mt0 measure center">
                    <li className="flex items-center lh-copy  ph0-l bb b--black-10 padsides">

                        <div className="pl3 flex-auto">
                            Please note your shipment will be processed once we recieve your Proof of Payment!
                        </div>
                    </li>

                    <li className="flex items-center lh-copy ph0-l bb b--black-10 padsides">

                        <div className="pl3 flex-auto">
                      <div> (Our banking details go here :) ) </div>     
                       <div> FNB:</div>    
                       <div> Account Number:</div>        
                       <div> Branch Number:</div>       
                       <div>  Reference: Your Invoice No.</div>     
                        </div>
                    </li>
          
        </ul>

            </div>
        </div>
    );

    // style={{ height: 250, width: 250 }}
};
export default BankDetails;