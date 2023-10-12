import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header-component";
import Shop from './pages/shop/Shop-component'
import HomePage from "./pages/homepages/HomePage-component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-component";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={ <Shop/> }/>
        <Route path="/signin" element={<SignInAndSignUp/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
