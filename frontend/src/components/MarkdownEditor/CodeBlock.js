import React from "react";
import Highlight from "react-highlight";

const CodeBlock = props => {
  return (
    <Highlight className={`language-${props.language}`}>
      {props.value}
    </Highlight>
  );
};

export default CodeBlock;