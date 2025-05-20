import React from 'react';
import AuthContext from './AuthContext';
import {auth} from '../Firebase/firebase.init'
import { createUserWithEmailAndPassword,GoogleAuthProvider,signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {

    // Create user with email and Password
    const createUserWithEmail =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //update User Profile
    const updateUserProfile =(userData)=>{
        return updateProfile(auth.currentUser,userData);
    }

    // User login with email
    const userLoginWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user login with Google
    const provider = new GoogleAuthProvider();
    const userLoginWithGoogle=()=>{
        return signInWithPopup(auth,provider);
    }


    const userInfo = {
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