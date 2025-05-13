import { useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { AuthContext } from "./AuthContext";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


   const googleProvider = new GoogleAuthProvider();

   const updateUserProflie = (displayName, photoURL) => {
       updateProfile(auth.currentUser, { displayName, photoURL})
       .then(() => {
         setUser({...user, displayName, photoURL})
       })
       .catch(err=> {
        console.log(err)
       })
   }

   const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider)
   }

   const logOut = () => {
    setIsLoading(false)
    signOut(auth)
    
   }


   useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser)
            setIsLoading(false)
          })

          return () => unSubscribe() //cleanup function
   }, [])

   const userInfo = {
    signInWithGoogle,
    user,
    logOut,
    isLoading,
    updateUserProflie
   }
    



    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;