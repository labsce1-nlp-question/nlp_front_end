export const insertMarkdown = (textAreaObject, textValue, type, markdown, prefix, suffix) => {
  // const textAreaObject = document.getElementById(textAreaObjectreaId);

  switch(type) {
    case "text":
      if (textAreaObject.selectionEnd !== textAreaObject.selectionStart) {
        return (
          textValue.slice(0, textAreaObject.selectionStart) + prefix + 
          textValue.slice(textAreaObject.selectionStart, textAreaObject.selectionEnd) + suffix + 
          textValue.slice(textAreaObject.selectionEnd)
        );
      } else {
        return textValue.slice(0, textAreaObject.selectionStart) + prefix + suffix + textValue.slice(textAreaObject.selectionEnd);
      }

    case "other":
      let rows = textValue.substr(0,textAreaObject.selectionEnd).split("\n");
      let row = rows.length-1;

      rows[row] = markdown + rows[row];
  
      return rows.join('\n') + textValue.slice(textAreaObject.selectionEnd);

    default:
      return null;
    }
}