import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Notes.css';

function Notes() {
  const navigate = useNavigate();
  const logOut = () => {
    // eslint-disable-next-line no-unused-vars
    signOut().then((res) => {
      navigate('/');
    })
      // eslint-disable-next-line no-console
      .catch(console.error);
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <button type="button" id="logoutBtn" onClick={logOut}>Cerrar Sesion</button>
  );
}

export default Notes;
