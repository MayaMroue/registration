import React, { useState } from "react";
import "./Profile.css";
import "../Registration.css";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "../..//lib/utils";
import { Button } from "../../Components/ui/button";
import { Calendar } from "../../Components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../Components/ui/popover";

import { Eye, EyeOff } from "lucide-react";

export const Profile = () => {
  const [date, setDate] = React.useState();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="profile">
      <div className="containerr">
        <div class="details">
          <h3>Account Details</h3>
          <div class="Griddetails">
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(209 222 223)",
                }}
                onClick={() => document.getElementById("file-input").click()}
              >
                {image ? (
                  <img
                    src={image}
                    alt="Selected"
                    style={{
                      width: "93%",
                      height: "93%",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span
                    className="spanfont"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "20px",
                      color: "#aaa",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Choose Image
                  </span>
                )}
              </div>

              {/* Hidden file input */}
              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px ",
                marginTop: "55px",
              }}
            >
              <div
                class="SmallscreenFlexCol "
                style={{ display: "flex", gap: "55px" }}
              >
                <div className="input-form" style={{}}>
                  <span className="spanfont">FIRST NAME</span>
                  <input
                    type="text"
                    placeholder="john"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="input-form" style={{}}>
                  <span className="spanfont">LAST NAME</span>
                  <input
                    type="text"
                    placeholder="doe"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
              <div
                class="SmallscreenFlexCol"
                style={{ display: "flex", gap: "55px" }}
              >
               <div className="input-form" style={{}}>
                  <span className="spanfont">EMAIL ADDRESSS</span>
                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="input-form" style={{}}>
                  <span className="spanfont">PASSWORD</span>
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
                    <a
                      href="#"
                      style={{
                        width: "100%",
                        textAlign: "right",
                        color: "#FFA200",
                        cursor: "pointer",
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      Change Password
                    </a>
                  </div>
                </div>

              
              </div>
            </div>
          </div>
        </div>
        <hr></hr>

        <div class="security">
          <h3 className="font-LBold text-xl">My Availability</h3>
          <div class="Gridsecurity">
            <div
              className="SmallscreenHidden"
              style={{
                width: "140px",
                height: "140px",
              }}
            ></div>
            <div 
              style={{ 
                display: "flex",
                 flexDirection: "column", 
                 gap: "30px " }} >
             
                <div className="input-form" style={{}}>
                  <span className="spanfont">WORK  SCHEDULE</span>
                  <div  style={{ 
                    padding: '11px 18px ',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'start',
                    borderRadius:'10px',
                    border:'1px solid #E7E7E7',
                    marginTop:'15px',
                    fontSize:'14px',
                    }}>
                   Mon - Fri | 9:00 AM - 05:00 PM | 30 Min/Slot | 18 Slot/Day 
                  </div> 
                </div>
                <div className="input-form" style={{}}>
                <div className="" style={{
                  display:'flex',
                  flexDirection:'column',
                  gap:'10px'
                }}>

                  <div  style={{display:'grid',marginTop:'5px', gridTemplateColumns:' repeat(5, 1fr)',
                    padding: '11px 18px 4px 18px',
                    alignItems:'center',
                    justifyContent:'space-between',
                    borderBottom: '1px solid #E7E7E7',
                    }}>
                     <span className="font-SemiBold text-Primary" style={{fontSize:'14px',color:'#BCCED0',fontWeight:'bold'}}>DATE</span>
                    <span className="font-LSemiBold text-Primary" style={{fontSize:'14px',color:'#BCCED0',fontWeight:'bold'}}>STATUS</span>
                    <span className="font-SemiBold text-Primary" style={{fontSize:'14px',color:'#BCCED0',fontWeight:'bold'}}>WEEK</span>
                    <span className="font-SemiBold text-Primary" style={{fontSize:'14px',color:'#BCCED0',fontWeight:'bold',textAlign:'center'}}>OVERRIDE</span>
                    <span className="font-SemiBold text-Primary" style={{fontSize:'14px',color:'#BCCED0',fontWeight:'bold',}}>ACTION</span>
                  </div> 
                  
                  {/* <div  style={{display:'grid', gridTemplateColumns:' repeat(5, 1fr)',
                    padding: '11px 18px 4px 18px',
                    alignItems:'center',
                    justifyContent:'space-between',
                    borderBottom: '1px solid #E7E7E7',
                    }}>
                     <span className="font-LRegular" style={{fontSize:'12px'}}>Mon 16, Feb 2024</span>
                    <span className="font-LSemiBold" style={{fontSize:'12px',fontWeight:'bold'}}>Unavailable</span>
                    <span className="font-LRegular text-Primary" style={{fontSize:'12px',textAlign:'center'}}>All Day</span>
                    <span className="font-LRegular" style={{fontSize:'12px'}}>action</span>
                  </div> 
                  <div  style={{display:'grid', gridTemplateColumns:' repeat(5, 1fr)',
                    padding: '11px 18px 4px 18px',
                    alignItems:'center',
                    justifyContent:'space-between',
                    borderBottom: '1px solid #E7E7E7',
                    }}>
                     <span className="font-LRegular" style={{fontSize:'12px'}}>Mon 16, Feb 2024</span>
                    <span className="font-LSemiBold" style={{fontSize:'12px',fontWeight:'bold'}}>Unavailable</span>
                    <span className="font-LRegular text-Primary" style={{fontSize:'12px',textAlign:'center'}}>All Day</span>
                    <span className="font-LRegular" style={{fontSize:'12px'}}>action</span>
                  </div>  */}
                  <div  style={{display:'grid', gridTemplateColumns:' repeat(5, 1fr)',
                    padding: '11px 18px 4px 18px',
                    alignItems:'center',
                    justifyContent:'space-between',
                    borderBottom: '1px solid #E7E7E7',
                    }}>
                     <span className="font-LRegular" style={{fontSize:'12px'}}>Mon 16, Feb 2024</span>
                    <span className="font-LSemiBold" style={{fontSize:'12px',fontWeight:'bold'}}>Unavailable</span>
                    <span className="font-LSemiBold" style={{fontSize:'12px',fontWeight:'bold'}}>1 WEEK</span>
                    <span className="font-LRegular text-Primary" style={{fontSize:'12px',textAlign:'center'}}>All Day</span>
                    <span className="font-LRegular" style={{fontSize:'12px'}}>action</span>
                  </div> 
                   
                </div>
                </div>
               
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    
                    
                    
                    
                    marginTop: "35px",  

                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                    }}
                  >
                    <div>
                      <label style={{ display: "flex", alignItems: "center" }}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                          style={{
                            display: "none",
                          }}
                        />
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            border: "2px solid lightgray",
                            backgroundColor: isChecked
                              ? "#039198"
                              : "transparent",
                            borderRadius: "4px",
                            transition: "background-color 0.3s ease",
                            marginRight: "10px",
                            cursor: "pointer",
                          }}
                        />
                      </label>
                    </div>
                    <span  style={{ fontSize: "12px", marginLeft: "0" }}>
                      Review and agree to out
                    </span>
                  </span>
                  <a
                    href="#"
                    style={{
                      color: "#039198",
                      fontSize: "12px",
                      marginLeft: "7px",
                    }}
                  >
                    Terms and Conditions
                  </a>
                </div> */}

                <div  style={{display:'flex',marginTop:'35px'}}>
                  <button className="btn btn-primary" style={{width:'180px',borderRadius:'10px',fontSize:'12px'}} >ADD  AN OVERRIDES</button>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
