import React from "react";
import { Button } from "react-bootstrap";
import classes from "./UserHeader.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

const UserHeader = () => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar className={classes.navBar} expand="lg">
        <Container>
          <Navbar.Brand href="/dashboard">
            <span className={classes.brand}>MovieMate</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{ marginLeft: "70%", color: "white" }}
            >
              <NavDropdown
                className={classes.navDrop}
                title="City"
                id="basic-nav-dropdown"
                style={{ padding: "0.3rem", margin: "5px", color: "white" }}
              >
                <NavDropdown.Item href="#">Mumbai</NavDropdown.Item>

                <NavDropdown.Item href="#">Delhi</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  Bangalore
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">Kolkata</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">Pune</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Hi, Username"
                id="basic-nav-dropdown"
                style={{ padding: "0.3rem", margin: "5px" }}
              >
                <NavDropdown.Item href="#action/3.1">
                  My Bookings
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Update Profile
                </NavDropdown.Item>
              </NavDropdown>
              <Button
                variant="outline-danger"
                className="w-100 h-25"
                onClick={() => navigate("/")}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default UserHeader;
