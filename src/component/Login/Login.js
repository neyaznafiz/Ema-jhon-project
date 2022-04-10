import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/firebase.init';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, {replace: true})
    }

    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)

    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>

                <form onSubmit={handleUserSignIn}>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>

                    <p style={{ color: 'red' }}>{error?.message}</p>

                    {
                        loading && <p>Loading...</p>
                    }

                    <input className='form-submit' type="submit" value="Login" />

                </form>
                <p>
                    New to Ema-John? <Link to='/signup' className='form-link'>Create an account</Link>
                </p>

                <div className='or'>
                    <div className='hr'> <hr /> </div>
                    <div className='or-div'> or </div>
                    <div className='hr'> <hr /> </div>
                </div>

                <div className='google'>
                    <button className='google-button'><FcGoogle className='google-logo'></FcGoogle> Continue with google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;