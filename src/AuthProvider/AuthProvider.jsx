import React, { createContext,useState,useEffect } from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile,signInWithPopup,GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
// import { auth } from '../Firebase/firebase.config';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../Firebase/firebase.config';

export const  UserContext=createContext(null)

 const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    // register user
    // ********************************************************************
    const registerUser = (email,password)=>{
        setLoading(true);
     return  createUserWithEmailAndPassword(auth, email, password)
    }
    // ****************************************************************
    // Sign in User
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
    // ****************************************************************

  // Google login
  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then(()=>{
toast.success('logged in successfully')
    })
  };
// Github Login


const GithubProvider = new GithubAuthProvider();
GithubProvider.addScope('user:email');
const loginWithGithub =()=>{
    signInWithPopup(auth,GithubProvider)
    .then(()=>{
        toast.success('logged in successfully')
            })
}
// onAuth state
// onAuth state
useEffect(() => {
  const unSubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser(user);
          setLoading(false);
      } else {
          setUser(null);
          setLoading(false);
      }
  });
  return () => unSubscriber();
}, []);


// Function to update user profile (name and photo)
const updateUserProfile = (user, name, photo) => {
    updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    }).then(() => {
        // Profile updated successfully
       toast("Profile updated successfully");
    }).catch((error) => {
        // An error occurred while updating profile
        console.log(error);
    });
};

      // Log ut user
const LogOut=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        toast.success('log out successfully')
      }).catch(() => {
        // An error happened.
        toast.warning('log out fail')
      });
}

    const info = {
        registerUser,
        loginUser,
        loginWithGoogle,
        loginWithGithub,
        LogOut,
        user,
        loading,
        setUser,
        updateUserProfile

    }
    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;