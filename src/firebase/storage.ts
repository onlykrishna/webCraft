import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/firebase/config';

export const uploadFile = async (path: string, file: File) => {
  if (!storage) throw new Error('Firebase is not configured');
  const fileRef = ref(storage, path);
  const result = await uploadBytes(fileRef, file);
  return getDownloadURL(result.ref);
};
