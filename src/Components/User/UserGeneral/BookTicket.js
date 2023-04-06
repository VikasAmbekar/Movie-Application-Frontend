import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./BookTicket.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
import axios from "axios";

const BookTicket = () => {
  let navigate = useNavigate();
  const [theaterById, setTheaterById] = useState([]);
  const [movieById, setMovieById] = useState([]);

  const location = useLocation();

  const theaterId = useState(location.state.id);
  console.log(theaterId);

  const movieId = useState(location.state.mid);
  console.log(movieId);

  async function theaterData() {
    await axios
      .get(`http://localhost:8700/theater/${theaterId[0]}`)
      .then((res) => {
        setTheaterById(res.data);
        console.log(res.data);
      });

    await axios.get(`http://localhost:8700/movie/${movieId[0]}`).then((res) => {
      setMovieById(res.data);
      console.log(res.data);
    });
  }

  useEffect(() => {
    theaterData();
  }, []);

  return (
    <>
      <UserHeader />
      <div
        className={classes.backImag}
        style={{ backgroundImage: `${movieById.movieImage} ` }}
      >
        <div className={classes.bookTicketBody}>
          <h1>{theaterById.name}</h1>
          <p>{theaterById.address}</p>
          <br />
          <h2>{movieById.movieTitle} </h2>
          <img src={movieById.movieImage} width="350px" height="250px" />
          <p></p>
        </div>
        <div>
          <Button className={classes.bookTicketBtn} variant="success">
            Confirm Tickets
          </Button>
          <Button
            className={classes.bookTicketBtn}
            onClick={() => navigate("/book-ticket")}
            variant="danger"
          >
            Cancel
          </Button>
          <UserFooter />
        </div>
      </div>
    </>
  );
};

export default BookTicket;
