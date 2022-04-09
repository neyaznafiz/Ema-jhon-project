import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Sign Up</h2>

            <form action="">

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>

                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" id="" />
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