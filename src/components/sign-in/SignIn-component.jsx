import React from "react";
import { useState } from "react";
import { Fragment } from "react";

import FormInput from '../form-input/Form-input-component'

function SignIn() {
  const [data, setData] = useState({ email: "", password: "" });

  function handlesubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const {value,name} = e.target;
    setData({[name]:value})
    console.log(data)
  }
  return (
    <Fragment>
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <FormInput onSubmit={handlesubmit}>
          <input type="email" name="email" value={data.email} onChange={handleChange} required />
          <label>Email</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          <input type="submit" />
        </FormInput>
      </div>
    </Fragment>
  );
}

export default SignIn;
