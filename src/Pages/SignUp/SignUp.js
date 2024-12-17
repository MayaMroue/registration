import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../Assets/Images/Logo\ PNG.png"
import "../BackgroundImage.css"
import "../Registration.css"

import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);


  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");


  return (
    <div className="Container SignUp background">
      <div className="Card " style={{marginTop:"5px"}}>
        <div className="logo">
          <img src={logo} alt="" />
          <h3>CREATE ACCOUNT</h3>
        </div>
        <div className="Card-form">
          <div className="divCol">
            <div className="input-form FirstName">
              <span>First Name</span>
              <input type="text" placeholder="John" />
            </div>
            <div className="input-form LastName">
              <span>Last Name</span>
              <input type="text" placeholder="doe" />
            </div>
          </div>
          <div className="input-form ">
            <span>Email Address</span>
            <input type="email" placeholder="john@gmail.com" />
          </div>

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
            <div className="rememberLine">
              <span className="remember">
                {" "}
                <input type="checkbox" />I accept the{" "}
              </span>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
          <button className="btn btn-primary">CREATE ACCOUNT</button>

          <div className="loginLine">
            {" "}
            <span>Already have an account?</span> <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
