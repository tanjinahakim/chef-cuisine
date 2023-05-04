import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [loader,setLoader]=useState(true);
const [user,setUser]=useState(null);
    
    
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    const updated =(user,name, photo) =>{
        return updateProfile(user,{displayName:name,photoURL:photo});
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
        setLoader(true);
        return signInWithPopup(auth,googleProvider);
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log('login successfully');
            setUser(loggedUser);
            setLoader(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user, 
        createUser,
        signIn,
        logOut,
        updated,
        handleGoogleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;