import Login from "./Pages/Login/Login";
import { Route, Routes as Router } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import ConfirmPassword from "./Pages/ComfirmPassword/ComfirmPassword";

function Routes() {
  return (
    <Router>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/confirmpassword" element={<ConfirmPassword />} />
      
    </Router>
  );
}

export default Routes;