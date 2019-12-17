import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import WhiteLambdaLogo from "../imgs/Lambda_Logo_white.png";

const NavBar = props => {
  const [isExpanded, setIsExpanded] = useState(false);
  return(
    <div className={`side-nav ${isExpanded ? "expand" : ""}`}>
      <div className="logo-wrapper">
        <img 
          className="logo" 
          src={WhiteLambdaLogo}
          alt="logo"
          onClick={() => props.history.push("/")}
        />
        <h1>Training Kit Bot</h1>
        <button className="mobile-nav-btn" onClick={() => setIsExpanded(!isExpanded)}><i className="fas fa-bars"></i></button>
      </div>
      <ul className="menu-list">
        <NavLink 
          exact to="/"
          activeStyle={{
            textDecoration: "underline"
          }}
        >
          <li onClick={() => isExpanded ? setIsExpanded(false) : null}>Search</li>
        </NavLink>
        <NavLink
          to="/search-history"
          activeStyle={{
            textDecoration: "underline"
          }}
        >
          <li onClick={() => isExpanded ? setIsExpanded(false) : null}>Search History</li>
        </NavLink>
        <NavLink
          to="/notes"
          activeStyle={{
            textDecoration: "underline"
          }}
        >
        <li onClick={() => isExpanded ? setIsExpanded(false) : null}>Notes</li>
        </NavLink>
      </ul>
      {localStorage.getItem("AuthToken") ? <button className="sign-out-button" onClick={() => props.signOut()}>Sign Out</button> : null}
    </div>
  )
}

export default NavBar;