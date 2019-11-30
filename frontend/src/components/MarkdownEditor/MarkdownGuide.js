import React from "react";        

const MarkdownGuide = ({ view, toggleView }) => {
  const { isMarkdownGuide } = view;
  return(
    <div className="markdown-guide-wrapper">
      <div className="guide">
        <header>
          <h1>Markdown Guide</h1>
          <button onClick={() => toggleView({...view, isMarkdownGuide: !isMarkdownGuide})}>X</button>
        </header>
        <h4>Emphasis</h4>
        <pre>
          **<strong>bold</strong>**<br/>
          *<em>italics</em>*<br/>
          ~~<strike>strikethrough</strike>~~
        </pre>
        <h4>Headers</h4>
        <pre>
          {`# Big header
## Medium header
### Small header
#### Tiny header`}
        </pre>
        <h4>Lists</h4>
        <pre>
          {`* Generic list item
* Generic list item
* Generic list item

1. Numbered list item
2. Numbered list item
3. Numbered list item`}
        </pre>
        <h4>Links</h4>
        <pre>[Text to display](http://www.example.com)</pre>
        <h4>Quotes</h4>
        <pre>
          > This is a quote.<br/>
          > It can span multiple lines!
        </pre>
        <h4>Images &nbsp; <small>Need to upload an image? <a href="https://imgur.com/" target="_blank">Imgur</a> is fast and easy.</small></h4>
        <pre>![](http://www.example.com/image.jpg)</pre>
        <h4>Tables</h4>
        <pre>
          {`| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John     | Doe      | Male     |
| Mary     | Smith    | Female   |

`}
          <em>Or without aligning the columns...</em>
          {`

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| John | Doe | Male |
| Mary | Smith | Female |`}
        </pre>
        <h4>Displaying code</h4>
        <pre>
          {'var example = "hello!";\n\n'}
          <em>Or spanning multiple lines...</em>
          {'\n\n```\nvar example = "hello!";\nalert(example);\n```'}
        </pre>
      </div>
    </div>
  );
};

export default MarkdownGuide;