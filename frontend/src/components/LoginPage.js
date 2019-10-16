import React from 'react';
import SlackLoginButton from './SlackLoginButton.js';
import Lambda_Logo from '../imgs/Lambda_Logo.png';

const LoginPage = () => {
  return (
    <div className="login-page-wrapper">
      <header>
        <img 
          className="logo" 
          src={Lambda_Logo}
          alt="logo"
        />
        <h1>Lambda Training Kit Bot</h1>
      </header>
      <div className="login-text-wrapper">
        <div className="login-text">
          <h1>Sign in</h1>
          {/* <p>You need to sign in with your Lambda School Slack account to take advantage of this web app</p> */}
          <SlackLoginButton />
        </div>
      </div>
      <footer>
        <img 
          className="logo" 
          src="https://assets-global.website-files.com/5ca6aa5b04fdce3dfc90bd80/5cb54224f6b7462aac67e7a5_lambda-newlogo-white.png" 
          alt="logo"
        />
      </footer>
    </div>
  );
};

export default LoginPage;