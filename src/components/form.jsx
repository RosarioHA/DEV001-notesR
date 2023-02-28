/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase-init';
import '../styles/Form.css';

function NotesForm() {
  const initValue = {
    title: '',
    descr: '',
  };

  // state variables
  const [note, setNote] = useState(initValue);

  // variables that catch the value of the inputs
  const catchInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const saveNotes = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'nCollection'), {
        ...note,
      });
    } catch (error) {
      console.log(error);
    }
    setNote({ ...initValue });
  };

  return (
    <form id="newNotesSctn" onSubmit={saveNotes}>
      <input id="titleInput" name="title" placeholder="Give your note a title" onChange={catchInput} value={note.title} />
      <input id="noteInput" name="descr" placeholder="Write your note here" onChange={catchInput} value={note.descr} />
      <button id="saveBtn" type="submit"> Save </button>
    </form>
  );
}

export default NotesForm;
