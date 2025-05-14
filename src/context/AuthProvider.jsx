import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider).then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      const githubEmail = result._tokenResponse.email || result.user.email;
      if (!user.email && githubEmail) {
        updateProfile(user, {
          email: githubEmail,
        }).then(() => {
          setUser({ ...user, email: githubEmail });
        });
      }

      return result;
    });
  };

  const signUp = (email, password, name) => {
    // Register user with email/password
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // After signing up, update the profile with name
        return updateProfile(user, { displayName: name });
      })
      .then(() => {
        setUser({ ...auth.currentUser });
      });
  };

  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  
  // Password reset function
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password reset email sent!');
      })
      .catch((err) => {
        console.error('Error sending password reset email:', err);
      });
  };

  const updateUserProfile = async (displayName, photoURL) => {
    await updateProfile(auth.currentUser, { displayName, photoURL });
    setUser({ ...auth.currentUser }); // Let onAuthStateChanged refresh if needed
  };

  const logOut = () => {
    setIsLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    setUser,
    isLoading,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    resetPassword, // <-- Added here
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
