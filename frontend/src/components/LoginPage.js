import React from 'react';
import SlackLoginButton from './SlackLoginButton.js';

const LoginPage = () => {
  return (
    <div className="login-page-wrapper">
      <div className="login-text">
        <h1>Lambda Training Kit Bot</h1>
        <h2>Sign in with your Lambda School Slack account</h2>
      </div>
      <SlackLoginButton />
    </div>
  );
};

export default LoginPage;