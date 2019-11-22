import React,{ useState } from 'react';
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock.js";
import EditorMarkdownTextButton from './EditorMarkdownTextButton.js';

const MarkdownEditor = ({ initalValue, onChange }) => {
  const [isPreview, setIsPreview] = useState(false);
  const buttonConfig = {
    buttonClassName:"bold",
    buttonText: "B",
    markdownType:"text",
    prefix: "**",
    suffix: "**"
  }
  return (
    <section className="markdown-editor">
      <div className="markdown-editor-menu">
        <EditorMarkdownTextButton textAreaId="text-area" textAreaValue={initalValue} onChange={onChange} buttonConfig={buttonConfig}/>
        <button onClick={() => setIsPreview(!isPreview)}>
          {isPreview ? "Edit" : "Preview"}
        </button>
      </div>
      {isPreview ? (
        <ReactMarkdown
          className="markdown-preview"
          source={initalValue}
          escapeHtml={false}
          renderers={{ code: CodeBlock }}
        />
      ) : (
        <>
          <textarea
            id="text-area"
            value={initalValue}
            onChange={e => onChange(e.target.value)}
            rows="20"
            cols="80"
          />
        </>
      )}
    </section>
  );
};

export default MarkdownEditor;