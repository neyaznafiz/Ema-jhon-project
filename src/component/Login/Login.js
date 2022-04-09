import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>

                <form action="">

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>

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

                <button className='google-button'> Continue with google</button>

            </div>
        </div>
    );
};

export default Login;