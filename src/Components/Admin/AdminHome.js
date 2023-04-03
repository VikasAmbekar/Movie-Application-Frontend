import React, { useState } from "react";
import AdminNav from "./AdminNav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./AdminHome.module.css";
import { useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import AddMoviePopUp from "./AddMoviePopUp";
import AddTheaterPopUp from "./AddTheaterPopUp";
import UserFooter from "../User/UserGeneral/UserFooter";

const AdminHome = () => {
  let navigate = useNavigate();
  const [model, setModel] = useState(false);
  const [model2, setModel2] = useState(false);

  return (
    <>
      <AdminNav />
      <br />
      <div className={classes.mainCard}>
        <Card className={classes.adminCards}>
          <Card.Header as="h5" style={{ textAlign: "center" }}>
            Movie
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ textAlign: "center" }}>
              Below mentioned operations can be performed
            </Card.Text>

            <Button
              className={classes.btnAdmin}
              onClick={() => navigate("/admin-movie-ops")}
              variant="primary"
            >
              View
            </Button>
            <div>
              <Button variant="success" onClick={() => setModel(true)}>
                Add Movie
              </Button>
              <AddMoviePopUp show={model} onHide={() => setModel(false)} />
            </div>
          </Card.Body>
        </Card>

        {/* Theater Card */}

        <Card className={classes.adminCards}>
          <Card.Header as="h5" style={{ textAlign: "center" }}>
            Theater
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ textAlign: "center" }}>
              Below mentioned operations can be performed
            </Card.Text>

            <Button
              className={classes.btnAdmin}
              onClick={() => navigate("/admin-theater-ops")}
              variant="primary"
            >
              View
            </Button>
            <div>
              <Button variant="success" onClick={() => setModel2(true)}>
                Add Theater
              </Button>
              <AddTheaterPopUp show={model2} onHide={() => setModel2(false)} />
            </div>
          </Card.Body>
        </Card>
      </div>
      <UserFooter />
    </>
  );
};

export default AdminHome;