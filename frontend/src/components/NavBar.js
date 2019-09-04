import React from 'react';
import '../styles/NavBar.css';

const NavBar = props => {
  const signOut = e => {
    e.preventDefault();

    localStorage.clear();
    props.history.push('/');
  };
  return(
    <div className='navbar'>
      <button onClick={e => signOut(e)}>Sign Out</button>
    </div>
  )
}

export default NavBar;