import React from 'react';

const NavBar = props => {
  return(
    <div className='navbar'>
      <div className="logo-wrapper">
        <img 
          className="logo" 
          src="https://assets-global.website-files.com/5ca6aa5b04fdce3dfc90bd80/5cb54224f6b7462aac67e7a5_lambda-newlogo-white.png" 
          alt="logo"
          onClick={() => props.history.push('/')}
        />
        <h1>Training Kit Bot</h1>
      </div>
      {localStorage.getItem("AuthToken") ? <button className="sign-out-button" onClick={() => props.signOut()}>Sign Out</button> : null}
    </div>
  )
}

export default NavBar;