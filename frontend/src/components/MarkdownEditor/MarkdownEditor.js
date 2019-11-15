import React,{ useState } from 'react';
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock.js";

const MarkdownEditor = ({ note, updateNote }) => {
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
          source={note}
          escapeHtml={false}
          renderers={{ code: CodeBlock }}
        />
      ) : (
        <>
          <textarea
            value={note}
            onChange={e => updateNote(e.target.value)}
            rows="20"
            cols="80"
          />
        </>
      )}
    </section>
  );
};

export default MarkdownEditor;