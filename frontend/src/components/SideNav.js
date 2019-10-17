import React from 'react';
import { NavLink } from 'react-router-dom';

import WhiteLambdaLogo from '../imgs/Lambda_Logo_white.png';

const NavBar = props => {
  return(
    <div className='side-nav'>
      <div className="logo-wrapper">
        <img 
          className="logo" 
          src={WhiteLambdaLogo}
          alt="logo"
          onClick={() => props.history.push('/')}
        />
        <h1>Training Kit Bot</h1>
      </div>
      <ul>
        <NavLink 
          exact to="/"
          activeStyle={{
            textDecoration: "underline"
          }}
        >
          <li>Search</li>
        </NavLink>
        <NavLink
          to="/search-history"
          activeStyle={{
            textDecoration: "underline"
          }}
        >
          <li>Search History</li>
        </NavLink>
        <NavLink
          to="/notes"
          activeStyle={{
            textDecoration: "underline"
          }}
        >
        <li>Notes</li>
        </NavLink>
      </ul>
      {localStorage.getItem("AuthToken") ? <button className="sign-out-button" onClick={() => props.signOut()}>Sign Out</button> : null}
    </div>
  )
}

export default NavBar;