import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {auth} from '../Firebase/firebase.init'
import { createUserWithEmailAndPassword,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);
    console.log(user)

    // Create user with email and Password
    const createUserWithEmail =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //update User Profile
    const updateUserProfile =(userData)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,userData);
    }

    // User login with email
    const userLoginWithEmail=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user login with Google
    const provider = new GoogleAuthProvider();
    const userLoginWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    // user sign Out
    const userSignOut=()=>{
        setLoading(true);
        return signOut(auth)
    }


    // User Manage => AuthState
    useEffect(()=>{
        const Unsubscriber = onAuthStateChanged(auth,(user)=>{
           setUser(user)
           setLoading(false);
        })
        return ()=> Unsubscriber();
    },[])

    const userInfo = {
        user,
        loading,
        userSignOut,
        updateUserProfile,
        createUserWithEmail,
        userLoginWithEmail,
        userLoginWithGoogle
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;