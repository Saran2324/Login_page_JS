// Login.js
import React, { useState } from "react";
import "../css/loginpage.css";

function Login() {
  const [select, setSelect] = useState(false);
  const [sel, set] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailClick = () => {
    setSelect(true);
  };

  const handleEmailBlur = () => {
    setSelect(false);
  };

  const handlepassClick = () => {
    set(true);
  };

  const handlepassBlur = () => {
    set(false);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-box">
      <div className="container">
        <div className="input-group">
          <label className={select ? "notifiup" : ""} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="text"
            onClick={handleEmailClick}
            onBlur={handleEmailBlur}
            style={{
              border: "2px solid transparent",
              background: "transparent",
              color: "whitesmoke",
              borderBottom: "2px solid black",
              paddingTop: "5px",
              fontSize:"15px",outline:"0"
            }}
            required
          />
        </div>
        <div className="input-group">
          <label className={sel ? "notifi-up" : ""} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            onClick={handlepassClick}
            onBlur={handlepassBlur}
            style={{
              border: "2px solid transparent",
              borderBottom: "2px solid black",
              background: "transparent",
              color: "whitesmoke",
              paddingTop: "5px",
              fontSize:"15px",outline:"0"
            }}
            required
          />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="showPasswordCheckbox"
              onChange={handleShowPasswordToggle}
            />
            <label
              className="form-check-label"
              htmlFor="showPasswordCheckbox"
              style={{ fontSize: "smaller" }}
            >
              {showPassword ? "Hide password" : "show password"}
            </label>
          </div>
        </div>
        <button
          style={{
            maxWidth: "80px",
            marginLeft: "100px",
            borderRadius: "4px",
            minHeight: "4vh",
          }}
         
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;