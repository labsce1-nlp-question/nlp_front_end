import React from "react";
import Highlight from "react-highlight";

const CodeBlock = ({language, value}) => {
  return (
    <Highlight className={`language-${language}`}>
      {value}
    </Highlight>
  );
};

export default CodeBlock;