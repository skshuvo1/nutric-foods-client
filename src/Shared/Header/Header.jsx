// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/nutric food.png';
import './Header.css';
// import { NavLink } from 'react-bootstrap';
import ActiveLink from '../../pages/ActiveLink/ActiveLink';



const Header = () => {
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
            <nav  className=' d-flex gap-4'>
            
            <ActiveLink  to='/'>Home</ActiveLink>
            <ActiveLink to = '/blogs'>Blogs</ActiveLink>
            
            </nav>
            <div>
            <Link to='/login'><button className=' ms-5 rounded text-white bg-primary px-4 py-2'>Login</button></Link>
            </div>
            
        </div>
            
        </div>
        
    );
};

export default Header;