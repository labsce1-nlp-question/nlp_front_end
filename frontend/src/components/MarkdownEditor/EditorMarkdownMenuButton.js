import React from "react";

import { insertMarkdown } from "../../helpers/insertMarkdown.js";

const EditorMarkdownMenuButton = ({textAreaRef, textAreaValue, onChange, buttonConfig}) => {
  const { markdown, buttonClassName, markdownType, buttonText, prefix, suffix } = buttonConfig;

  const addMarkdown = () => {
    const texta = textAreaRef.current;
    
    const start = prefix ? texta.selectionStart+prefix.length : texta.selectionStart + 1, 
      end = prefix ? texta.selectionEnd+prefix.length : texta.selectionEnd + 1,
      scrollTop = texta.scrollTop;

    const newVal = insertMarkdown(texta, textAreaValue, markdownType, markdown, prefix, suffix);

    onChange(newVal);
    texta.focus();
    texta.value = newVal;
    texta.scrollTop = scrollTop;
    texta.setSelectionRange(start, end);
  };

  return(
    <button className={`${buttonClassName}-btn`} onClick={() =>addMarkdown()}>{buttonText}</button>
  );
};

export default EditorMarkdownMenuButton;