import { Editor } from 'draft-js';
import React from 'react';
import { Card, FloatingLabel, Form } from 'react-bootstrap';
import NoteHeaderCard from '../NoteHeaderCard';
import ButtonInput from './ButtonSubmit';
import MaxLength from './MaxLength';

function NoteInput() {
  return (
    <Card className="border-0 shadow mb-3 p-3">
      <NoteHeaderCard />
      <form className="note-input">
        <FloatingLabel controlId="floatingInput" label="Judul Catatan">
          <Form.Control
            type="text"
            className="border-0 shadow"
            placeholder="Judul Catatan"
          />
        </FloatingLabel>
        <MaxLength />
        <Editor
          editorClassName="form-control border-0"
          wrapperClassName="shadow border-0"
          toolbarClassName="border-0"
        />
        <ButtonInput />
      </form>
    </Card>
  );
}

export default NoteInput;
