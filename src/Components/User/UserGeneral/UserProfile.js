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

  //   const nameUpdate = (e) => {
  //     setUpdateName(e.target.value);
  //     console.log(setUpdateName);
  //   };

  useEffect(() => {}, []);

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
                    </MDBCol>
                  </MDBRow>
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
                        onClick={handleClose}
                        className={classes.updateBtn}
                      >
                        Save Changes
                      </button>
                    </Modal.Footer>
                  </Modal>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {backData.email}{" "}
                        <span style={{ marginLeft: "7.8rem" }}>
                          <button className={classes.updateBtn}> Update</button>{" "}
                        </span>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
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
                      <MDBCardText className="text-muted">
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
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <p>{backData.password}</p>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
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
