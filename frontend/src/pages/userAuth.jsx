import React, { useState } from "react";
import LoginForm from "../model/User/LoginForm";
import SignupForm from "../model/User/SignupForm";
import ImageContainer from "../model/User/ImageConatiner";
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
