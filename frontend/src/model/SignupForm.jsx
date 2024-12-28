import React from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import "../App.css"

const UserSignup = ({ setIsSignupActive }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChange(type, e) {
    setFormData({
      ...formData,
      [type]: e.target.value,
    });
  }

  async function handleSubmit() {
    try {
      const response = await axios.post(`${BACKEND_URL}/user/signup`, formData);
      localStorage.setItem("token", response.data.token);
      toast.success("Signup Successful");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Invalid credentials");
      console.log("Error while signing up", error);
    }
  }

  return (


    <div className="form signup-form">
      <h2>Create Account</h2>
      {/* <p>Please fill in the details to create your account.</p> */}
      <input type="text" placeholder="Name" name="name" onChange={(e) => handleChange("name", e)} />
      <input type="text" placeholder="Username" name="username" onChange={(e) => handleChange("username", e)} />
      <input type="email" placeholder="Email" name="email" onChange={(e) => handleChange("email", e)} />
      <input type="password" placeholder="Password" name="password" onChange={(e) => handleChange("password", e)} />
      <button className="btn"  onClick={handleSubmit}>Sign Up</button>
      <p>
        Already have an account?{" "}
        <span onClick={() => setIsSignupActive(false)}>Login</span>
      </p>
      <Toaster />
    </div>


);
};

export default UserSignup;





    



