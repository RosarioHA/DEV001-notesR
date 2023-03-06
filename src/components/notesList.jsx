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
  const [usid, setUsid] = useState('');

  onAuthStateChanged(auth, (user) => {
    const { uid } = user;
    if (uid !== null) {
      // setUsid(uid);
      setUsid(uid);
    }
  });

  // const getList = async () => {
  //   try {
  //     // const collectionName = 'nCollection';
  //     const nCollectionQuery = query(collection(db, 'nCollection'), orderBy('date'));
  //     const querySnapshot = await getDocs(nCollectionQuery);
  //     const docs = [];
  //     querySnapshot.forEach((docu) => {
  //       docs.push({ ...docu.data(), id: docu.id });
  //     });
  //     setList(docs);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const listenForUpdates = () => {
    const collectionName = 'nCollection';
    const nCollectionQuery = query(
      collection(db, collectionName),
      orderBy('date'),
    );
    onSnapshot(nCollectionQuery, (snapshot) => {
      const docs = [];
      snapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setList(docs);
    });
  };

  // variables that render the notes list
  useEffect(() => {
    listenForUpdates();
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
