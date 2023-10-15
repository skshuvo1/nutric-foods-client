// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../firebase/AuthProvider';


const Routes = () => {

    const {loading} = useContext(authContext)
    if(loading){
        return <div className='text-center my-48'>
         <span className="loading loading-spinner text-secondary"></span>
        </div>
         
     }
    return (
        
        <div>
            <Header></Header>
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Routes;