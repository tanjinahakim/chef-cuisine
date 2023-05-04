import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loader,setLoader]=useState(true);
const [loading,setLoading]=useState(true);
    
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoading(true);
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
    const githubProvider = new GithubAuthProvider();
    const handleGitHubLogin = () =>{
        setLoader(true);
        return signInWithPopup(auth,githubProvider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log('login successfully');
            setUser(loggedUser);
            setLoader(false);
            setLoading(false);
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
        handleGoogleLogin,
        handleGitHubLogin,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;