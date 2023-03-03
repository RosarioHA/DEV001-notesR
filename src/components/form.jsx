/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase/firebase-init';
import '../styles/Form.css';

function NotesForm() {
  // const time = new Date();
  // const currentDate = time.toLocaleString();
  const [user, setUser] = useState(null);
  // const userUid = User.uid;
  // const usid = localStorage.getItem('uid');

  const initValue = {
    title: '',
    descr: '',
    // time: '',
  };

  // state variables
  const [note, setNote] = useState(initValue);

  // variables that catch the value of the inputs
  const catchInput = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  // const saveNotes = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await addDoc(collection(db, `nCollection${usid}`), {
  //       ...note,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setNote({ ...initValue });
  // };
  const [list, setList] = useState([]);
  // let usid;

  // onAuthStateChanged(auth, (user) => {
  //   const { uid } = user;
  //   if (uid !== null) {
  //     // setUsid(uid);
  //     usid = uid;
  //   }
  // });

  const getUL = async (usid) => {
    try {
      const querySnapshot = await getDocs(collection(db, `nCollection${usid}`));
      console.log(usid);
      const docs = [];
      querySnapshot.forEach((docu) => {
        // console.log(docu.data);
        docs.push({ ...docu.data(), id: docu.id });
      });
      setList(docs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        getUL(user.uid);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const saveNotes = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        const usid = user.uid;
        await addDoc(collection(db, `nCollection${usid}`), {
          ...note,
        });
        console.log(usid);
        setNote({ ...initValue });
        getUL(user.uid);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form id="newNotesSctn" onSubmit={saveNotes}>
      <textarea id="titleInput" name="title" placeholder="Give your note a title" onChange={catchInput} value={note.title} />
      <textarea id="noteInput" name="descr" placeholder="Write your note here" onChange={catchInput} value={note.descr} />
      <button id="saveBtn" type="submit"> Save </button>
    </form>
  );
}

export default NotesForm;
