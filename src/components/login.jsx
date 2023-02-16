import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginGoogle } from '../firebase/Auth';

const Login = () => {
    const navigate = useNavigate();
    const googleSignIn = () => {
        loginGoogle().then((res) => {
            navigate('/notes');
        })
        .catch(console.error)
    };

    return (
        <button className="loginGoogleBtn" onClick={googleSignIn}>Iniciar con Google</button>
    )
}

export default Login;
