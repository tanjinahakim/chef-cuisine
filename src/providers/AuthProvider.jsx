import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
    
    
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
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log('login successfully');
            setUser(loggedUser);
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
        updated
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;