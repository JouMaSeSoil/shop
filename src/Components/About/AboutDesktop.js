import React from "react";
import "./AboutDesktop.css";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.png";
import photo4a from "./photos/4a.png";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpeg";
import photo7 from "./photos/7.jpeg";
import photo8 from "./photos/8.jpg";
// import photo9 from "./photos/12.jpg";

const About = () => {
    return (

        <div class="grid-container">
        
        <div class="cover pv5 pv6-m pv7-l shadow-5"
            style={{ background: `black url(${photo1}) center` }}>
        </div>
        
        <div class="cover shadow-5"  >       
          {/* style={{ background: `black url(${photo2}) center` }}> */}
            <div className="fl 
            
            whitebg ma2">
                <div className="pa2 ">
          {/* This is where the scroll soome results takes you (h1 below this) */}
                    <h1 id="About" className="f4 f2-l fw7 mt0 pv3-l ">
                        
                    </h1>
                    <p className="lh-copy mt2 mt3-m mt5-l f6 ">
                        <span className="fw9 f1 db lh-title mb3 mb4-l ">
                            What is a living soil?
                        </span>
                        <div className="card1 mb-3"/>
                        <span className="db-ns f3 fw7 lh-solid mb3 mb0-m mb4-l">
                            What are mycorrhizal fungi, soil microbes and why are they awesome?
                        </span>
                        <span className="db-ns f3  lh-solid mb3 mb0-m mb4-l">
                            Mycorrhizae are fungi that live symbiotically with plants, forming structures around within plant roots. They harvest nutrients such as phosphorus and magnesium much more efficiently. These vital nutrients are then traded for sugar with the plants. Additionally, mycorrhizae help defend plants from diseases and toxins.
                        </span>
                    </p>
                </div> <div className="card1"/>
            </div>
           
        </div>

        <div class="cover pv5 pv6-m pv7-l shadow-5" 
        style={{ background: `black url(${photo2}) center` }}>
        </div>

        <div class="cover shadow-5 v-mid centerAbout" style={{ background: `black url(${photo3}) center` }}>
                <div className="fl shadow-5 whitebg ma2 v-mid  "> 
                <div className="pa4">
                <span className=" f3 ">
                    Soil Microbes also live symbiotically with plant roots. They protect the plant from stress and feed the plant by converting and storing nutrients in the soil.
                    Microbes also act as a biofertilizer by releasing critical nutrients when they die. Without microbes, plants would not have the constant supply of nutrients they need to grow.
                </span>
        
        </div>
        </div>


            </div>
        
        <div class="contain pv5 pv6-m pv7-l shadow-5 "
            style={{ background: `white url(${photo4a}) ` }}>
               
        </div>
        <div className="cover centerAbout  shadow-5"
            style={{ background: `black url(${photo5}) center ` }}>

                <div className="pa4 shadow-5 whitebg ma2 pa4 v-mid ma2">
                <span className="db-ns f3 fw7 lh-solid mb3 mb0-m mb4-l">The Ingredients..</span>
                <span  >
                We have crafted a living soil to sustain your plants throughout their growth cycles. Packed with 23 indigenous microbes, lactic and photosynthetic bacteria, natural yeast and 12 types of mycorrhizal fungi.
                The bulk of the soil is made up of Coco peat, perlite and vermiculite for water retention, natural rock phosphates and worm castings for the slow release of nutrients. The soil is then stacked with all the nutrients and minerals a plant could want.
                </span>
                </div>
            </div>
        <div class="cover pv5 pv6-m pv7-l shadow-5"
            style={{ background: `black url(${photo6}) center` }}>
           
            </div>
        <div class="cover centerAbout shadow-5"
            style={{ background: `black url(${photo7}) center` }}>
                <div  className="pa4 shadow-5 whitebg ma2 pa4"> 
                <span className="db-ns f3 fw7 lh-solid mb3 mb0-m mb4-l">Wooo Biodegradiable!</span>
                <span >
                    We are firmly rooted in providing a natural and organic product. Every part of our soil from our biodegradable Calico sacks to our microbial culture is sourced locally and sustainably.
                </span>
                </div>
            </div>
        <div class="cover centerAbout shadow-5"
            style={{ background: `black url(${photo8}) center` }}>
                <div   className="pa4 shadow-5 whitebg ma2 pa4"> 
                <span className="db-ns f3 fw7 lh-solid mb3 mb0-m mb4-l">Adding extras</span>
                <span>
                Plants can be supplemented during the veg and flower phase with organic feed if desired but additional nutrients are not required. However please refrain from using in-organic fertilizer or pesticides as these could kill the microbes and fungi in the soil.
                </span>
                </div>
            </div>
    </div>
    );
};

    export default About;