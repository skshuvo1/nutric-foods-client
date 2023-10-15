import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../firebase/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();

    const {user, loading} = useContext(authContext);
    if(loading){
        return <div className='text-center my-48'>
         <span className="loading loading-spinner text-secondary"></span>
        </div>
         
     }
     if(user){
        return children;
     }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;