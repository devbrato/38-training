import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLock } from "react-icons/fa"; // Import lock icon
import logo from "../logo/logo.png";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [passcode, setPasscode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!passcode) {
      toast.error("Please enter the passcode.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (passcode === "999999") {
        onLogin(true);
        toast.success("Login successful!");
      } else {
        toast.error("Invalid passcode!");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img src={logo} alt="38 Barracks Logo" className="login-logo" />
          <h1 className="brand-title">
            <span className="brand-number">38</span>
            <span className="brand-name">BARRACKS</span>
          </h1>
        </div>

        <h2 className="login-title">Enter Passcode</h2>
        
        <div className="input-container">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Enter 6-digit passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="login-input"
            maxLength={6}
          />
        </div>

        <button onClick={handleLogin} disabled={isLoading} className="login-button">
          {isLoading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              Logging in...
            </div>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
