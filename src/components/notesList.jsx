/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useRef } from 'react';
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
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase/firebase-init';
import '../styles/List.css';

function NotesList() {
  // state variables
  const [list, setList] = useState([]);
  const [userId, setUserId] = useState('');
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const containerRef = useRef(null);

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
        docs.push({ ...doc.data(), id: doc.id, showButtons: false });
      });
      setList(docs);
    });
    return listenForUpdates;
  }, [userId]);

  function handleNoteClick(noteId) {
    setSelectedNoteId(noteId);
    setList(list.map((item) => {
      if (item.id === noteId) {
        return {
          ...item,
          showButtons: !item.showButtons,
        };
      }
      return {
        ...item,
        showButtons: false,
      };
    }));
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSelectedNoteId(null);
        setList(list.map((item) => ({ ...item, showButtons: false })));
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef, list]);

  return (
    <div id="notesList" ref={containerRef}>
      {
        list.map((note) => (
          <div
            id="noteContainer"
            key={note.id}
            onClick={() => handleNoteClick(note.id)}
          >
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
            {selectedNoteId === note.id && note.showButtons && (
              <>
                <button type="button" id="btnEdit" tabIndex="0"> Edit </button>
                <button type="button" id="btnDelete" tabIndex="0"> Delete </button>
              </>
            )}
          </div>
        ))
      }
    </div>
  );
}

export default NotesList;
