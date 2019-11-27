import React from "react";

const Heading = props => {
  const { level, children } = props;

  const removeWhiteSpace = string => {
    return string.toLowerCase().replace(/\s/gi, "-");
  }

  switch(level){
    case 1: 
      return <h1 id={removeWhiteSpace(children[0].props.value)}>{children[0].props.value}</h1>
    case 2: 
      return <h2 id={removeWhiteSpace(children[0].props.value)}>{children[0].props.value}</h2>
    case 3: 
      return <h3 id={removeWhiteSpace(children[0].props.value)}>{children[0].props.value}</h3>
    case 4: 
      return <h4 id={removeWhiteSpace(children[0].props.value)}>{children[0].props.value}</h4>
    case 5: 
      return <h5 id={removeWhiteSpace(children[0].props.value)}>{children[0].props.value}</h5>
    case 6: 
      return <h6 id={removeWhiteSpace(children[0].props.value)}>{children[0].props.value}</h6>

    default:
      return null;
  }
};

export default Heading;