export const insertMarkdown = (textAreaId, textValue, type, markdown, prefix, suffix) => {
  const texta = document.getElementById(textAreaId);

  switch(type) {
    case "text":
      if (texta.selectionEnd !== texta.selectionStart) {
        return (
          textValue.slice(0, texta.selectionStart) + prefix + 
          textValue.slice(texta.selectionStart, texta.selectionEnd) + suffix + 
          textValue.slice(texta.selectionEnd)
        );
      } else {
        return textValue.slice(0, texta.selectionStart) + prefix + suffix + textValue.slice(texta.selectionEnd);
      }

    case "other":
      let rows = textValue.substr(0,texta.selectionEnd).split("\n");
      let row = rows.length-1;

      rows[row] = markdown + rows[row];
  
      return rows.join('\n') + textValue.slice(texta.selectionEnd);

    default:
      return null;
    }
}