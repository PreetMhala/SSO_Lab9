
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxoCbypTVlihtSURICUGsTv2nkEAnBfJw",
  authDomain: "pritcloud-88cf1.firebaseapp.com",
  projectId: "pritcloud-88cf1",
  storageBucket: "pritcloud-88cf1.appspot.com",
  messagingSenderId: "262874229467",
  appId: "1:262874229467:web:7d2d1281603ac0c1b97afe",
  measurementId: "G-GKTRXJH5SY"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const googleAuthProvider = new GoogleAuthProvider(); 

export { auth, db, googleAuthProvider }; 

