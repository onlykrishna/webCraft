import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Dev-time checks: surface missing or malformed env values in browser console
if (import.meta.env.MODE !== 'production') {
  if (!firebaseConfig.apiKey) {
    // eslint-disable-next-line no-console
    console.error('Missing VITE_FIREBASE_API_KEY - Firebase will fail to initialize/auth.');
  } else if (typeof firebaseConfig.apiKey === 'string' && firebaseConfig.apiKey.length < 20) {
    // eslint-disable-next-line no-console
    console.warn('VITE_FIREBASE_API_KEY looks unusually short — verify value in .env or Firebase console.');
  } else {
    // eslint-disable-next-line no-console
    console.log('VITE_FIREBASE_API_KEY present');
  }
  // Basic sanity checks
  if (!firebaseConfig.authDomain || !firebaseConfig.projectId) {
    // eslint-disable-next-line no-console
    console.warn('Firebase authDomain or projectId looks missing or incorrect:', {
      authDomain: firebaseConfig.authDomain,
      projectId: firebaseConfig.projectId
    });
  }
}

let app: any = null;
let _auth: any = null;
let _db: any = null;
let _storage: any = null;
let isFirebaseReady = false;

try {
  app = initializeApp(firebaseConfig);
  _auth = getAuth(app);
  _db = getFirestore(app);
  _storage = getStorage(app);
  isFirebaseReady = true;
  // eslint-disable-next-line no-console
  if (import.meta.env.MODE !== 'production') console.log('Firebase initialized successfully');
} catch (err) {
  // eslint-disable-next-line no-console
  console.error('Firebase initialization failed:', err);
}

export const auth = _auth;
export const db = _db;
export const storage = _storage;
export { isFirebaseReady };
