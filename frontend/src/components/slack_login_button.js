import React from 'react';

const Slack_Login_Button = () => {
  return (
    <a href="https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar&client_id=689534831568.678129405714">
      <img 
        alt="Sign in with Slack" 
        height="40" 
        width="172" 
        src="https://platform.slack-edge.com/img/sign_in_with_slack.png" 
        srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" 
      />
    </a>
  );
};

export default Slack_Login_Button;