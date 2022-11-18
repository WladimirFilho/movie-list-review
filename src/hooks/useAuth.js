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
  const actionCodeSettings = { url: "http://localhost:3001/" };

  const register = async (data) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, { displayName: data.username });
      const userDb = {
        username: data.username,
        email: data.email,
      };
      await setDoc(doc(db, "users", user.uid), userDb);
    } catch (err) {}
  };
};
