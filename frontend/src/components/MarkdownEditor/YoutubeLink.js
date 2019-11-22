import React from "react";

const YoutubeLink = ({ children, href }) => {
  if(children[0]){
    if(children[0].props.value === "@youtube"){

      const youtubeLink = href.replace(/watch[?]v=/, "embed/");

      return <iframe src={youtubeLink} title="youtube-iframe"/>
    } else {
      const value = children[0].props.value ? children[0].props.value : "";

      return <a href={href}>{value}</a>
    }
  } else {
    return <a href={href}>{""}</a>
  }
}

export default YoutubeLink;