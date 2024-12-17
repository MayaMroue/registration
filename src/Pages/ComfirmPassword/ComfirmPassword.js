import React, { useState } from "react";
import logo from "../../Assets/Images/Logo\ PNG.png"
import "../BackgroundImage.css"
import "../Registration.css"

import { Eye, EyeOff, MoveLeft } from "lucide-react";

const ConfirmPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);


  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");


  return (
    <div className="Container ConfirmPassword background">
      <div className="Card " style={{marginTop:"5px",padding:"63px 30px"}}>
        <div className="logo">
          <img src={logo} alt="" />
          <h3 style={{ marginBottom:"2px" }}>SET YOUR NEW PASSWORD</h3>
          <p style={{ fontSize: "16px", textAlign: "center",margin:"0px",width:"60%" }}>Your new password must be different from previous used password</p>
        </div>
        <div className="Card-form MoreGap">
          
          

          <div className="input-form ">
            <span>Password</span>
            <div className="relative input-form">
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
          </div>
          <div className="input-form">
            <span>Confirm Password</span>
            <div className="relative input-form">
            <input
                type={showPassword2 ? "text" : "password"}
                value={password2}
                placeholder="********"
                onChange={(e) => setPassword2(e.target.value)}
              />
              {password2 === "" ? (
                <EyeOff
                  className="eye"
                  onClick={() => setShowPassword2(!showPassword2)}
                />
              ) : showPassword2 ? (
                <Eye
                  className="eye"
                  onClick={() => setShowPassword2(!showPassword2)}
                />
              ) : (
                <EyeOff
                  className="eye"
                  onClick={() => setShowPassword2(!showPassword2)}
                />
              )}
            </div>
            
          </div>
          <button className="btn btn-primary">CREATE ACCOUNT</button>

          <a  href="/Login" className="BottomLine"style={{color:"black",textDecoration:"none",cursor:"pointer"}}>
          <MoveLeft size={20} style={{color:"#039198",marginRight:"10px"}}  /><span>Return to the Login screen</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
