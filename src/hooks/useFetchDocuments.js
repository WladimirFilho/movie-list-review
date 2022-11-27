import db from "../firebase/config";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

export const useFetchDocuments = (docCollection) => {
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const loadData = () => {
      setLoading(true);
      const collectionRef = collection(db, docCollection);
      const q = query(collectionRef, orderBy("createdAt", "asc"));
      try {
        onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    loadData();
  }, [docCollection]);

  return { documents, error, loading };
};
