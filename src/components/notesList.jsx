/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  useEffect, useState, useContext, createContext,
} from 'react';
import {
  collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase-init';

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
          docs.push({ ...doc.data, id: docu.id });
        });
        setList(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getUL();
  }, [list]);

  return (
    <div>
      {
        list.map((ul) => (
          <div key={ul.id}>
            <h3>
              {' '}
              title:
              {' '}
              {ul.title}
            </h3>
            <h3>
              {' '}
              descr:
              {' '}
              {ul.descr}
            </h3>
            <button type="button" id="btnEdit"> Edit </button>
            <button type="button" id="btnDelete"> Delete </button>
          </div>
        ))
    }
    </div>
  );
}

export default NotesList;
