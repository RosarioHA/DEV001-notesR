/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, {
  useEffect, useState,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  onSnapshot,
  where,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { db, auth } from '../firebase/firebase-init';
import '../styles/List.css';

function NotesList() {
  // state variables
  const [list, setList] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
  }, []);

  useEffect(() => {
    const notesQuery = query(
      collection(db, 'nCollection'),
      where('user', '==', userId),
      orderBy('date'),
    );
    const listenForUpdates = onSnapshot(notesQuery, (snapshot) => {
      const docs = [];
      snapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setList(docs);
    });
    return listenForUpdates;
  }, [userId]);

  return (
    <div id="notesList">
      {
        list.map((note) => (
          <div id="noteContainer" key={note.id}>
            <strong>
              <h3 id="listTitle">
                {note.title}
              </h3>
            </strong>
            <pre>
              <h3 id="listDescr">
                {note.descr}
              </h3>
            </pre>
            <button type="button" id="btnEdit"> Edit </button>
            <button type="button" id="btnDelete"> Delete </button>
          </div>
        ))

    }
    </div>

  );
}

export default NotesList;
