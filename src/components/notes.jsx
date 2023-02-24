/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, logOut } from '../firebase/firebase-init';
import './Notes.css';

function Notes() {
  const [name, setName] = useState('');

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
      <section id="heatherSection">
        <h2 id="welcome">
          {' '}
          Welcome to your notes
          {' '}
          {name}
        </h2>
        <button id="logoutBtn" type="button" onClick={signOut}> Sign out </button>
      </section>

      <section id="newNotesSctn">
        <form>
          <textarea id="titleInput" />
          <textarea id="noteInput" />
          <button id="saveBtn" type="submit"> Save </button>
        </form>
      </section>
      <section>
        <ul> </ul>
      </section>

    </div>

  );
}

export default Notes;
