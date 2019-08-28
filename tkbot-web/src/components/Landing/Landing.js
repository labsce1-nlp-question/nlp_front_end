import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=689534831568.698834298644">
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
  }
}

export default Landing;
