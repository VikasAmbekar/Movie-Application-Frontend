import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Admin.module.css";
import AdminHeader from "./AdminHeader";
import axios from "axios";

const Admin = () => {
  let navigate = useNavigate();
  const [adminData, setAdminData] = useState([]);
  const [mobileNo, setMobileNo] = useState("");
  const [password1, setPassword1] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8710/admin/").then((res) => {
      setAdminData(res.data);
      console.log(res.data);
    });
  }, []);

  const adminLog = (event) => {
    event.preventDefault();
    const found = adminData.find((data) => data.adminMobileNo == mobileNo);
    if (found.adminMobileNo == mobileNo && found.adminPassword == password1) {
      alert("Login Successful.");
      navigate("/admin-home");
      localStorage.setItem("AdminId", found.adminMobileNo);
    } else if (found.adminPassword != password1) {
      alert("Invalid Password");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <header>
        <AdminHeader />
      </header>
      <div className={classes.loginForm}>
        <form className={classes.adminForm}>
          <br />
          <h3>Admin Login</h3>
          <label>
            Mobile Number
            <br />
            <input
              type="tel"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              autoComplete="off"
            />
          </label>
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            autoComplete="off"
          />
          <br />
          <button onClick={adminLog} className={classes.loginbutton}>
            Login
          </button>
          <br />
        </form>
      </div>
      <footer className={classes.bottom}>
        <p>Copyright</p>
      </footer>
    </>
  );
};

export default Admin;
