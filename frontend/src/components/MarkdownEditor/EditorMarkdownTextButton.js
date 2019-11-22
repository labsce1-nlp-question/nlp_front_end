import React from "react";

import { insertMarkdown } from "../../helpers/insertMarkdown.js";

const EditorMarkdownTextButton = ({textAreaId, textAreaValue, onChange, buttonConfig}) => {
  const { markdown, buttonClassName, markdownType, buttonText, prefix, suffix } = buttonConfig;

  const addMarkdown = () => {
    const newVal = insertMarkdown(textAreaId, textAreaValue, markdownType, markdown, prefix, suffix);
    onChange(newVal);
  };

  return(
    <button className={`${buttonClassName}-btn`} onClick={()=>addMarkdown()}>{buttonText}</button>
  );
};

export default EditorMarkdownTextButton;