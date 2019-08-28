import React from 'react';
import Slb from '../components/slack_login_button.js';

const MainPage = () => {
  if(!localStorage.getItem('id')){
    return <Slb/>
  } else {
    return (
      <div>Hello world</div>
    );
  }
};

export default MainPage;