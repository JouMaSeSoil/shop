import React from "react";
import "./Navigation.css";
import { Link } from "react-scroll";

const Navigation = ({ onRouteChange, route,interested }) => {
  return (
    <nav className="dt w-100 center nav">
      <div className="dtc w2 v-mid pa3">
        <Link
          activeClass="active"
          to="Welcome"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="dib w2 h2 pa1 ba b--white-90 grow-large border-box pointer logo"
        >
          <div className="link white-90 hover-white logo"></div>
        </Link>
      </div>

      {route === "home" ? (
        <div className="dtc v-mid tr pa3">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="f6 fw4 hover-white no-underline b--white-90 dn dib-ns pv2 ph3 pointer whiteText" // has whiteText set to imporant bacause mdb css overrules it
          >
            About us
          </Link>
          <Link
            activeClass="active"
            to="Results"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
            href="/"
          >
            Some Results
          </Link>
          <Link
            activeClass="active"
            to="Contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
            href="/"
          >
            Contact
          </Link>
          <Link
            activeClass="active"
            to="Product"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba pointer whiteText" // has whiteText set to imporant bacause mdb css overrules it
          >
            Shop
          </Link>
        </div>
      ) : (
        <div className="dtc v-mid tr pa3">
          <Link
            activeClass="active"
            to="Product"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba pointer whiteText" // has whiteText set to imporant bacause mdb css overrules it
            onClick={() => {onRouteChange("home")}}
          >
            Back to shop
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navigation;
