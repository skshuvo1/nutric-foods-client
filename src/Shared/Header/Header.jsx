// eslint-disable-next-line no-unused-vars
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/nutric food.png';
import './Header.css';
import { authContext } from '../../firebase/AuthProvider';


const Header = () => {

    const {user, logOut} = useContext(authContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className='d-flex justify-content-between mx-5 my-2 px-3 align-items-center'>
            <div>
               <img style={{
          borderColor: 'red',
          borderWidth: 5,
          height: 75,
          width: 100,
        }} src={logo} alt="" />
            </div>
            <div className=' d-flex gap-4'>
            
            <Link className='text-decoration-none hover:text-decoration-underline' to='/'>Home</Link>
            <Link className='text-decoration-none' to='/blogs'>Blogs</Link>
            </div>
            <div>
            {
            user?<div>
                    <img className='rounded-circle userImg me-3'  src={user.photoURL}  alt="" /> 
                <button onClick={handleLogOut} className=' ms-1 rounded text-white bg-primary px-4 py-2'>Log Out</button> 
            </div>:
            
            <Link to='/login'><button className=' ms-2 rounded text-white bg-primary px-4 py-2'>Login</button></Link>
            }
            </div>
            
            
        </div>
            
        </div>
        
    );
};

export default Header;