/* eslint-disable react/react-in-jsx-scope */
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
      <button id="logoutBtn" type="button" onClick={signOut}> Sign out </button>
    </div>
  );
}

export default Notes;
