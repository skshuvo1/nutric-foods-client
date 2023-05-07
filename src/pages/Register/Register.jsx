// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';



const auth = getAuth(app)
const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  console.log(email, password);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email)

  }

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password)
    // console.log(password);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const Password = event.target.Password.value;
    event.target.reset;
    console.log(email, Password);

    createUserWithEmailAndPassword(auth, email, password)
    // sendEmailVerification(auth.currentUser)
      .then(result => {
        const loggedUser = result.user;
        setError('')
        setSuccess('User has created successfully')
        console.log(loggedUser);
        // sendVerificationEmail(result.user)
      })
      .catch((error) => {
        // console.error(error)
        setError(error.message)
        if(!/(?=.*[a-z])/.test(password)){
          setError('please add at least one lowercase')
          setSuccess('')
          
        }
        else if(!/(?=.*[A-Z])/.test(password)){
          setError('please add at least one uppercase')
          setSuccess('')
          
        }
        
      })
      

  }
  // const sendVerificationEmail = (user) => {
  //   sendEmailVerification(user)
  //   .then(result => {
  //     const regUser = result.user;
  //     alert('please verify your email')
  //     console.log(regUser);
  //   })
  //   .catch(error => {
  //     console.error(error)
  //   })
  // }
  return (
    <div>
      <Form onSubmit={handleSubmit} className='w-25 m-auto mt-3 mb-5'>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onChange={handleEmailChange} type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control onBlur={handlePasswordChange} type="password" name='Password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">

        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className='mt-2'>Already have an account. Please <Link to={'/login'}>Login</Link></p>
        
        <p className='text-danger'>{error}</p>
        <p className='text-info'>{success}</p>

      </Form>

    </div>
  );
};

export default Register;