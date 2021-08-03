import React, { useState } from "react";
import {Link} from "react-router-dom"

function SigninScreen() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
            <label />
            <button className="primary" type="submit" >Sign In</button>
        </div>
        <div>
            <label />
            <div>
                New Customer ? <Link to="/register">Create Your Account</Link>
            </div>
        </div>
      </form>
    </div>
  );
}

export default SigninScreen;
