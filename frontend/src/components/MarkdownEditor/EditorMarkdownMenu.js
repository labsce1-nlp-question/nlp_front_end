import React from "react";

import EditorMarkdownMenuButton from "./EditorMarkdownMenuButton.js";
import { EditorButtons } from "./EditorButtons.js";

const EditorMarkdownMenu = ({ textAreaRef, initalValue, onChange, isPreview, setIsPreview }) => {
  return (
    <div className="markdown-editor-menu">
      <div className="markdown-editor-buttons">
        {EditorButtons.map((button, index) => 
          <EditorMarkdownMenuButton key={index} textAreaRef={textAreaRef} textAreaValue={initalValue} onChange={onChange} buttonConfig={button}/>
        )}
      </div>
      <button onClick={() => setIsPreview(!isPreview)}>
        {isPreview ? "Edit" : "Preview"}
      </button>
    </div>
  );
};

export default EditorMarkdownMenu;