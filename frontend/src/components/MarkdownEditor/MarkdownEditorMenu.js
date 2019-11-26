import React from "react";

import MarkdownEditorMenuButton from "./MarkdownEditorMenuButton.js";
import { EditorButtons } from "./EditorButtons.js";

const MarkdownEditorMenu = ({ textAreaRef, initalValue, onChange, isPreview, setIsPreview }) => {
  return (
    <div className="markdown-editor-menu">
      {isPreview 
        ? null
        : <>
            <div className="markdown-editor-buttons">
              {EditorButtons.map((button, index) => 
                index !== 0 && index % 3 === 0 
                ? <div className="seperator-wrapper" key={index}>
                    <span className="seperator">|</span>
                    <MarkdownEditorMenuButton textAreaRef={textAreaRef} textAreaValue={initalValue} onChange={onChange} buttonConfig={button}/>
                  </div>
                : <MarkdownEditorMenuButton key={index} textAreaRef={textAreaRef} textAreaValue={initalValue} onChange={onChange} buttonConfig={button}/>
              )}
            </div>
            <span className="seperator">|</span>
          </>
      }
      <div className="markdown-editor-options">
        <button onClick={() => setIsPreview(!isPreview)}>
          {isPreview ? "Edit" : "Preview"}
        </button>
        <button>Side by Side</button>
        <button>Fullscreen</button>
      </div>
      <span className="seperator">|</span>
      <button>Markdown Guide</button>
    </div>
  );
};

export default MarkdownEditorMenu;