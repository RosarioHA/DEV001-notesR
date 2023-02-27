import React from 'react';
import '../styles/Form.css';

function NotesForm() {
  return (
    <form id="newNotesSctn">
      <input id="titleInput" name="title" placeholder="Give your note a title" />
      <input id="noteInput" name="descr" placeholder="Write your note here" />
      <button id="saveBtn" type="submit"> Save </button>
    </form>
  );
}

export default NotesForm;
