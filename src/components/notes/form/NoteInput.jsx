import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import React from 'react';
import { Card, FloatingLabel, Form } from 'react-bootstrap';
import ButtonInput from './ButtonSubmit';
import MaxLength from './MaxLength';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Swal from 'sweetalert2';
import NoteInputHeader from './NoteInputHeader';

function NoteInput({ onAddHandler }) {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState(EditorState.createEmpty());

  function onTitleChangeHandler(event) {
    const maxChar = 50;
    setTitle(event.target.value.slice(0, maxChar));
  }

  function onEditorChangeHandler(body) {
    const parsedBody = convertToHTML(body.getCurrentContent());
    setBody(parsedBody);
  }

  async function onSubmitHandler(event) {
    event.preventDefault();
    if (title === '' && body === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Judul dan Body Catatan tidak boleh kosong',
      });
      return false;
    }
    if (title === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Judul Catatan tidak boleh kosong',
      });
      return false;
    }
    if (body === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Body Catatan tidak boleh kosong',
      });
      return false;
    }

    onAddHandler({ title, body });
  }

  const maxChar = 50;
  return (
    <Card className="border-0 shadow mb-3 p-3">
      <NoteInputHeader />
      <form className="note-input" onSubmit={onSubmitHandler}>
        <FloatingLabel controlId="floatingInput" label="Judul Catatan">
          <Form.Control
            type="text"
            className="border-0 shadow"
            placeholder="Judul Catatan"
            value={title}
            onChange={onTitleChangeHandler}
          />
        </FloatingLabel>
        <MaxLength number={maxChar - title.length} />
        <Editor
          body={body}
          editorClassName="form-control border-0"
          wrapperClassName="shadow border-0"
          toolbarClassName="border-0"
          onEditorStateChange={onEditorChangeHandler}
        />
        <ButtonInput />
      </form>
    </Card>
  );
}

export default NoteInput;
