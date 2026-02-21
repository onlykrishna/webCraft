import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/firebase/config';

export const onAuthChanged = (callback: (user: User | null) => void) => onAuthStateChanged(auth, callback);

export const signOutUser = () => signOut(auth);
