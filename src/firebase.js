import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA35VcWKBfe8XsfHPOq2ymG2AHuD0l7g6w",
  authDomain: "react-slack-26e0d.firebaseapp.com",
  projectId: "react-slack-26e0d",
  storageBucket: "react-slack-26e0d.appspot.com",
  messagingSenderId: "192668579745",
  appId: "1:192668579745:web:8bd0e3b28abbd5fbba3de0"
};

  // Use this to initialize the firebase App
  const firebaseapp = firebase.initializeApp(firebaseConfig);

  // Use these for db, auth & provider
  const db = firebaseapp.firestore();

  export { db }