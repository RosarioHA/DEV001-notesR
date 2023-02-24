import { initializeApp } from 'firebase/app';
import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut,
} from 'firebase/auth';

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

// Auth

export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export function logOut() {
  return signOut(auth);
}
