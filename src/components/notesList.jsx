/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, {
  useEffect, useState, useContext, createContext,
} from 'react';
import {
  collection, addDoc, getDocs, orderBy, doc, deleteDoc, getDoc, setDoc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase-init';
import '../styles/List.css';

function NotesList() {
  // state variables
  const [list, setList] = useState([]);

  // variables that render the notes list
  useEffect(() => {
    const getUL = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'nCollection'));
        const docs = [];
        querySnapshot.forEach((docu) => {
          console.log(docu.data);
          docs.push({ ...docu.data(), id: docu.id });
        });
        setList(docs);
      } catch (error) {
        console.log(error);
      }
    };
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
