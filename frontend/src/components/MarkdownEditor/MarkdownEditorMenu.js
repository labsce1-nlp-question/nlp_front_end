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
        <button onClick={() => setIsPreview(!isPreview)} title={isPreview ? "Toggle Edit" : "Toggle Preview"}>
          {isPreview ? <i class="fas fa-edit"></i> : <i class="far fa-eye"></i>}
        </button>
        <button title="Toggle Side by Side"><i class="fas fa-columns"></i></button>
        <button title="Toggle Fullscreen"><i class="fas fa-expand-arrows-alt"></i></button>
      </div>
      <span className="seperator">|</span>
      <button title="Markdown Guide"><i class="far fa-question-circle"></i></button>
    </div>
  );
};

export default MarkdownEditorMenu;