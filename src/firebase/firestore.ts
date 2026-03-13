import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';

export const createDocument = async <T extends object>(collectionName: string, payload: T) => {
  if (!db) throw new Error('Firebase is not configured');
  return addDoc(collection(db, collectionName), payload);
};

export const readCollection = async <T>(collectionName: string) => {
  if (!db) return [] as T[];
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map((row) => ({ id: row.id, ...(row.data() as T) }));
};

export const readDocument = async <T>(collectionName: string, id: string) => {
  if (!db) return null as (T & { id: string }) | null;
  const snapshot = await getDoc(doc(db, collectionName, id));
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...(snapshot.data() as T) };
};

export const updateDocument = (collectionName: string, id: string, payload: Record<string, unknown>) => {
  if (!db) throw new Error('Firebase is not configured');
  return updateDoc(doc(db, collectionName, id), payload);
};

export const deleteDocument = (collectionName: string, id: string) => {
  if (!db) throw new Error('Firebase is not configured');
  return deleteDoc(doc(db, collectionName, id));
};
