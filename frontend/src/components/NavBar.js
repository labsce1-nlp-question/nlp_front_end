import React from 'react';
import '../styles/NavBar.css';

const NavBar = props => {
  return(
    <div className='navbar'>
      <button onClick={() => props.signOut()}>Sign Out</button>
    </div>
  )
}

export default NavBar;