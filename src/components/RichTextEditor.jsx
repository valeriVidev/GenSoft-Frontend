import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import RichTextEditorCss from "../componentsCss/RichTextEditor.module.css"


function MyRichTextEditor(props) {
  const iframe_field = useRef();

  const handleEditorChange = (content) => {
    props.setBody(content);
  };

  function onButtonClickIframe() {
    if (props.body.includes("@iframe@")) {
      let contentParts = props.body.split('@iframe@');
      let [contentToIframe, restContent] = contentParts;

      let iframePlace = iframe_field.current.value;
      let newContent = `${contentToIframe}${iframePlace}${restContent}`;

      props.setBody(newContent)
      iframe_field.current.value = ""
    }
    else{
      let newContent = `${props.body} Error: tag not found`;
      props.setBody(newContent)
    }
  }

  return (
    <div>
      <ReactQuill
        value={props.body}
        onChange={handleEditorChange}
        className={RichTextEditorCss.editorBody}
        readOnly={props.disabled}
        modules={{
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ['bold', 'italic', 'underline', 'strike', 'clean'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ align: [] }, 'link'],
            ],
          },
          clipboard: {
            matchVisual: false,
          },
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: true,
          },
        }}
      />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Попълненото в това поле ще замести символите '@iframe@' в текста" className={RichTextEditorCss.iframeBox}
          ref={iframe_field}
          disabled={props.disabled} />
      </Form.Group>
      <Button onClick={onButtonClickIframe} className={RichTextEditorCss.addIframeButton} size="large" active disabled={props.disabled}>
        Добави вграждане
      </Button>
    </div>
  );
}


export default MyRichTextEditor;