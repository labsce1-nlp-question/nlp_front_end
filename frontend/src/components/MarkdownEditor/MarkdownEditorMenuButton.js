import React from "react";

import { insertMarkdown } from "../../helpers/insertMarkdown.js";

const MarkdownEditorMenuButton = ({textAreaRef, textAreaValue, onChange, buttonConfig}) => {
  const { markdown, buttonClassName, markdownType, buttonText, prefix, suffix } = buttonConfig;

  const addMarkdown = () => {
    //current text area reference object from useRef 
    const texta = textAreaRef.current;
    //store values to be set after the text area as re-rendered
    const start = prefix ? texta.selectionStart+prefix.length : texta.selectionStart + 1, 
      end = prefix ? texta.selectionEnd+prefix.length : texta.selectionEnd + 1,
      scrollTop = texta.scrollTop;

    //insert desired markdown based on teh button pressed
    const newVal = insertMarkdown(texta, textAreaValue, markdownType, markdown, prefix, suffix);

    //update state to have the new string with the markdown added
    onChange(newVal);
    //update the referenced texta area element object with previous values before it was re-rendered
    //and focus back onto the textarea 
    texta.focus();
    texta.value = newVal;
    texta.scrollTop = scrollTop;
    texta.setSelectionRange(start, end);
  };

  return(
    <button className={`${buttonClassName}-btn`} onClick={() =>addMarkdown()}>{buttonText}</button>
  );
};

export default MarkdownEditorMenuButton;