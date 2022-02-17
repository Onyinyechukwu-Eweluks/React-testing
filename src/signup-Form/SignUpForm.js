import React, { useState } from "react";
import validator from "validator";

const SignUpForm = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(inputValue.email)) {
      return setError("invalid email");
    }
    if (!validator.isLength(inputValue.password, { min: 8 })) {
      return setError("password must not be less than 8");
    }
    if (!validator.matches(inputValue.confirmPassword, inputValue.password)) {
      return setError("password does not match");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"> Email address</label>
            <input
              type="email"
              placeholder="email"
              name="email"
              defaultValue={inputValue.email}
              id="email"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password"> Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              id="password"
              className="form-control"
              defaultValue={inputValue.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password"> Confirm Password</label>
            <input
              type="password"
              placeholder="confirm-password"
              name="confirmPassword"
              id="confirm-password"
              className="form-control"
              defaultValue={inputValue.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
