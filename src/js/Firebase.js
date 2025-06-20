import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAXe2uzYWGb3ZHvoajtDbJGwCFftM30gLc",
  authDomain: "netherlinkmc.firebaseapp.com",
  projectId: "netherlinkmc",
  storageBucket: "netherlinkmc.firebasestorage.app",
  messagingSenderId: "530699661427",
  appId: "1:530699661427:web:d2a56b107f860458057a06",
  measurementId: "G-3B5GJ3FFKF"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export { signInWithPopup };