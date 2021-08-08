import React, {useState} from "react";
import "./About.css";
import "../../res.js";
import {Collapse, Button, Card , CardBody} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//import { Transition } from 'react-transition-group';
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";


import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpeg";
import photo8 from "./photos/8.jpg";
import photo9 from "./photos/9.jpeg";


const About = () => {
  
  const [collapse0, setCollapse0] = useState(false);
  const toggle0 = () => {setCollapse0(!collapse0)};

  const [collapse1, setCollapse1] = useState(false);
  const toggle1 = () => {setCollapse1(!collapse1)};

  const [collapse2, setCollapse2] = useState(false);
  const toggle2 = () => {setCollapse2(!collapse2)};

  const [collapse3, setCollapse3] = useState(false);
  const toggle3 = () => {setCollapse3(!collapse3)};

  const [collapse4, setCollapse4] = useState(false);
  const toggle4 = () => {setCollapse4(!collapse4)};
 
 
  return (
    <main className="w-100 cf helvetica dark-gray bg-white pa3 pa4-m pa5-l  center">
      
   
     <div> 
        <button className=" w-100 glow pointer myButton"  onClick={toggle0} >
          What is a living soil?
        </button>
       
    <Collapse isOpen={collapse0}>

    <Card >
        <CardBody>
          <h5>Mycorrhizae fungi...</h5>
        Mycorrhizae are fungi that live symbiotically with plants, forming structures around within plant roots. They harvest nutrients such as phosphorus and magnesium much more efficiently. These vital nutrients are then traded for sugar with the plants. Additionally, mycorrhizae help defend plants from diseases and toxins.
        </CardBody>
    </Card>
    </Collapse>    
    </div>  

    <div className="fl w-50 pr2 pr3-l mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l shadow-5"
          style={{ background: `black url(${photo1}) center` }}
        />
      </div>
      <div className="fl w-50 w-25-l pl2 pr2-m ph2-l mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l shadow-5"
          style={{ background: `black url(${photo2}) center` }}
        ></div>
      </div>
      <div className="fl w-50 w-50 w-25-l pr2 pr0-l pl3-l mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l shadow-5"
          style={{ background: `black url(${photo3}) left` }}
        ></div>
      </div>
      <div className="fl w-50 w-50 w-25-l pl2 pl0-l pr2-m  mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l shadow-5 "
          style={{ background: `black url(${photo4}) right`  }}
        ></div>
      </div>
      
        
     <div> 
        <button  className=" w-100 glow pointer myButton" onClick={toggle1} >
         Soil Microbes?
        </button>
       
    <Collapse isOpen={collapse1}>

    <Card >
        <CardBody>
        Soil Microbes also live symbiotically with plant roots. They protect the plant from stress and feed the plant by converting and storing nutrients in the soil.
        Microbes act as a biofertilizer by releasing critical nutrients when they die. Without microbes, plants would not have the constant supply of nutrients they need to grow.
        </CardBody>
    </Card>
    </Collapse>    
    </div>  

      <div className="fl w-100 w-50-l pr2-l pl2-ns mb4 mb0-l mb4  shadow-5">
            </div>
      <div className="cf">
        <div className="fl w-100 w-25-l pl3-l mb3 mb4-l">
          <div
            className="cover pv5 pv6-m pv7-l shadow-5"
            style={{ background: `black url(${photo5}) center` }}
          ></div>
        </div>
        {/* bring it back here */}
        <div className="fl w-100 w-25-l  mb3">
          <p
            id="About"
          > <div >
          
          <button  className=" w-100 glow pointer myButton" onClick={toggle2} >
          A message from Ruan and Julian..
          </button>
       
        <Collapse isOpen={collapse2}>
        <Card >
            <CardBody>
                We have crafted a living soil to sustain your plants throughout their growth cycles. Packed with <a className = "importantText">23 indigenous microbes, lactic and photosynthetic bacteria, natural yeast and 12 types of mycorrhizal fungi.</a>
                The bulk of the soil is made up of Coco peat, perlite and vermiculite for water retention, natural rock phosphates and worm castings for the slow release of nutrients. The soil is then stacked with all the nutrients and minerals a plant could want.
            </CardBody>
        </Card>
        </Collapse>    
    
            </div>
          </p>
        </div>
        <div className="fl w-100 w-75-l pv0 mv0">
          <div className="fl w-100 mb2 mb4-l">


            <div
              className="cover pv5 pv6-l shadow-5"
              style={{ background: `black url(${photo6}) center` }}
            ></div>
        
        <div> 
            <button className=" w-100 glow pointer myButton"  onClick={toggle3} >
              Wooohooo biodegradable!
            </button>
       
            <Collapse isOpen={collapse3}>
                <Card >
                    <CardBody>
                    We are firmly rooted in providing a natural and organic product. Currently we are undergoing a journey in sustainable packaging. This means we are experimenting with different materials and exploring all our options. We would love to hear feedback about your J.M.S bag so please drop us a message on our Instagram or Facebook with your thoughts!
                    </CardBody>
                </Card>
            </Collapse>    
        </div>  
            
          </div>
          <div className="fl w-25 mb2 mb4-l">
            <div
              className="cover pv5 pv6-m pv7-l shadow-5"
              style={{ background: `black url(${photo7}) center` }}
            ></div>
          </div>
          <div className="fl w-75 pl2 pl4-l mb2 mb4-l">
            <div
              className="cover pv5 pv6-m pv7-l shadow-5"
              style={{ background: `black url(${photo8}) center` }}
            ></div>
          </div>
          
        <div className="cover pv4 pv6-l shadow-5"> 
            <button className=" w-100 glow pointer myButton"  onClick={toggle4} >
              Supplements?
            </button>
        
            <Collapse isOpen={collapse4}>
                <Card >
                    <CardBody>
                    Plants can be supplemented during the veg and flower phase with organic feed if desired but additional nutrients are not required. However please refrain from using in-organic fertilizer or pesticides as these could kill the microbes and fungi in the soil.
                    </CardBody>
                </Card>
            </Collapse>    
        </div>  


          <div className="fl w-100 mb2 mb4-l">
            <div
              className="cover pv5 pv6-ns shadow-5"
              style={{ background: `black url(${photo9}) center` }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
