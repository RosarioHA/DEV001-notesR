/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, logOut } from '../firebase/firebase-init';
import NotesForm from './form';
import '../styles/Notes.css';

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
      console.log('session successfully closed');
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  };

  // eslint-disable-next-line no-unused-vars
  const initValue = {
    title: '',
    descr: '',
  };

  return (

    <div id="notesDiv">
      <section id="heatherSection">
        <h2 id="welcome">
          {' '}
          Welcome to your notes
          {' '}
          <strong>{name}</strong>
        </h2>
        <button id="logoutBtn" type="button" onClick={signOut}> Sign out </button>
      </section>

      <section>
        <NotesForm />
      </section>
      <section>
        <ul id="notesUL"> </ul>
      </section>

    </div>

  );
}

export default Notes;
