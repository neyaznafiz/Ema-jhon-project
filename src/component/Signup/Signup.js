import React from 'react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confiemPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event=>{
        event.preventDefault()
        
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

                    <input className='form-submit' type="submit" value="Sign Up" />

                </form>
                <p>
                    Already have an accout? <Link to='/login' className='form-link'>Login</Link>
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

export default Signup;