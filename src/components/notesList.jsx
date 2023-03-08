/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [noteToDeleteId, setNoteToDeleteId] = useState(null);
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
      snapshot.forEach((docu) => {
        docs.push({ ...docu.data(), id: docu.id, showButtons: false });
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

  // eliminate note

  // PRUEBA MODAL
  // async function deleteNote(noteId) {
  //   try {
  //     await deleteDoc(doc(db, 'nCollection', noteId));
  //   } catch (error) {
  //     console.error('Error removing note', error);
  //   }
  //   setIsDeleteModalOpen(false);
  // }
  async function deleteNote(noteId) {
    const confirmDelete = window.confirm('Are you sure you want to delete this note?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'nCollection', noteId));
      } catch (error) {
        console.error('Error removing note', error);
      }
    }
  }

  // edit button

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
                <button type="button" id="btnDelete" tabIndex="0" onClick={() => deleteNote(note.id)}> Delete </button>
              </>
            )}
          </div>
        ))
      }
    </div>
  );
}

export default NotesList;
