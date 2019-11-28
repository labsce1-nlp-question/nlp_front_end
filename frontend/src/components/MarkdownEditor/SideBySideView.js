import React from "react";
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock.js";
import YoutubeLink from "./YoutubeLink.js";
import Heading from "./Heading.js";

const SideBySideView = ({ initalValue, textAreaRef, onChange, handleKeyDown }) => {
  return(
    <div className="sbs-wrapper">
      <textarea
        id="text-area"
        ref={textAreaRef}
        value={initalValue}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => handleKeyDown(e)}
        rows="20"
        cols="80"
      />
      <ReactMarkdown
        className="markdown-preview"
        source={initalValue}
        escapeHtml={false}
        renderers={{
          code: CodeBlock, 
          link: YoutubeLink, 
          heading: Heading 
        }}
      />
    </div>
  );
};

export default SideBySideView;