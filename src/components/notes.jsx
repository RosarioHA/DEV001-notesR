/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { FiPlusCircle } from 'react-icons/fi';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, logOut } from '../firebase/firebase-init';
import NotesForm from './form';
import NotesList from './notesList';
// import FormModal from './modal';
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

  // const [showModal, setShowModal] = useState(false);
  // const handleShowModal = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

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
      {/* <section>
        <FiPlusCircle id="modalBtn" onClick={handleShowModal} />

        {showModal && (
        <Modal
          show={showModal}
          onClose={handleCloseModal}
        />
        )}
      </section> */}
      <section>
        <NotesForm />
      </section>
      <section>
        <NotesList />
      </section>

    </div>

  );
}

export default Notes;
