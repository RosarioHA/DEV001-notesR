/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { logOut } from '../firebase/Auth';
import './Notes.css';

function Notes() {
  const [name, setName] = useState('');
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    const { displayName } = user;
    if (displayName !== null) {
      setName(displayName);
    }
  });

  const navigate = useNavigate();
  const signOut = () => {
    logOut(auth).then(() => {
      console.log('cierre de sesion correcto');
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div id="notesDiv">
      <h2 id="welcome">
        {' '}
        Welcome to your notes
        {' '}
        {name}
      </h2>
      <button id="logoutBtn" type="button" onClick={signOut}> Sign out </button>
    </div>
  );
}

export default Notes;
