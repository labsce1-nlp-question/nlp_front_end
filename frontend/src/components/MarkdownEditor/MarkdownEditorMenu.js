import React from "react";

import MarkdownEditorMenuButton from "./MarkdownEditorMenuButton.js";
import { EditorButtons } from "./EditorButtons.js";

const MarkdownEditorMenu = ({ textAreaRef, initalValue, onChange, view, toggleView }) => {
  const { isPreview, isFullScreen, isSidebySide, isMarkdownGuide } = view;
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
        <button 
          onClick={e => toggleView(e, {...view, isPreview: !isPreview, isSidebySide: false })} 
          title={isPreview ? "Toggle Edit" : "Toggle Preview"}
        >
          {isPreview ? <i className="fas fa-edit"></i> : <i className="far fa-eye"></i>}
        </button>
        <button 
          onClick={e => toggleView(e, {...view, isSidebySide: !isSidebySide, isFullScreen: true, isPreview: false })}
          title="Toggle Side by Side"
        >
          <i className="fas fa-columns"></i>
        </button>
        <button 
          onClick={e => toggleView(e, {...view, isFullScreen: !isFullScreen, isSidebySide: false })} 
          title="Toggle Fullscreen"
        >
          <i className="fas fa-expand-arrows-alt"></i>
        </button>
      </div>
      <span className="seperator">|</span>
      <button title="Markdown Guide" onClick={e => toggleView(e, {...view, isMarkdownGuide: !isMarkdownGuide })}>
        <i className="far fa-question-circle"></i>
      </button>
    </div>
  );
};

export default MarkdownEditorMenu;