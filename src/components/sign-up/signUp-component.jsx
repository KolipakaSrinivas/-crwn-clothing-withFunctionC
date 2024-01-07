import React from "react";
import "./signUp.styles.css";

import CustomButton from "../custom-button/Custom-Button-component";
import FormInput from "../form-input/Form-input-component";

function SignUp() {
  const [details, setDetails] = React.useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <div className="sign-up">
      <h2 className="title">I do have an account</h2>
      <span>Sign up with your email and password </span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="display Name"
          value={details.displayName}
          required
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={details.email}
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={details.password}
          required
          onChange={handleChange}
        />
        <FormInput
          type="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          value={details.confirmPassword}
          required
          onChange={handleChange}
        />
        <CustomButton>Sign Up</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
