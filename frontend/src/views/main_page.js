import React from 'react';
import Slb from '../components/slack_login_button.js';

const MainPage = props => {
  const signOut = () => {
    localStorage.clear();
    props.history.push('/');
  }
  if(!localStorage.getItem('id')){
    return <Slb/>
  } else {
    return (
      <>
        <button onClick={() => signOut()}>Sign Out</button>
        <div>Hello world</div>
      </>
    );
  }
};

export default MainPage;