import React from "react";
import ReactMarkdown from "react-markdown";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

import CodeBlock from "./CodeBlock.js";
import YoutubeLink from "./YoutubeLink.js";
import Heading from "./Heading.js";

const SideBySideView = ({ initalValue, textAreaRef, onChange, handleKeyDown }) => {
  return(
    <ScrollSync>
      <div className="sbs-wrapper">
        <ScrollSyncPane>
          <textarea
            id="text-area"
            ref={textAreaRef}
            value={initalValue}
            onChange={e => onChange(e.target.value)}
            onKeyDown={e => handleKeyDown(e)}
            rows="20"
            cols="80"
          />
        </ScrollSyncPane>
        <ScrollSyncPane>
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
        </ScrollSyncPane>
      </div>
    </ScrollSync>
  );
};

export default SideBySideView;