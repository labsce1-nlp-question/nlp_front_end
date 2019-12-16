import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

import CodeBlock from "./CodeBlock.js";
import YoutubeLink from "./YoutubeLink.js";
import Heading from "./Heading.js";

const SideBySideView = ({ initalValue, textAreaRef, onChange, handleKeyDown }) => {
  const [twidth, setTwidth] = useState(1229);
  const [isDrag, setisDrag] = useState(false);
 
  const adjustWidth = (e) => {
    e.preventDefault();
    if(isDrag) {
      const widthDif = twidth + (e.clientX - textAreaRef.current.clientWidth);
      setTwidth(widthDif);
    }
  }
  return(
    <ScrollSync>
      <div className="sbs-wrapper" onMouseUp={(e) => setisDrag(false)} onMouseMove={(e) => adjustWidth(e)}>
        <ScrollSyncPane>
          <textarea
            id="text-area"
            ref={textAreaRef}
            value={initalValue}
            onChange={e => onChange(e.target.value)}
            onKeyDown={e => handleKeyDown(e)}
            style={{width: `${twidth}px`}}
            rows="20"
            cols="80"
          />
        </ScrollSyncPane>
        <span className="width-adjust-bar" onMouseDown={() => setisDrag(true)}/>
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