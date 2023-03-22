/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from 'react';
// import Modal from 'react-modal';
import {
  collection,
  orderBy,
  query,
  onSnapshot,
  where,
  doc,
  deleteDoc,
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
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); son del modal delete
  // const [noteToDeleteId, setNoteToDeleteId] = useState(null); son del modal delete
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // const [newTitle, setNewTitle] = useState('');
  // const [newDesc, setNewDesc] = useState('');
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
  // PRUEBA MODAL
  // async function deleteNote(noteId) {
  //   try {
  //     await deleteDoc(doc(db, 'nCollection', noteId));
  //   } catch (error) {
  //     console.error('Error removing note', error);
  //   }
  //   setIsDeleteModalOpen(false);
  // }

  // edit note
  async function editNote(noteId) {
    const newTitle = prompt(`Edit your title: ${list.find((note) => note.id === noteId).title}`);
    const newDesc = prompt(`Edit your description: ${list.find((note) => note.id === noteId).descr}`);
    try {
      await setDoc(doc(db, 'nCollection', noteId), {
        title: newTitle,
        descr: newDesc,
      }, { merge: true });
    } catch (error) {
      console.error('Error updating note', error);
    }
  }
  console.log(list);

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
                <button type="button" id="btnEdit" tabIndex="0" onClick={() => editNote(note.id)}> Edit </button>
                <button type="button" id="btnDelete" tabIndex="0" onClick={() => deleteNote(note.id)}> Delete </button>
              </>
            )}
          </div>
        ))
      }
      {/* <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        contentLabel="Edit Note"
      >
        <form onSubmit={handleEditSubmit}>
          <h2>Edit Note</h2>
          <label htmlFor="editTitle">Title:</label>
          <input
            id="editTitle"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <label htmlFor="editDesc">Description:</label>
          <textarea
            id="editDesc"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
        </form>
      </Modal> */}
    </div>
  );
}

export default NotesList;
