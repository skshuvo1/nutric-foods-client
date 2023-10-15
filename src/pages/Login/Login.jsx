
import React, { useRef, useState, useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { authContext } from '../../firebase/AuthProvider';
import { Button, Form } from 'react-bootstrap';


const auth = getAuth(app)


const Login = () => {

    const { signInUser, loading } = useContext(authContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const [photo, setPhoto] = useState('')
    const emailRef = useRef();
    console.log(email, password, error);


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePhotoChange = (e) => {
        console.log(e.target.value);
        setPhoto(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInUser(email, password)
            .then(result => {
                const userLogged = result.user;
                console.log(userLogged);
                navigate('/')
                loading(true)
            })
            .catch((error) => {
                setError(error.message)
            })
    };
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('please add an email to reset password')
            return;
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('please check your email')
                })
                .catch(error => {
                    setError(error.message)
                })
        }


    }
    const signInWithGoogle = () => {
        signInWithPopup(auth, new GoogleAuthProvider)
            .then(res => console.log(res))
            .catch(error => console.log(error.message))
    }
    const signInWithGithub = () => {
        signInWithPopup(auth, new GithubAuthProvider)
            .then(res => console.log(res))
            .catch(error => console.log(error.message))

    }

    return (
        <div >

            <h2 className='text-center'>Please Login !!!</h2>
            <Form onSubmit={handleSubmit} className='w-25 m-auto mt-3 mb-5'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" name="name" id="" placeholder='Your name' /><br />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={handleEmailChange} type="email" name="email" ref={emailRef} value={email} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control onChange={handlePasswordChange} type="password" name='Password' value={password} placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control onChange={handlePhotoChange} type="text" name='photo' value={photo} placeholder="Your PhotoURL" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='resetBtn'>Forgot password? please <button onClick={handleResetPassword} className='btn btn-link'>reset password</button></p>
                <p>New to this website. Please  <Link to={'/register'}>Register</Link></p>

                <div className='d-flex gap-4 mt-3 text-center'>
                    <Button className='  rounded text-white bg-secondary px-3' onClick={signInWithGoogle}>google</Button>
                    <Button className='  rounded text-white bg-secondary px-3' onClick={signInWithGithub}>github</Button>
                </div>
                <p><span  className='text-danger'>{error}</span></p>

            </Form>
        </div>
    );
};





export default Login;