import React, { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import classes from "./UserProfile.module.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

const UserProfile = () => {
  let userStorage = localStorage.getItem("UserId");
  let userStore = JSON.parse(userStorage);
  const [backData, setBackData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updateName, setUpdateName] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  //   const nameUpdate = (e) => {
  //     setUpdateName(e.target.value);
  //     console.log(setUpdateName);
  //   };

  useEffect(() => {}, []);

  const changeName = () => {
    let requestBody = {
      name: updateName,
    };

    if (updateName == "") {
      alert("Name field is empty");
    } else {
      axios
        .patch(`http://localhost:8700/user/${userStore}/name`, requestBody)
        .then((res) => {
          console.log(res);
        });
      setShow(false);
      alert("Name updated successfully!", window.location.reload());
    }
  };

  const changePassword = () => {
    let requestBody = {
      password: updatePassword,
    };

    if (updatePassword == "") {
      alert("Password field can not be empty");
    } else if (updatePassword != confirmPassword) {
      alert("Password Mismatch!");
    } else {
      axios
        .patch(`http://localhost:8700/user/${userStore}/password`, requestBody)
        .then((res) => {
          console.log(res);
        });
      setShow1(false);
      alert("Password updated successfully!", window.location.reload());
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8700/user/${userStore}`)
      .then((response) => setBackData(response.data));
    console.log(backData);
  }, []);

  return (
    <>
      <UserHeader />
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />{" "}
                  <br />
                  <br />
                  <p className="text-muted mb-1">
                    <h5>Welcome, {backData.name}</h5>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <p>
                          {backData.name}{" "}
                          <span className={classes.updateBtnU}>
                            <button
                              className={classes.updateBtn}
                              onClick={handleShow}
                            >
                              {" "}
                              Update
                            </button>{" "}
                          </span>
                        </p>
                      </MDBCardText>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Update your name </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <input
                            type="text"
                            placeholder="Enter your name"
                            onChange={(e) => setUpdateName(e.target.value)}
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <button
                            variant="secondary"
                            onClick={handleClose}
                            className={classes.updateBtn}
                          >
                            Close
                          </button>
                          <button
                            variant="primary"
                            onClick={changeName}
                            className={classes.updateBtn}
                          >
                            Save Changes
                          </button>
                        </Modal.Footer>
                      </Modal>
                    </MDBCol>
                  </MDBRow>

                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText
                        className="text-muted"
                        style={{
                          marginRight: "16rem",
                          textDecoration: "none",
                        }}
                      >
                        {backData.email}{" "}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText
                        className="text-muted"
                        style={{
                          marginRight: "18rem",
                          textDecoration: "none",
                        }}
                      >
                        (+91) {backData.mobileNo}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText
                        className="text-muted"
                        style={{
                          marginRight: "12rem",
                          textDecoration: "none",
                        }}
                      >
                        <p>
                          {backData.address}, {backData.city}, {backData.state},{" "}
                          {backData.pinCode}
                        </p>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Password</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <p>
                          ********
                          <span
                            className={classes.updateBtnU}
                            id={classes.passwordSpan}
                          >
                            <button
                              className={classes.updateBtn}
                              onClick={handleShow1}
                            >
                              Update
                            </button>
                          </span>
                        </p>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                      <Modal.Title>Update your Password </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <label>New Password</label> <br />
                      <input
                        type="text"
                        placeholder="Enter your new password"
                        onChange={(e) => setUpdatePassword(e.target.value)}
                      />
                      <br />
                      <br />
                      <label>Confirm Password</label> <br />
                      <input
                        type="text"
                        placeholder="Re-enter your new password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <button
                        variant="secondary"
                        onClick={handleClose1}
                        className={classes.updateBtn}
                      >
                        Close
                      </button>
                      <button
                        variant="primary"
                        onClick={changePassword}
                        className={classes.updateBtn}
                      >
                        Save Changes
                      </button>
                    </Modal.Footer>
                  </Modal>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default UserProfile;
