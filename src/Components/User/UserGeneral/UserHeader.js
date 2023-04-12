import React from "react";
import classes from "./UserHeader.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { logOut } from "../CheckUserLogin";

const UserHeader = () => {
  let navigate = useNavigate();

  let userStorage1 = localStorage.getItem("UserName");
  let userStorage = JSON.parse(userStorage1);
  // console.log(userStorage);

  function setCity(city) {
    localStorage.setItem("city", city);
    console.log(localStorage.getItem("city"));
  }
  return (
    <>
      <div className={classes.mainNav} id="grad">
        <a href="/dashboard" className={classes.mainLink}>
          MovieMate
        </a>

        <select
          name="City"
          onChange={(e) => setCity(e.target.value)}
          className={classes.cityDrop}
        >
          <option value="--">Select City</option>
          <option value="Mumbai">Mumbai</option>

          <option value="Delhi">Delhi</option>

          <option value="Bangalore">Bangalore</option>

          <option value="Kolkata">Kolkata</option>

          <option value="Pune">Pune</option>
        </select>

        <NavDropdown
          title={`Hi, ${userStorage}`}
          id="basic-nav-dropdown"
          className={classes.userDrop}
        >
          <NavDropdown.Item onClick={() => navigate("/my-booking")}>
            My Bookings
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate("/my-profile")}>
            My Profile
          </NavDropdown.Item>
        </NavDropdown>

        <button
          className={classes.logOutBtn}
          onClick={() => {
            navigate("/");
            logOut();
          }}
        >
          Log-Out
        </button>
      </div>
    </>
  );
};

export default UserHeader;
