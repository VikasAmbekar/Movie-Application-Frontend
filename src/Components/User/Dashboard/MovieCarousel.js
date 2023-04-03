import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import classes from "./MovieCarousel.module.css";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

const MovieCarousel = (props) => {
  const [model, setModel] = useState(false);
  return (
    <div className={classes.dashCarousel}>
      <Carousel fade>
        {props.data.slice(0, 3).map((movie) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={movie.movieImage}
                alt="Second slide"
                height="450rem"
              />
              <Carousel.Caption>
                <h3>{movie.movieTitle}</h3>
                <Button onClick={() => setModel(true)}>Book Now</Button>
                <MyVerticallyCenteredModal
                  show={model}
                  onHide={() => setModel(false)}
                />
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
