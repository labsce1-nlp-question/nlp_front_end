import React from 'react';

export const EditorButtons = [
  {
    buttonClassName: "bold",
    buttonText: <i className="fas fa-bold"></i>,
    buttonTitle: "Bold",
    markdownType: "text",
    prefix: "**",
    suffix: "**"
  },
  {
    buttonClassName: "italic",
    buttonText: <i className="fas fa-italic"></i>,
    buttonTitle: "Italic",
    markdownType: "text",
    prefix: "*",
    suffix: "*"
  },
  {
    buttonClassName: "headers",
    buttonText: <i className="fas fa-heading"></i>,
    buttonTitle: "Header",
    markdownType: "other",
    markdown: "#"
  },
  {
    buttonClassName: "quote",
    buttonText: <i className="fas fa-quote-left"></i>,
    buttonTitle: "Quote Block",
    markdownType: "other",
    markdown: "> "
  },
  {
    buttonClassName: "codeBlock",
    buttonText: <i className="fas fa-code"></i>,
    buttonTitle: "Code Block",
    markdownType: "text",
    prefix: "```",
    suffix: "```"
  },
  {
    buttonClassName: "strikethrough",
    buttonText: <i className="fas fa-strikethrough"></i>,
    buttonTitle: "Strikethrough",
    markdownType: "text",
    prefix: "~~",
    suffix: "~~"
  },
  {
    buttonClassName: "ul",
    buttonText: <i className="fas fa-list-ul"></i>,
    buttonTitle: "Generic List",
    markdownType: "other",
    markdown: "* "
  },
  {
    buttonClassName: "ol",
    buttonText: <i className="fas fa-list-ol"></i>,
    buttonTitle: "Numbered List",
    markdownType: "other",
    markdown: "1. "
  },
  {
    buttonClassName: "link",
    buttonText: <i className="fas fa-link"></i>,
    buttonTitle: "Create Link",
    markdownType: "text",
    prefix: "[",
    suffix: "](http://)" 
  },
  {
    buttonClassName: "image",
    buttonText: <i className="fas fa-image"></i>,
    buttonTitle: "Insert Image",
    markdownType: "text",
    prefix: "![",
    suffix: "](http://)" 
  },
  {
    buttonClassName: "youtube",
    buttonText: <i className="fab fa-youtube"></i>,
    buttonTitle: "Insert Youtube Video",
    markdownType: "text",
    prefix: "[@youtube](",
    suffix: ")" 
  }
];