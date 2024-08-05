import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsBtLC8clihdN0MxBaYgjnMDe8h3QMuRw",
  authDomain: "pantry-inventory-ae1cf.firebaseapp.com",
  projectId: "pantry-inventory-ae1cf",
  storageBucket: "pantry-inventory-ae1cf.appspot.com",
  messagingSenderId: "496844906110",
  appId: "1:496844906110:web:60a5479ac0a7adbb71422f"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };