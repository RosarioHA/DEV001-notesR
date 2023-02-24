import { initializeApp } from 'firebase/app';
import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  getDoc,
  deleteDoc,
} from 'firebase/firestore';

// Config
const firebaseConfig = {
  apiKey: 'AIzaSyCqxe-CwVaxZpbtXrx5ZPnke-2Dv0luwUg',
  authDomain: 'notes-85bf0.firebaseapp.com',
  projectId: 'notes-85bf0',
  storageBucket: 'notes-85bf0.appspot.com',
  messagingSenderId: '426920595820',
  appId: '1:426920595820:web:08af60fc091c907cba6349',
  measurementId: 'G-TFHY3ZBDM8',
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

export const saveNote = (title, date, description, uid) => {
  addDoc(collection(db, 'notesColection'), {
    title, date, description, uid,
  });
};

// export async function getNotes() {
//   const nColection = query(collection(db, 'notesColection'));
//   return getDocs(nColection).then((QuerySnapshot) => QuerySnapshot.docs.map((doc) => ({
//     data: doc.data(),
//     id: doc.id,
//   })));
// }
export const getNotes = () => getDocs(collection(db, 'notesColection'));

export const onGetNotes = (querySnapshot) => {
  const queryNote = query(collection(db, 'notesColection'), orderBy('date', 'desc'));
  onSnapshot(queryNote, querySnapshot);
};

export const deleteNote = (id) => deleteDoc(doc(db, 'notesColection', id));

export const getNote = (id) => getDoc(doc(db, 'notesColection', id));

export const updateNote = (id, newFields) => updateDoc(doc(db, 'notesColection', id), newFields);
