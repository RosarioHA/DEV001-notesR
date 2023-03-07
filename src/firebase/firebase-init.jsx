import { initializeApp } from 'firebase/app';
import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut,
} from 'firebase/auth';
import {
  getFirestore,
  // collection,
  // addDoc,
  // doc,
  // getDocs,
  // query,
  // orderBy,
  // onSnapshot,
  // updateDoc,
  // getDoc,
  // deleteDoc,
} from 'firebase/firestore';

// Config
const firebaseConfig = {
  apiKey: 'AIzaSyAw9DfwnNTGMCa1_fYeQo9xdeRq9mnubsQ',
  authDomain: 'notes-mp.firebaseapp.com',
  projectId: 'notes-mp',
  storageBucket: 'notes-mp.appspot.com',
  messagingSenderId: '984188484451',
  appId: '1:984188484451:web:5fafdccad1884dd33df156',

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Auth
export const loginGoogle = () => signInWithPopup(auth, provider);

export function logOut() {
  return signOut(auth);
}

// Firestore
export const db = getFirestore(app);

// export const saveNote = (title, date, description, uid) => {
//   addDoc(collection(db, 'notesColection'), {
//     title, date, description, uid,
//   });
// };

// // export async function getNotes() {
// //   const nColection = query(collection(db, 'notesColection'));
// //   return getDocs(nColection).then((QuerySnapshot) => QuerySnapshot.docs.map((doc) => ({
// //     data: doc.data(),
// //     id: doc.id,
// //   })));
// // }
// export const getNotes = () => getDocs(collection(db, 'notesColection'));

// export const onGetNotes = (querySnapshot) => {
//   const queryNote = query(collection(db, 'notesColection'), orderBy('date', 'desc'));
//   onSnapshot(queryNote, querySnapshot);
// };

// export const deleteNote = (id) => deleteDoc(doc(db, 'notesColection', id));

// export const getNote = (id) => getDoc(doc(db, 'notesColection', id));

// export const updateNote = (id, newFields) => updateDoc(doc(db, 'notesColection', id), newFields);
