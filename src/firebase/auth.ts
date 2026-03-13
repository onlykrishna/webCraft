import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/firebase/config';

export const onAuthChanged = (callback: (user: User | null) => void) => {
  if (!auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
};

export const signOutUser = () => {
  if (!auth) return Promise.resolve();
  return signOut(auth);
};
