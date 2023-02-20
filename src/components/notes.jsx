/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../firebase/Auth';
import './Notes.css';

function Notes() {
  const navigate = useNavigate();
  function signOut() {
    logOut()
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(err);
      });
  }
  return (
    <div id="notesDiv">
      <h2 id="welcome"> Welcome to your notes</h2>
      <button id="logoutBtn" type="button" onClick={signOut}> Sign out </button>
    </div>
  );
}

export default Notes;
