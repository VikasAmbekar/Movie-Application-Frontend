import React from "react";
import classes from "./UserHeader.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

const UserHeader = () => {
  let navigate = useNavigate();

  let userStorage1 = localStorage.getItem("Userdata");
  let userStorage = JSON.parse(userStorage1);
  console.log(userStorage);

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
          <option value="Mumbai">Mumbai</option>

          <option value="Delhi">Delhi</option>

          <option value="Bangalore">Bangalore</option>

          <option value="Kolkata">Kolkata</option>

          <option value="Pune">Pune</option>
        </select>

        <NavDropdown
          title={`Hi, ${userStorage.name}`}
          id="basic-nav-dropdown"
          className={classes.userDrop}
        >
          <NavDropdown.Item href="#action/3.1">My Bookings</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Update Profile</NavDropdown.Item>
        </NavDropdown>

        <button className={classes.logOutBtn} onClick={() => navigate("/")}>
          Log-Out
        </button>
      </div>
    </>
  );
};

export default UserHeader;
