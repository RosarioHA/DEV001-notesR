/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, {
  useEffect, useState, useContext, createContext,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection, addDoc, getDocs, orderBy, doc, deleteDoc, getDoc, setDoc,
} from 'firebase/firestore';
import { db, auth } from '../firebase/firebase-init';
import '../styles/List.css';

function NotesList() {
  // state variables
  const [list, setList] = useState([]);
  // const [usid, setUsid] = useState('');
  let usid;

  onAuthStateChanged(auth, (user) => {
    const { uid } = user;
    if (uid !== null) {
      // setUsid(uid);
      usid = uid;
    }
  });
  const getUL = async () => {
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
  // variables that render the notes list
  useEffect(() => {
    getUL();
  }, []);

  return (
    <div id="notesList">
      {
        list.map((ul) => (
          <div id="noteContainer" key={ul.id}>
            <strong>
              <h3 id="listTitle">
                {ul.title}
              </h3>
            </strong>
            <h3 id="listDescr">
              {ul.descr}
            </h3>
            {/* <button type="button" id="btnEdit"> Edit </button>
              <button type="button" id="btnDelete"> Delete </button> */}
          </div>
        ))

    }
    </div>

  );
}

export default NotesList;
