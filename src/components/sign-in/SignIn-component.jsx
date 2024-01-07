import React from "react";
import { useState, Fragment } from "react";
import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../../firebase/firebase.utils";
import "./signin.styles.css";
import FormInput from "../form-input/Form-input-component";
import CustomButton from "../custom-button/Custom-Button-component";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    // console.log(e.traget)
  }

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error.massage);
      });
  }

  return (
    <Fragment>
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handlesubmit}>
          <FormInput
            type="email"
            // name="email"
            label="Email"
            value={email}
            sinkButton={handleChange}
            autoComplete="false"
            required
          />
          <FormInput
            type="password"
            // name="password"
            value={password}
            sinkButton={handleChange}
            label="Password"
            required
            autoComplete="false"
          />
          <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>
            Sign IN With Google
          </CustomButton>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default SignIn;
