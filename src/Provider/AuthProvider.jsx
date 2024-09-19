import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile , } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext =createContext(null)

const auth =getAuth(app)



const AuthProviders = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading] =useState(true)
    const [updatePro,setUpdatePro] =useState(null)
    console.log(user)
    console.log(updatePro)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updating = (name,photo)=>{
            // setLoading(true)
        updateProfile(auth.currentUser,{displayName:name,photoURL:photo})
        .then(() =>{
            setUser({...user,displayName:name,photoURL:photo})
        })

        
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('observe useEffect authProvider', currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe()
        }
        
    },[])

    const authInfo={createUser,user,logOut,signIn,updating,updatePro,loading,setUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;