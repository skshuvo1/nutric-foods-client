import {React,useState, useEffect} from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext } from 'react';
import app from './firebase.config';


export const authContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
            setTimeout(() => {
                setLoading(false)
            }, 5000)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const userInfo = {
        createUser,
        signInUser,
        user,
        logOut,
        loading

    }
    return (
        <authContext.Provider value = {userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;