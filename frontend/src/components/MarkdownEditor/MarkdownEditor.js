import React,{ useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock.js";
import YoutubeLink from "./YoutubeLink.js";
import EditorMarkdownTextButton from "./EditorMarkdownTextButton.js";
import { EditorButtons } from "./EditorButtons.js";

const listRegEx = /^(\s*)([*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
  emptyListRegEx = /^(\s*)([*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
  unorderedListRegEx =  /[*+-]\s/;

const MarkdownEditor = ({ initalValue, onChange }) => {
  const [isPreview, setIsPreview] = useState(false);
  const textAreaRef = useRef(null);

  const handleEnterKeyPress = e => {
    const { selectionStart, selectionEnd } = e.target;

    if (e.key === "Enter") {
      let rows = initalValue.substr(0, selectionEnd).split("\n");

      if (listRegEx.test(rows[rows.length - 1])) {
        if (emptyListRegEx.test(rows[rows.length - 1])) {
          rows[rows.length - 1] = "";
        } else {
          e.preventDefault();
          const line = listRegEx.exec(rows[rows.length - 1]);
          const bullet = unorderedListRegEx.test(line[2])
            ? line[2]
            : parseInt(line[3], 10) + 1 + line[4];

          rows[rows.length] = `${bullet}${line[1]}${line[5]}`;
        }
        let newVal = rows.join("\n") + initalValue.slice(selectionEnd);
        onChange(newVal);
        textAreaRef.current.value = newVal;
        textAreaRef.current.setSelectionRange(selectionStart + 4, selectionEnd + 4);
      }
    }
  };

  return (
    <section className="markdown-editor">
      <div className="markdown-editor-menu">
        {EditorButtons.map((button, index) => <EditorMarkdownTextButton key={index} textAreaId="text-area" textAreaValue={initalValue} onChange={onChange} buttonConfig={button}/>)}
        <button onClick={() => setIsPreview(!isPreview)}>
          {isPreview ? "Edit" : "Preview"}
        </button>
      </div>
      {isPreview ? (
        <ReactMarkdown
          className="markdown-preview"
          source={initalValue}
          escapeHtml={false}
          renderers={{ code: CodeBlock, link: YoutubeLink }}
        />
      ) : (
        <>
          <textarea
            id="text-area"
            ref={textAreaRef}
            value={initalValue}
            onChange={e => onChange(e.target.value)}
            onKeyPress={e => handleEnterKeyPress(e)}
            rows="20"
            cols="80"
          />
        </>
      )}
    </section>
  );
};

export default MarkdownEditor;