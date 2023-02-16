import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginGoogle } from '../firebase/Auth';

function Login() {
  const navigate = useNavigate();
  const googleSignIn = () => {
    // eslint-disable-next-line no-unused-vars
    loginGoogle().then((res) => {
      navigate('/notes');
    })
      // eslint-disable-next-line no-console
      .catch(console.error);
  };

  return (
    <button type="button" className="loginGoogleBtn" onClick={googleSignIn}>Iniciar con Google</button>
  );
}

export default Login;
