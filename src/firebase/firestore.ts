import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';

export const createDocument = async <T extends object>(collectionName: string, payload: T) =>
  addDoc(collection(db, collectionName), payload);

export const readCollection = async <T>(collectionName: string) => {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((row) => ({ id: row.id, ...(row.data() as T) }));
};

export const updateDocument = (collectionName: string, id: string, payload: Record<string, unknown>) =>
  updateDoc(doc(db, collectionName, id), payload);

export const deleteDocument = (collectionName: string, id: string) => deleteDoc(doc(db, collectionName, id));
