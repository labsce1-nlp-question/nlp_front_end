import React,{ useState, useRef } from "react";
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock.js";
import YoutubeLink from "./YoutubeLink.js";
import EditorMarkdownMenuButton from "./EditorMarkdownMenuButton.js";
import { EditorButtons } from "./EditorButtons.js";

const listRegEx = /^(\s*)([*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
  emptyListRegEx = /^(\s*)([*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
  unorderedListRegEx =  /[*+-]\s/;

const MarkdownEditor = ({ initalValue, onChange, initalPreview = false }) => {
  const [isPreview, setIsPreview] = useState(initalPreview);
  const textAreaRef = useRef(null);

  //event handler for when a key is pressed down
  const handleKeyDown = e => {
    const { selectionStart, selectionEnd } = e.target;

    if (e.key === "Enter") {
      //grab the text lines that lead up to where enter was pressed
      let rows = initalValue.substr(0, selectionEnd).split("\n");
      let newVal;

      //regex expression for checking if the previous line contains markdown for a List
      if (listRegEx.test(rows[rows.length - 1])) {
        //regex expression for checking if the previous line contains markdown for a empty List
        if (emptyListRegEx.test(rows[rows.length - 1])) {
          //if the list item is empty delete the list from this line and go one line down
          rows[rows.length - 1] = "";
          newVal = rows.join("\n") + initalValue.slice(selectionEnd);
  
          onChange(newVal);
          textAreaRef.current.value = newVal;
          //places our textarea text cursor one line down from where the empty list item was
          textAreaRef.current.setSelectionRange(selectionStart - 3, selectionEnd - 3);
        } else {
          e.preventDefault();
          //regex to grab the pervious line so we can increment properly
          const line = listRegEx.exec(rows[rows.length - 1]);
          //checks if bullet is numbered or not
          const bullet = unorderedListRegEx.test(line[2])
            ? line[2]
            : parseInt(line[3], 10) + 1 + line[4];

          rows[rows.length] = `${bullet}${line[1]}${line[5]}`;
          newVal = rows.join("\n") + initalValue.slice(selectionEnd);
  
          onChange(newVal);
          textAreaRef.current.value = newVal;
          textAreaRef.current.setSelectionRange(selectionStart + 4, selectionEnd + 4);
        }
      }
    } else if(e.key === "Tab"){
      e.preventDefault();

      const newVal = initalValue.substring(0, selectionStart) + "    " + initalValue.substring(selectionEnd);

      onChange(newVal);
      textAreaRef.current.value = newVal;
      textAreaRef.current.setSelectionRange(selectionStart + 4, selectionEnd + 4);
    }
  }

  return (
    <section className="markdown-editor">
      <div className="markdown-editor-menu">
        {EditorButtons.map((button, index) => 
          <EditorMarkdownMenuButton key={index} textAreaId="text-area" textAreaValue={initalValue} onChange={onChange} buttonConfig={button}/>
        )}
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
            onKeyDown={e => handleKeyDown(e)}
            rows="20"
            cols="80"
          />
        </>
      )}
    </section>
  );
};

export default MarkdownEditor;