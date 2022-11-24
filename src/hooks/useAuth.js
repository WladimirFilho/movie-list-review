import db from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  updatePassword,
  updateEmail,
} from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [message, setMessege] = useState(null);
  const [loading, setLoading] = useState(null);

  const auth = getAuth();

  const register = async (email, password, username, modalTocloseAndOpen) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: username });
      const userDb = {
        username: username,
        email: email,
      };
      await setDoc(doc(db, "users", user.uid), userDb);
      modalTocloseAndOpen(false);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setLoading(false);
    }
  };

  const loginUser = async (email, password, modalLogin) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      modalLogin(false);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  const logoutUser = () => {
    signOut(auth);
  };

  const changeUserName = async (user, username) => {
    setLoading(true);
    try {
      await updateProfile(user, { displayName: username });
      setMessege("Name changed");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const changePassword = async (user, password) => {
    setLoading(true);
    try {
      await updatePassword(user, password);
      setMessege("Name changed");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return {
    auth,
    register,
    logoutUser,
    loginUser,
    changeUserName,
    changePassword,
    error,
    message,
    loading,
  };
};
