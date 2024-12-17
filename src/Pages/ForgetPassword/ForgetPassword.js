import React, { useState } from "react";
// import "./ForgetPassword.css"
import "../BackgroundImage.css";
import logo from "../../Assets/Images/Logo PNG.png";
import "../Registration.css";
import { MoveLeft } from "lucide-react";

const ForgetPassword = () => {
  return (
    <div className="Container background ForgetPassword" style={{}}>
      <div className="Card" >
        <div className="logo">
          <img src={logo} alt="" />
          <h3 style={{ marginBottom:"0px" }}>ForgetPassword</h3>
          <p style={{ fontSize: "14px", textAlign: "center",margin:"0px" }}> Please provide your email address to reset the password</p>
        </div>

        <div className="Card-form" style={{marginTop:"20px"}}>
          <div className="input-form" style={{}}>
            <span>Email Address</span>
            <input
              type="email"
              placeholder="john@gmail.com"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn btn-primary">CONFIRM</button>

          <a  href="/Login" className="BottomLine"style={{color:"black",textDecoration:"none",cursor:"pointer"}}>
          <MoveLeft size={20} style={{color:"#039198",marginRight:"10px"}}  /><span>Return to the Login screen</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
