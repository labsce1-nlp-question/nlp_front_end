import React from "react";

const Heading = props => {
  const { level, children } = props;
  
  const removeWhiteSpace = string => {
    return string.toLowerCase().replace(/\s/gi, "-");
  }
  const traverseObject = object => {
    if(object !== null && typeof object === "object") {
      if(object.props.value){
        return object.props.value;
      } else {
        return traverseObject(object.props.children[0]);
      }
    } else {
      return object;
    }
  }

  const childVal = traverseObject(children[0]); 
  
  switch(level){
    case 1: 
      return <h1 id={removeWhiteSpace(childVal)}>{children}</h1>
    case 2:
      return <h2 id={removeWhiteSpace(childVal)}>{children}</h2>
    case 3: 
      return <h3 id={removeWhiteSpace(childVal)}>{children}</h3>
    case 4: 
      return <h4 id={removeWhiteSpace(childVal)}>{children}</h4>
    case 5: 
      return <h5 id={removeWhiteSpace(childVal)}>{children}</h5>
    case 6: 
      return <h6 id={removeWhiteSpace(childVal)}>{children}</h6>

    default:
      return null;
  }
};

export default Heading;