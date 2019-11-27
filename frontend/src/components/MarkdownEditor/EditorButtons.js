import React from 'react';

export const EditorButtons = [
  {
    buttonClassName: "bold",
    buttonText: <i class="fas fa-bold"></i>,
    buttonTitle: "Bold",
    markdownType: "text",
    prefix: "**",
    suffix: "**"
  },
  {
    buttonClassName: "italic",
    buttonText: <i class="fas fa-italic"></i>,
    buttonTitle: "Italic",
    markdownType: "text",
    prefix: "*",
    suffix: "*"
  },
  {
    buttonClassName: "headers",
    buttonText: <i class="fas fa-heading"></i>,
    buttonTitle: "Header",
    markdownType: "other",
    markdown: "#"
  },
  {
    buttonClassName: "quote",
    buttonText: <i class="fas fa-quote-left"></i>,
    buttonTitle: "Quote Block",
    markdownType: "other",
    markdown: "> "
  },
  {
    buttonClassName: "ul",
    buttonText: <i class="fas fa-list-ul"></i>,
    buttonTitle: "Generic List",
    markdownType: "other",
    markdown: "* "
  },
  {
    buttonClassName: "ol",
    buttonText: <i class="fas fa-list-ol"></i>,
    buttonTitle: "Numbered List",
    markdownType: "other",
    markdown: "1. "
  },
  {
    buttonClassName: "link",
    buttonText: <i class="fas fa-link"></i>,
    buttonTitle: "Create Link",
    markdownType: "text",
    prefix: "[",
    suffix: "](http://)" 
  },
  {
    buttonClassName: "image",
    buttonText: <i class="fas fa-image"></i>,
    buttonTitle: "Insert Image",
    markdownType: "text",
    prefix: "![",
    suffix: "](http://)" 
  },
  {
    buttonClassName: "youtube",
    buttonText: <i class="fab fa-youtube"></i>,
    buttonTitle: "Insert Youtube Video",
    markdownType: "text",
    prefix: "[@youtube](",
    suffix: ")" 
  }
];