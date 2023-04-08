import React, { useEffect, useState } from "react";
import classes from "./Seats.module.css";
import axios from "axios";
import { Button, ToggleButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Seats = (props) => {
  // const container = document.querySelector(".container");

  let navigate = useNavigate();

  const seatDetails = props.data;

  const theaterSeatId = seatDetails["seatId"];

  const seatArray = seatDetails["seats"];

  const selectedSeats = seatArray;

  const bookSeat = () => {
    let reqBody = {
      seats: seatArray,
    };

    axios
      .patch(`http://localhost:8700/seats/${theaterSeatId}`, reqBody)
      .then((res) => {
        alert("Proceeding to Payment...");
        navigate("/payment-page");
      });
  };

  const selectSeat = (r, c) => {
    selectedSeats[r][c] = 1;
  };

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
          onClick={() => bookSeat()}
        >
          Confirm Seats
        </Button>
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
