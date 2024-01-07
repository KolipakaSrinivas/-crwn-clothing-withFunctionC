import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import {
  doc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVXtWc3YVB4WYjrDcyc-Im-aisDl2QqbE",
  authDomain: "crwnclothing-c08fa.firebaseapp.com",
  projectId: "crwnclothing-c08fa",
  storageBucket: "crwnclothing-c08fa.appspot.com",
  messagingSenderId: "582705771077",
  appId: "1:582705771077:web:3aac92f16796268cae692c",
  measurementId: "G-XVLVG7T4B5"
};

export  const  createUserProfile = async (userAuth,additionlData) => {
  if(!userAuth) return
  console.log(doc('users/12789863'))
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();


