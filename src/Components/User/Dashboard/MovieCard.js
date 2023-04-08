import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import classes from "./MovieCard.module.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  let navigate = useNavigate();
  const [theater, setTheater] = useState([]);
  const [showTheaterModal, setShowTheaterModal] = useState(false);
  const closeShowTheaterModal = () => setShowTheaterModal(false);
  const openShowTheaterModal = () => {
    setShowTheaterModal(true);
    const movieId = props.movieData["id"];
    const city = localStorage.getItem("city");

    axios
      .get(`http://localhost:8700/theater/${city}/${movieId}`)
      .then((res) => {
        setTheater(res.data);
      });
  };

  let movieID = props.movieData["id"];

  return (
    <>
      <div className={classes.movieCard}>
        <MDBCard background="dark" className="text-white">
          <MDBCardImage
            src={props.movieData["movieImage"]}
            style={{ height: "250px" }}
          />
          <MDBCardOverlay className={classes.cardBelow}>
            <MDBCardTitle>{props.movieData["movieTitle"]}</MDBCardTitle>
            {/* <div className={classes.rating}>
                                <p>{props.movieData['rating']}/10</p>
                            </div> */}
            <Button variant="primary" onClick={openShowTheaterModal}>
              Book Now
            </Button>
            <div>
              <Modal show={showTheaterModal} size="lg" fullscreen={"below lg"}>
                <Modal.Header closeButton onClick={closeShowTheaterModal}>
                  <Modal.Title>Available Theaters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {theater.map((ele) => {
                    return (
                      <>
                        <ul className={classes.theaterList}>
                          <li>
                            <span>{ele.name}</span> : {ele.address}
                            <Button
                              className={classes.theaterListButton}
                              onClick={() =>
                                navigate("/book-ticket", {
                                  state: { id: ele.id, mid: movieID },
                                })
                              }
                            >
                              Book Ticket
                            </Button>
                          </li>
                        </ul>
                        <br />
                      </>
                    );
                  })}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={closeShowTheaterModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </MDBCardOverlay>
        </MDBCard>
      </div>
    </>
  );
};

export default MovieCard;
