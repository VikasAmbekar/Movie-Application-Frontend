import React, { useEffect, useState } from "react";
import classes from "./Seats.module.css";
import axios from "axios";
import { Button, ToggleButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const Seats = (props) => {
  // const container = document.querySelector(".container");

  // Model for payment

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useState for movie data & theater data
  const [movieName, setMovieName] = useState([]);
  const [theaterName, setTheaterName] = useState([]);

  // movie name, theater name, time, date, seats, no of seats & cost
  let movieData = props.movieID;
  let theaterData = props.theaterID;
  let timeData = props.Time;

  //
  const [seatList, setSeatList] = useState([]);
  const selectSeat = (r, c) => {
    selectedSeats[r][c] = 1;
    // seatNumber = [`${r}-${c}`];
    // console.log(seatNumber);
    setSeatList([...seatList, `${r}-${c}`]);
    // console.log(seatList);
  };

  // axios data by id
  async function getData() {
    await axios.get(`http://localhost:8700/movie/${movieData}`).then((res) => {
      setMovieName(res.data);
    });

    await axios
      .get(`http://localhost:8700/theater/${theaterData}`)
      .then((res) => {
        setTheaterName(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  let navigate = useNavigate();

  const seatDetails = props.data;

  const theaterSeatId = seatDetails["seatId"];

  const seatArray = seatDetails["seats"];

  const selectedSeats = seatArray;

  //
  let customerName1 = localStorage.getItem("UserName");
  let customerName = JSON.parse(customerName1);
  // console.log(customerName);
  let customerMobile1 = localStorage.getItem("UserId");
  let customerMobile = JSON.parse(customerMobile1);
  // console.log(customerMobile);

  // const currentDate = new Date()
  //   .toLocaleDateString(undefined, {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //   })
  //   .replace(/\//g, "-");
  // const [year, month, day] = currentDate.split("-");
  // const currentDateFormatted = `${year}-${month}-${day}`;

  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  // console.log(date);
  // let currentDate1 = JSON.stringify(currentDate);
  // console.log(currentDate1);

  let movieticket = theaterName.costOfTicket * seatList.length;

  // console.log(movieticket);

  let seatListData = seatList;
  // console.log(seatListData);
  let seatListDataLenght = seatList.length;

  let movieNameData = movieName.movieTitle;
  // console.log(movieNameData);

  let theaterNameData = theaterName.name;
  // console.log(theaterNameData);

  const bookSeat = () => {
    let reqBody = {
      seats: seatArray,
    };

    axios
      .patch(`http://localhost:8700/seats/${theaterSeatId}`, reqBody)
      .then((res) => {
        // alert("Proceeding to Payment...");
        // navigate("/payment-page");
      });

    let reqBody2 = {
      customerName: customerName,
      customerMobNo: customerMobile,
      theaterName: theaterNameData,
      movieName: movieNameData,
      seatsBooked: seatListData,
      numberSeats: seatListDataLenght,
      showTimings: timeData,
      bookingDate: date,
      totalCost: movieticket,
    };
    // console.log(reqBody2);

    axios
      .post("http://localhost:8700/booking-details/", reqBody2)
      .then((res) => {
        // console.log(res);
      });

    alert("Booking successful...");
    navigate("/my-booking");
  };

  //

  return (
    <div className={classes.body}>
      <ul className={classes.showcase}>
        <li>
          <div className={classes.seat}></div>
          <small>N/A</small>
        </li>

        <li>
          <div className={classes.seatselected}></div>
          <small>Selected</small>
        </li>
        <li>
          <div className={classes.seatoccupied}></div>
          <small>Occupied</small>
        </li>
      </ul>
      <div className={classes.container}>
        <div className={classes.screen}>ALL EYES THIS SIDE</div>

        <div className={classes.seatMain}>
          {seatArray.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((value, colIndex) => (
                <div
                  onClick={() => selectSeat(rowIndex, colIndex)}
                  className={classes.seat}
                  key={`${rowIndex}-${colIndex}`}
                  style={{ backgroundColor: value === 0 ? "blue" : "red" }}
                >
                  <p style={{ color: "white" }}>{`${rowIndex}-${colIndex}`}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.ticketBookBtn}>
        <Button
          variant="success"
          className={classes.confirmTicket}
          onClick={handleShow}
        >
          Confirm Seats
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Payment details </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Movie name: {movieName.movieTitle}</p> <hr />
            <p>Theater name: {theaterName.name}</p> <hr />
            <p> Theater address: {theaterName.address}</p> <hr />
            <p>Show time: {timeData}</p>
            <hr />
            <p>
              Selected seats: {seatList.join(", ")} Seat count:{" "}
              {seatList.length}
            </p>
            <hr />
            <p>
              Seat total cost: ₹ {theaterName.costOfTicket * seatList.length}
            </p>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={() => bookSeat()}>
              Confirm payment
            </Button>
          </Modal.Footer>
        </Modal>
        <Button
          variant="danger"
          className={classes.cancel}
          onClick={() => navigate("/dashboard")}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Seats;
