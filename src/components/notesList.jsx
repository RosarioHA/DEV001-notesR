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
  // let usid;

  // el problema con el renderizado es que no detecta al usuario antes de tomar
  // getList en el useEffect. puede hacerse con un setuser denuevo. Ivy
  // recomienda hacer un contexto con el usuario para llamarlo de manera gloval.
  // tambien  recomienda filtrar los comentarios en lugar de hacer una coleccion para c/u

  // onAuthStateChanged(auth, (user) => {
  //   const { uid } = user;
  //   if (uid !== null) {
  //     // setUsid(uid);
  //     usid = uid;
  //   }
  // });

  const getList = async () => {
    try {
      const collectionName = 'nCollection';
      const querySnapshot = await getDocs(
        collection(db, collectionName),
        orderBy('date', 'desc'),
      );
      console.log(collectionName);
      const docs = [];
      querySnapshot.forEach((docu) => {
        docs.push({ ...docu.data(), id: docu.id });
      });
      setList(docs);
    } catch (error) {
      console.log(error);
    }
  };

  // variables that render the notes list
  useEffect(() => {
    getList();
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
            <pre>
              <h3 id="listDescr">
                {ul.descr}
              </h3>
            </pre>
            {/* <button type="button" id="btnEdit"> Edit </button>
              <button type="button" id="btnDelete"> Delete </button> */}
          </div>
        ))

    }
    </div>

  );
}

export default NotesList;
