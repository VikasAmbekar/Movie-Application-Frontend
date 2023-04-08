import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import classes from "./BookTicket.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";
import axios from "axios";

const BookTicket = () => {
  let navigate = useNavigate();
  const [theaterById, setTheaterById] = useState([]);
  const [movieById, setMovieById] = useState([]);
  const [time, setTime] = useState("");

  const location = useLocation();

  const theaterId = useState(location.state.id);

  const movieId = useState(location.state.mid);

  // const handleCheckBox = (e) => {
  //   setIsChecked(e.target.checked);
  // };

  async function theaterData() {
    await axios
      .get(`http://localhost:8700/theater/${theaterId[0]}`)
      .then((res) => {
        setTheaterById(res.data);
      });

    await axios.get(`http://localhost:8700/movie/${movieId[0]}`).then((res) => {
      setMovieById(res.data);
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
        <div className={classes.timeSelect}>
          <select
            className={classes.select}
            onChange={(e) => setTime(e.target.value)}
          >
            <option>Show Timings</option>
            <option value="10:00AM">10:00AM</option>
            <option value="12:00PM">12:00PM</option>
            <option value="3:00PM">3:00PM</option>
            <option value="9:00PM">9:00PM</option>
          </select>
          <Button
            variant="primary"
            className={classes.selectSeats}
            onClick={() =>
              navigate("/select-seat", {
                state: {
                  theaterId1: theaterId[0],
                  mId1: movieId[0],
                  time1: time,
                },
              })
            }
          >
            Select Seats
          </Button>
        </div>
        <div>
          <Button
            className={classes.bookTicketBtn}
            onClick={() => navigate("/dashboard")}
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
