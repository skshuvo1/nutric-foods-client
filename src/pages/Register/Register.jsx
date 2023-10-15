
import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { authContext } from '../../firebase/AuthProvider';


const Register = () => {
  const {createUser, loading} = useContext(authContext)
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('');
  const [photo, setPhoto] = useState('')

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email)

  }

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password)
  }

  const handlePhotoChange = (e) => {
    const photo = e.target.value;
    setPhoto(photo)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const Password = event.target.Password.value;
    const name = event.target.name.value
    const photo = event.target.photo.value;
    event.target.reset();
    console.log(email, Password, name, photo);
    if(!/(?=.*[a-z])/.test(password)){
      setError('please add at least one lowercase')
      setSuccess('')
      return;
      
    }
    

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        setError('')
        setSuccess('User has created successfully');
        loading(true)
       navigate('/login')
        console.log(loggedUser);
        updateData(loggedUser, name, photo)
      })
      .catch((error) => {
        setError(error.message)
        
        
      })
      

  }
const updateData = (user,name,photo) => {
  console.log(user,name,photo);
  updateProfile(user, {
    displayName:name,
    photoURL: photo

  })
}

 
  return (
    <div>
      <h2 className='text-center'>Please Register</h2>
      <Form onSubmit={handleSubmit} className='w-25 m-auto mt-3 mb-5'>
      <Form.Group  controlId="formBasicEmail">
        <Form.Control type="text" name="name" id="" placeholder='Your name' /><br />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onChange={handleEmailChange} type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control onBlur={handlePasswordChange} type="password" name='Password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Control onBlur={handlePhotoChange}  type="text" name='photo' placeholder="PhotoURL" required />

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