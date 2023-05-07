// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app)

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // console.log(email);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const userLogged = result.user;
            console.log(userLogged);
        })
        .catch((error) => {
            console.error(error)
        })
        // Do something with username and password, e.g. send them to a server to verify
        // console.log("Email:", email);
        // console.log("Password:", password);
    };

    return (
        <div className='login-container' >
            <form onSubmit={handleSubmit}>
                <input className='mb-3' type="text" name="" id="" placeholder='Your name' /><br />
                <input className='mb-3' onChange={handleEmailChange} type="email" value={email} name="email" placeholder='Enter your email' />
                <br />
                <input  className='mb-3'
                    onChange={handlePasswordChange}
                    type="password"
                    name='password'
                    value={password}
                    placeholder='Enter your password'

                />

                <br />
                <button className=' ms-5 rounded text-white bg-primary px-3 py-2'  type="submit">Login</button>
            </form>
            <p className='mt-2'>New to this website. Please <Link to={'/register'}>Register</Link></p>
        </div>
    );
};





export default Login;