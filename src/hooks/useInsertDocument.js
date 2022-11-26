import db from "../firebase/config";
import { collection, addDoc, Timestamp, setDoc, doc } from "firebase/firestore";
import { useState } from "react";

export const useInsertDocument = (docCollection) => {
  const [error, setError] = useState(null);
  const [message, setMessege] = useState(null);
  const [loading, setLoading] = useState(null);

  const insertDocument = async (docData, id = null) => {
    setLoading(true);
    try {
      if (id) {
        const data = { ...docData, createdAt: Timestamp.now() };
        await setDoc(doc(db, docCollection, id), data);
      } else {
        const ref = collection(db, docCollection);
        const data = { ...docData, createdAt: Timestamp.now() };
        await addDoc(ref, data);
      }

      setMessege("Movies inserted successfully");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err);
      setLoading(false);
    }
  };

  return { insertDocument, message, error, loading };
};
