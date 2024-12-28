import React, { useState } from "react";
import LoginForm from "../model/LoginForm";
import SignupForm from "../model/SignupForm";
import ImageContainer from "../model/ImageConatiner";
import "../App.css";

const UserAuth = () => {
  const [isSignupActive, setIsSignupActive] = useState(false);

  return (
    <div className={`container ${isSignupActive ? "signup-active" : ""}`}>
      <div className="form-container">
        <LoginForm setIsSignupActive={setIsSignupActive} />
        <SignupForm setIsSignupActive={setIsSignupActive} />
      </div>
      <ImageContainer />
    </div>
  );
}


export default UserAuth;
