// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {

        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with username and password, e.g. send them to a server to verify
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <div className='login-container' >
            <form onSubmit={handleSubmit}>
                <input className='mb-3' type="text" name="" id="" placeholder='Your name' /><br />
                <input className='mb-3' onChange={handleEmailChange} type="email" name="email" placeholder='Enter your email' />
                <br />
                <input  className='mb-3'
                    onChange={handlePasswordChange}
                    type="password"
                    value={password}
                    placeholder='Enter your password'

                />

                <br />
                <button className='mb-3 ms-5 rounded text-white bg-primary'  type="submit">Submit</button>
            </form>
        </div>
    );
};





export default Login;