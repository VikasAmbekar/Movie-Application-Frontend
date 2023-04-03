import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import classes from "./UserHeader.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

const UserHeader = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className={classes.mainNav} id="grad">
        <a href="/dashboard" className={classes.mainLink}>
          MovieMate
        </a>

        <NavDropdown
          title="City"
          id="basic-nav-dropdown"
          className={classes.cityDrop}
        >
          <NavDropdown.Item href="#">Mumbai</NavDropdown.Item>

          <NavDropdown.Item href="#">Delhi</NavDropdown.Item>

          <NavDropdown.Item href="#action/3.3">Bangalore</NavDropdown.Item>

          <NavDropdown.Item href="#action/3.4">Kolkata</NavDropdown.Item>

          <NavDropdown.Item href="#action/3.4">Pune</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="Hi, Username"
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
