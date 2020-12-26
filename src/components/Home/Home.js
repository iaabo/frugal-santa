import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      
      <div className="budget-question">
        <h2> Who is your Secret Santa?</h2>
        <div className="buttons">
          <button className="button-menu">
            <Link to="/woman">Woman</Link>
          </button>
          <button className="button-menu">
            <Link to="/man">Man</Link>
          </button>
          <button className="button-menu">
            <Link to="/child">Child</Link>
          </button>
        </div>
      </div>{" "}
     
    </div>
  );
};

export default Home;
