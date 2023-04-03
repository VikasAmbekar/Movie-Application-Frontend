import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./MovieCard.module.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

const MovieCard = (props) => {
  const [model, setModel] = useState(false);
  console.log(props.movieData["movieImage"]);
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
            <Button variant="primary" onClick={() => setModel(true)}>
              Book Now
            </Button>

            <MyVerticallyCenteredModal
              show={model}
              onHide={() => setModel(false)}
            />
          </MDBCardOverlay>
        </MDBCard>
      </div>
    </>
  );
};

export default MovieCard;
