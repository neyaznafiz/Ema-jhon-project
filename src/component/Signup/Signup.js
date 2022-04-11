import React from 'react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init'
import './SignUp.css'

const SignUp = () => {

    // const [user, setUser] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        hookError
        // loading,
        // error
    ] = useCreateUserWithEmailAndPassword(auth)

    console.log(error);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Your two password did not match')
            return
        }
        if (password.length < 6) {
            setError('Password must be 6 chracters or longer')
            return
        }
       
        createUserWithEmailAndPassword(email, password)
        
        console.log(user);
        
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>

                <form onSubmit={handleCreateUser}>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>

                    {/* error for pass not match */}
                    <p style={{ color: 'red' }}>{error}</p>
                    <p style={{ color: 'red' }}>{hookError}</p>


                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link to='/login' className='form-link'>Login</Link>
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

export default SignUp;



