import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./AdminHome.module.css";
import { useNavigate } from "react-router-dom";
import AddMoviePopUp from "./AddMoviePopUp";
import AddTheaterPopUp from "./AddTheaterPopUp";

import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

const AdminHome = () => {
  let navigate = useNavigate();
  const [model, setModel] = useState(false);
  const [model2, setModel2] = useState(false);

  return (
    <>
      <AdminHeader />
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
      <div className={classes.adminFooter}>
        <AdminFooter />
      </div>
    </>
  );
};

export default AdminHome;
