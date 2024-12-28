import React from "react";
import { Toaster, toast } from "sonner";
import input from "../Components/input"
import axios from "axios"
import { BACKEND_URL } from "../../config"
import {useNavigate, Link} from "react-router-dom"

const UserSignin = ({ setIsSignupActive }) => {
  const navigate = useNavigate()
  const [formData,setFormData] = React.useState({
    email: "",
    password: ""
  })

  function handleChange(type,e){
    setFormData(
      {
        ...formData,
        [type]: e.target.value
      }
    )
  }

  async function handleSubmit(){
    try {
      const response = await axios.post(`${BACKEND_URL}/user/signin`,formData)
      localStorage.setItem("token",response.data.token)
      toast.success("Signin Successful")
      setTimeout(()=>{
        navigate("/")
      },2000)
    } catch (error) {
      toast.error("invalid credentials")
      console.log("error while signing up",error)
    }
  }
  return (
    <div className="form login-form">
      <h2>Welcome Back</h2>
      <p>Enter your credentials to signup</p>
      {/* <p>Please login to your account.</p> */}
      <input type="email" placeholder="Email"  onChange={(e)=>handleChange("email",e)} />
      <input type="password" placeholder="Password" onChange={(e)=>handleChange("password",e)} />
      <button className="btn" onClick={handleSubmit}>Login</button>
      <p>
        Dont have an account?{" "}
        <span onClick={() => setIsSignupActive(true)}>Sign Up</span>
      </p>
      <Toaster />

    </div>
  );
}

export default UserSignin;

