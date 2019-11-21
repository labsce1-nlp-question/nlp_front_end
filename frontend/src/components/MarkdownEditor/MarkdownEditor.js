import React,{ useState } from 'react';
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock.js";

const MarkdownEditor = ({ initalValue, onChange }) => {
  const [isPreview, setIsPreview] = useState(false);
  return (
    <section className="markdown-editor">
      <div className="markdown-editor-menu">
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