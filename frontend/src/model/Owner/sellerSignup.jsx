import React from 'react'
import Input from '../../Components/input'
import { BACKEND_URL } from '../../../config'
import { toast, Toaster } from 'sonner'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "../../styles/SellerSignup.css"

const SellerSignup = ({authType}) => {
    const navigate = useNavigate()
    const [formData,setFormData] = React.useState({
        name: "",
        email: "",
        phone: null,
        idProof: "",
        password: ""
    })

    function handleChange(type,e){
        setFormData({
            ...formData,
            [type]: e.target.value
        })
    }
    async function handleSubmit(){
        const data = {
            ...formData,
            phone: parseInt(formData.phone)
        }
        try {
            const response = await axios.post(`${BACKEND_URL}/owner/signup`,data)
            toast.success("Signup Successful")
            localStorage.setItem("token",response.data.token)
        localStorage.setItem("username",response.data.username)
            setTimeout(()=>{
                navigate("/seller/add")
            },2000)
        } catch (error) {
            toast.error("invalid credentials")
            console.log(error)
        }

    }
  return (


    <div className="signup-container">
      <div className="signup-form">
        <h2>Seller Sign Up</h2>

        <input
          type="text"
          placeholder="John Doe"
          name="Name"
          id="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e)}
        />
        <input
          type="email"
          placeholder="john@gmail.com"
          name="Email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e)}
        />
        <input
          type="number"
          placeholder="9876543210"
          name="Phone"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e)}
        />
        <input
          type="text"
          placeholder="CIX897654"
          name="Id Proof"
          id="idproof"
          value={formData.idProof}
          onChange={(e) => handleChange('idProof', e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="Password"
          id="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e)}
        />
        
        <button className="submit-btn" onClick={handleSubmit}>Sign Up</button>
        
        <p>Don't have a account? <a onClick={()=>{authType("signin")}}>Signin</a></p>
        
      </div>
      <Toaster />
    </div>


    // <div>
    //     <Input type="text" placeholder="John Doe" name="Name" id="name" onChange={(e)=>handleChange("name",e)}  />
    //     <Input type="email" placeholder="john@gmail.com" name="Email" id="email" onChange={(e)=>handleChange("email",e)}  />
    //     <Input type="number" placeholder="9876543210" name="Phone" id="phone" onChange={(e)=>handleChange("phone",e)}  />
    //     <Input type="text" placeholder="CIX897654" name="Id Proof" id="idproof" onChange={(e)=>handleChange("idProof",e)}  />
    //     <Input type="password" placeholder="" name="Password" id="password" onChange={(e)=>handleChange("password",e)}  />
    //     <button className='' onClick={handleSubmit}>Sign Up</button>
    //     <p>Don't have a account? <a onClick={()=>{authType("signin")}}>Signin</a></p>
    //     <Toaster />
    // </div>
  )
}

export default SellerSignup