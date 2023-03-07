import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginGoogle } from '../firebase/firebase-init';
import notesLogo from '../assets/notesLogo.png';
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const googleSignIn = () => {
    loginGoogle().then(() => {
      navigate('/notes');
      // eslint-disable-next-line no-unused-vars
      // const [user, setUser] = useState(null);
      // localStorage.setItem('uid', user.uid);
    })
      // eslint-disable-next-line no-console
      .catch(console.error);
  };

  return (
    <div id="notes">
      <section id="intro">
        <img id="notesLogo" alt="notesLogo" src={notesLogo} />
        <h2 id="notesIntro"> Welcome to Notes, the app that helps you keep your daily tasks organized </h2>
      </section>
      <section id="loginSection">
        <h3 id="loginText">
          For the moment you can only sign in using a Google account.
          We hope to offer you more options in the future.
        </h3>
        <button type="button" id="loginGoogleBtn" onClick={googleSignIn}>Sign in with Google</button>
        <a id="googleLink" href="https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%26ogbl%2F&ltmpl=default&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp" target="_blank" rel="noreferrer">I dont have a Google account</a>
      </section>
    </div>
  );
}

export default Login;
