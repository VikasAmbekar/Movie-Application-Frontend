import React from "react";
import classes from "./UserLogin.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [backData, setBackData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (mobile === "" || password === "") {
      setErrorMessage("Please enter mobile number and password");
      return;
    }

    const found = backData.find((element) => element.mobileNo == mobile);
    if (found == null) {
      alert("Login failed", window.location.reload());
    } else {
      if (found.mobileNo == mobile && found.password == password) {
        console.log("Login Success");
        alert("Login successful!");
        navigate("/dashboard");
        localStorage.setItem("Userdata", JSON.stringify(found));
      } else if (found.password == password) {
        alert("Password is not proper", window.location.reload());
      } else {
        alert("Login couldn't found", window.location.reload());
      }
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8700/user/")
      .then((response) => setBackData(response.data));
    console.log(backData);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.loginForm}>
        <div>
          {" "}
          <br />
          <h2> Login Form </h2> <br />
          <label htmlFor="mobile" className={classes.loginLabel}>
            Mobile Number
          </label>
          <br />
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
            required
            className={classes.loginInput}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className={classes.loginInput}
            autoComplete="off"
          />
        </div>
        <br />
        <button type="submit" className={classes.loginButtom}>
          Login
        </button>
        <br />
        {errorMessage && <div className="error">{errorMessage}</div>}
        <br />
        <p className={classes.loginSignUpP}>
          Don't have account click here&nbsp;
          <a
            className={classes.loginSignUp}
            onClick={() => {
              navigate("/user-signup");
            }}
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default UserLogin;
