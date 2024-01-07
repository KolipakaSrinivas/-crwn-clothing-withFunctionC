import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header-component";
import Shop from './pages/shop/Shop-component'
import HomePage from "./pages/homepages/HomePage-component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-component";

// Firebase
import { auth ,createUserProfile} from "./firebase/firebase.utils";
import { onAuthStateChanged ,signOut} from "firebase/auth";


function App() {

  const [currentUser,setcurrentUser] = useState(null);


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user)
      } else {
        setcurrentUser(null)
      }
    });
  })


  const userSignOut = () =>{
    signOut(auth).then(() => {
      console.log('suceessFul log out')
    }).catch((error) => {
      // An error happened.
      console.error(error.meassage)
    });
  }




  return (
    <React.Fragment>
      <Header currentUser={currentUser} userSignOut={userSignOut}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={ <Shop/> }/>
        <Route path="/signin" element={<SignInAndSignUp/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
