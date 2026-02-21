import { COLLECTIONS } from '@/firebase/collections';
import { createDocument, readCollection } from '@/firebase/firestore';

export const getPackages = () => readCollection(COLLECTIONS.packages);
export const createPackage = (payload: any) => createDocument(COLLECTIONS.packages, payload);
export const packagesService = { key: 'packages' };
