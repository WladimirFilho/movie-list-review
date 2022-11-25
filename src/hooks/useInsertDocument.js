import db from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";

export const useInsertDocument = (docCollection) => {
  const [error, setError] = useState(null);
  const [message, setMessege] = useState(null);
  const [loading, setLoading] = useState(null);

  const inserDocument = async (docData) => {
    setLoading(true);
    try {
      const ref = collection(db, docCollection);
      const data = { ...docData, createdAt: Timestamp.now() };
      await addDoc(ref, data);
      setMessege("Movies inserted successfully");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { inserDocument, message, error, loading };
};
