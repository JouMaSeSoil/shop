import React from 'react';
import "./About.css";
import photo1 from './photos/1.jpeg';
import photo2 from './photos/3.jpeg';
import photo3 from './photos/5.jpeg';
import photo4 from './photos/6.jpeg';
import photo5 from './photos/8.jpeg';
import photo6 from './photos/9.jpeg';
import photo7 from './photos/10.jpeg';
import photo8 from './photos/11.jpeg';
import photo9 from './photos/12.jpeg';

const About = () => {

  return (
    <main className="w-100 cf helvetica dark-gray bg-white pa3 pa4-m pa5-l  center">
      <div className="fl w-50 pr2 pr3-l mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l"
          style={{ background: `black url(${photo1}) center` }}
        />
      </div>
      <div className="fl w-50 w-25-l pl2 pr2-m ph2-l mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l"
          style={{ background: `black url(${photo2}) center` }}
        >

        </div>
      </div>
      <div className="fl w-50 w-50 w-25-l pr2 pr0-l pl3-l mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l"
          style={{ background: `black url(${photo3}) left` }}
        >

        </div>
      </div>
      <div className="fl w-50 w-50 w-25-l pl2 pl0-l pr2-m pr4-l mb3 mb4-l">
        <div
          className="cover pv5 pv6-m pv7-l"
          style={{ background: `black url(${photo4}) center` }}
        >

        </div>
      </div>
      <div className="fl w-100 w-50-l pr2-l pl2-ns mb4 mb0-l mb4 outline">
        <div className="pa4">
          {/* This is where the scroll soome results takes you (h1 below this) */}
          <h1 id='Results' className="f4 f2-l fw7 mt0 pv3-l bb-l bb--black">
            #004
        </h1>
          <p className="lh-copy mt2 mt3-m mt5-l f6 ">

            <span className="fw9 f6 f1-l db lh-title mb3 mb4-l">
              Happiness is...
        </span>
            <span className="db-ns f6 fw7 lh-solid mb3 mb0-m mb4-l">
              ...watching your plants start to grow!
        </span>
            <span className="db-l measure-wide">
            </span>
          </p>
        </div>
      </div>
      <div className="cf">
        <div className="fl w-100 w-25-l pl3-l mb3 mb4-l">
          <div
            className="cover pv5 pv6-m pv7-l"
            style={{ background: `black url(${photo5}) center` }}
          >

          </div>
        </div>
        <div className="fl w-100 w-25-l pl3-l mb3 mb4-l aboutUs">
          <p id='About' className="lh-copy lh-solid measure f4 pt3 pt0-l mt0 mb3 mb4-l center">
            <span className="b">
              A message from Ruan and Julian..
        </span>

        We are hear to bring you the best product on the market and are commited to contributing to our ecosystems sustainable and healthy soil culture. ect ect a bit about who we are and what not. reach our intention than the Grid. The grid represents the basic structure of our graphic design, it helps to organize the content, it provides consistency, it gives an orderly look and it projects a level of intellectual elegance that we like to express. There are in nite kinds of grids, but just one - the most appropriate - for any problem.
        </p>
        </div>
        <div className="fl w-100 w-75-l pv0 mv0">
          <div className="fl w-100 mb2 mb4-l">
            <div
              className="cover pv5 pv6-l"
              style={{ background: `black url(${photo6}) center` }}
            >

            </div>
          </div>
          <div className="fl w-25 mb2 mb4-l">
            <div
              className="cover pv5 pv6-m pv7-l"
              style={{ background: `black url(${photo7}) center` }}
            >

            </div>
          </div>
          <div className="fl w-75 pl2 pl4-l mb2 mb4-l">
            <div
              className="cover pv5 pv6-m pv7-l"
              style={{ background: `black url(${photo8}) center` }}
            >

            </div>
          </div>
          <div className="fl w-100 mb2 mb4-l">
            <div
              className="cover pv5 pv6-ns"
              style={{ background: `black url(${photo9}) center` }}
            >

            </div>
          </div>
        </div>
      </div>
    </main>

  )


}
export default About;