// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/nutric food.png'
// import MainImg from '../../pages/MainImg/MainImg';
// import Blogs from '../../pages/Blogs/Blogs';



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
            <div  className='d-flex gap-4 textdecoration-none'>
            <Link style={{textDecoration:'none'}} to='/'>Home</Link>
            <Link style={{textDecoration:'none'}} to = '/blogs'>Blogs</Link>
            </div>
            <div>
            <Link to='/login'><button>Login</button></Link>
            </div>
            
        </div>
            
        </div>
        
    );
};

export default Header;