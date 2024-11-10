import React from "react";
import { Link } from "react-router-dom";

function MainTop() {
  return (
    <div className="main__top">
      <h2 className="main__top__title">NEW ARRIVALS</h2>
      <div className="main__top__list">
        <div className="main__top__box">
          <Link to="/index" className="main__top__link">Home</Link>
        </div>
        <div className="main__top__box">
          <Link to="/" className="main__top__link">Menu</Link> 
        </div>
        <div className="main__top__box">
          <Link to="/" className="main__top__link">New Arrivals</Link>
        </div>
      </div>
    </div>
  );
}

export default MainTop;
