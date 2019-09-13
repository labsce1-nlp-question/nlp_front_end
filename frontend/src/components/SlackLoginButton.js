import React from 'react';

const Slack_Login_Button = () => {
  return (
    <div className="login-page-wrapper">
      <div className="login-text">
        <h1>Lambda Training Kit Bot</h1>
        <h2>Sign in with your Lambda School Slack account</h2>
      </div>
      <a className="slack-login-button" href={`https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar&client_id=${process.env.REACT_APP_SLACK_CLIENT_ID}`}>
        <img 
          alt="Sign in with Slack" 
          height="40" 
          width="172" 
          src="https://platform.slack-edge.com/img/sign_in_with_slack.png" 
          srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" 
        />
      </a>
    </div>
  );
};

export default Slack_Login_Button;