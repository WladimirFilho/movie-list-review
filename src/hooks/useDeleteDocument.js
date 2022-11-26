import db from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import { useState } from "react";

export const useDeleteDocument = (docCollection) => {
  const [error, setError] = useState(null);
  const [message, setMessege] = useState(null);
  const [loading, setLoading] = useState(null);

  const deleteDocument = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, docCollection, id));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { deleteDocument, message, error, loading };
};
