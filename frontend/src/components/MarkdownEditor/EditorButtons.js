export const EditorButtons = [
  {
    buttonClassName: "bold",
    buttonText: "B",
    markdownType: "text",
    prefix: "**",
    suffix: "**"
  },
  {
    buttonClassName: "italic",
    buttonText: "I",
    markdownType: "text",
    prefix: "*",
    suffix: "*"
  },
  {
    buttonClassName: "headers",
    buttonText: "H",
    markdownType: "other",
    markdown: "# "
  },
  {
    buttonClassName: "quote",
    buttonText: '"',
    markdownType: "other",
    markdown: "> "
  },
  {
    buttonClassName: "ul",
    buttonText: "u-list",
    markdownType: "other",
    markdown: "* "
  },
  {
    buttonClassName: "ol",
    buttonText: "o-list",
    markdownType: "other",
    markdown: "1. "
  },
  {
    buttonClassName: "link",
    buttonText: "link",
    markdownType: "text",
    prefix: "[",
    suffix: "](http://)" 
  },
  {
    buttonClassName: "image",
    buttonText: "image",
    markdownType: "text",
    prefix: "![",
    suffix: "](http://)" 
  },
  {
    buttonClassName: "youtube",
    buttonText: "youtube",
    markdownType: "text",
    prefix: "[@youtube](",
    suffix: ")" 
  }
];