import React, { useState } from 'react'
import "./Login.css"
import "../BackgroundImage.css"
import logo from "../../Assets/Images/Logo\ PNG.png"
import { Eye, EyeOff } from 'lucide-react'
import "../Registration.css"

const Login = () => {

   const [showPassword, setShowPassword] =useState(false);
     const [password, setPassword] = useState("");
   
  return (


<div className='Container background Login' style={{}}>


            <div className='Card' style={{}} >
   <div className='logo'>
      <img src={logo} alt="" />
      <h3>LOGIN</h3>
       </div>

            <div className='Card-form' style={{}} >
             <div className='divs' style={{}}>
                <span>Email Address</span>
                <input type="email" placeholder="john@gmail.com" className="input input-bordered w-full max-w-xs" />
             </div>       

             <div className='divs' >

                <span>Password</span>
                <div className='relative divs' >
                 <input
                               type={showPassword ? "text" : "password"}
                               value={password}
                               placeholder="********"
                               onChange={(e) => setPassword(e.target.value)}
                             />
                             {password === "" ? (
                               <EyeOff
                                 className="eye"
                                 onClick={() => setShowPassword(!showPassword)}
                               />
                             ) : showPassword ? (
                               <Eye
                                 className="eye"
                                 onClick={() => setShowPassword(!showPassword)}
                               />
                             ) : (
                               <EyeOff
                                 className="eye"
                                 onClick={() => setShowPassword(!showPassword)}
                               />
                             )}
                
                </div>
             <div className='rememberLine'>
               <span className='remember' > <input type="checkbox" /> Remember Me</span>  
                 <a href="/forgetpassword">Forget Password</a> 
               </div>  
             </div>   
                <button className="btn btn-primary">LOGIN</button>  



            <div className='signUpLine' > <span >Don't have an account?</span>
             <a href="/signup">Create an account</a>
            </div>
            </div>
            </div>
</div>


  ) 
}

export default Login
