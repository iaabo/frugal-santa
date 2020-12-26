import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
/* import "./Home.css"; */
import Footer from "../Footer/Footer";

const ChildHome = () => {
  return (
    <div>
      <NavBar />
     
      <div className="budget-question">
        <h2> How much is your budget?</h2>
        <div className="buttons">
          <button className="button-menu">
            <Link to="/childgifts10">Under 10€</Link>
          </button>
          <button className="button-menu">
            <Link to="/childgifts20">10€-20€</Link>
          </button>
          <button className="button-menu">
            <Link to="childgifts50">20€-50€</Link>
          </button>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default ChildHome;
