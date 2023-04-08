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

  const [isChecked, setIsChecked] = useState();

  const [seats, setSeats] = useState(
    {
      movieId: "",
      theaterId: "",
      time: "",
      tickets: [],
    },
    []
  );

  // const handleCheckBox = (e) => {
  //   setIsChecked(e.target.checked);
  // };

  const confirmTicket = () => {
    let reqBody = {
      movieId: `${movieId[0]}`,
      theaterId: `${theaterId[0]}`,
      time: seats.time,
      tickets: seats.tickets,
    };

    axios.post("http://localhost:8700/seats/", reqBody).then((res) => {
      setSeats(res.data);
      setIsChecked(false);
      alert("Seats Booked");
    });
  };

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
        <div className={classes.row1}>
          <label>Time</label>
          <input
            type="text"
            disabled
            placeholder="3:00PM"
            onChange={(e) => {
              setSeats({
                ...seats,
                time: e.target.value,
              });
            }}
          />
          
          <input
            type="checkbox"
            checked={isChecked}
            value="A1"
            onChange={(e) => {
              setSeats({
                ...seats,
                tickets: e.target.value.split(","),
              });
            }}
          />

          <input
            type="checkbox"
            checked={isChecked}
            value="A2"
            onChange={(e) => {
              setSeats({
                ...seats,
                tickets: e.target.value.split(","),
              });
            }}
          />

          <input
            type="checkbox"
            checked={isChecked}
            value="A3"
            onChange={(e) => {
              setSeats({
                ...seats,
                tickets: e.target.value.split(","),
              });
            }}
          />

          <input
            type="checkbox"
            checked={isChecked}
            value="A4"
            onChange={(e) => {
              setSeats({
                ...seats,
                tickets: e.target.value.split(","),
              });
            }}
          />

          <input
            type="checkbox"
            checked={isChecked}
            value="A5"
            onChange={(e) => {
              setSeats({
                ...seats,
                tickets: e.target.value.split(","),
              });
            }}
          />

          <div>
            <Button variant="success" onClick={() => confirmTicket}>
              Confirm Selection
            </Button>
          </div>
        </div>
        <div>
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
