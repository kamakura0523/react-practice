// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,doc,setDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL2Gyi3dRGkNJBMj4jNCgVplKKJyOJPfk",
  authDomain: "fir-react-tutorial-3d718.firebaseapp.com",
  projectId: "fir-react-tutorial-3d718",
  storageBucket: "fir-react-tutorial-3d718.appspot.com",
  messagingSenderId: "950735895443",
  appId: "1:950735895443:web:1482ed4707f4ec64834666"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default db;

// Sign up with email and password
export const siginupWithEmailAndPassword = async (username,email, password) => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword( email, password);
      const user = userCredential.user;

      // Firestoreにユーザー名を保存
    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email
    });
    alert("登録成功");
    return userCredential;
  } catch (error) {
    alert("登録失敗");
    console.log(error);
  }
};



export const sigininWithEmailAndPassword = async (username,email, password) => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword( email, password);
      const user = userCredential.user;

      // Firestoreにユーザー名を保存
    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email
    });
    alert("サインイン成功");
    return userCredential;
  } catch (error) {
    alert("サインイン失敗");
    console.log(error);
  }
};
