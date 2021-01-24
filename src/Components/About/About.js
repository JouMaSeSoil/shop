import React from "react";
import "./About.css";
import photo1 from "./photos/1.jpeg";
import photo2 from "./photos/3.jpeg";
import photo3 from "./photos/5.jpeg";
import photo4 from "./photos/6.jpeg";
import photo5 from "./photos/8.jpeg";
import photo6 from "./photos/9.jpeg";
import photo7 from "./photos/10.jpeg";
import photo8 from "./photos/11.jpeg";
import photo9 from "./photos/12.jpeg";

const About = () => {
  return (
    <main className="w-100 cf helvetica dark-gray bg-white pa3 pa4-m pa5-l  center">
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
      <div className="fl w-50 w-50 w-25-l pl2 pl0-l pr2-m pr4-l mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l shadow-5"
          style={{ background: `black url(${photo4}) center` }}
        ></div>
      </div>
      <div className="fl w-100 w-50-l pr2-l pl2-ns mb4 mb0-l mb4 outline shadow-5">
        <div className="pa4">
          {/* This is where the scroll soome results takes you (h1 below this) */}
          <h1 id="Results" className="f4 f2-l fw7 mt0 pv3-l bb-l bb--black">
            #004
          </h1>
          <p className="lh-copy mt2 mt3-m mt5-l f6 ">
            <span className="fw9 f6 f1-l db lh-title mb3 mb4-l">
              What is a living soil?
            </span>
            <span className="db-ns f6 fw7 lh-solid mb3 mb0-m mb4-l">
              What are mycorrhizal fungi and why are they awesome?
            </span>
            <span className="db-ns f6  lh-solid mb3 mb0-m mb4-l">

              Mycorrhizae are a fungus that live symbiotically with plants, forming structures around and even within plant roots. They can harvest nutrients such as phosphorus and magnesium much more efficiently than the plants themselves. These vital nutrients are then traded for sugar with the plants. Additionally, mycorrhizae help defend plants from diseases and toxins.

            </span>
            <span className="db-l measure-wide"></span>
          </p>
        </div>
      </div>
      <div className="cf">
        <div className="fl w-100 w-25-l pl3-l mb3 mb4-l">
          <div
            className="cover pv5 pv6-m pv7-l shadow-5"
            style={{ background: `black url(${photo5}) center` }}
          ></div>
        </div>
        <div className="fl w-100 w-25-l  mb3">
          <p
            id="About"
            className="lh-copy lh-solid measure f4 pt3 pt0-l mt0 mb3 center "
          > <div className='aboutUs shadow-5'>
              <span className="db-ns f3 fw7 lh-solid mb3 mb0-m mb4-l">A message from Ruan and Julian..</span>
              <span  >
                We have crafted a living soil to sustain your plants throughout their growth cycles. Packed with 23 indigenous microbes, lactic and photosynthetic bacteria, natural yeast and 12 types of mycorrhizal fungi.
                The bulk of the soil is made up of Coco peat, perlite and vermiculite for water retention, natural rock phosphates and worm castings for the slow release of nutrients. The soil is then stacked with all the nutrients and minerals a plant could want.
                We are firmly rooted in providing a natural and organic product. Every part of our soil from our biodegradable hessian sacks to our microbial culture is sourced locally and sustainably.
                Plants can be supplemented during the veg and flower phase with organic feed if desired but additional nutrients are not required. However please refrain from using in-organic fertilizer or pesticides as these could kill the microbes and fungi in the soil.
              </span>
            </div>
          </p>
        </div>
        <div className="fl w-100 w-75-l pv0 mv0">
          <div className="fl w-100 mb2 mb4-l">
            <div
              className="cover pv5 pv6-l shadow-5"
              style={{ background: `black url(${photo6}) center` }}
            ></div>
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
