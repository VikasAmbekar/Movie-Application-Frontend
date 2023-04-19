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
    // if (mobile === "" || password === "") {
    //   setErrorMessage("Please enter mobile number and password");
    //   return;
    // }

    const found = backData.find((element) => element.mobileNo == mobile);
    if (mobile.length > 10 || mobile.length < 10) {
      alert("Mobile number must be 10 digit long");
    } else if (found == null) {
      alert("You don't have acount, proceed to sign up");
      navigate("/user-signup");
    } else {
      if (found.mobileNo == mobile && found.password != password) {
        // console.log("Login Success");
        alert("Password is not correct!");
      } else if (found.mobileNo == mobile && found.password == password) {
        alert("Login successful!");
        navigate("/dashboard");
        localStorage.setItem("UserId", JSON.stringify(found.mobileNo));
        localStorage.setItem("UserName", JSON.stringify(found.name));
        localStorage.setItem("UserMail", JSON.stringify(found.email));
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8700/user/");
        setBackData(response.data);
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
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
