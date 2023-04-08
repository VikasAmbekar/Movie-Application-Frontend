import React, { useEffect, useState } from "react";
import classes from "./Seats.module.css";
import axios from "axios";

const Seats = (props) => {
  // const container = document.querySelector(".container");

  const seatDetails = props.data;
  const seatArray = seatDetails["seats"];

  const selectSeat = () => {};

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
                  onClick={selectSeat()}
                  className={classes.seat}
                  key={`${rowIndex}-${colIndex}`}
                  style={{ backgroundColor: value === 0 ? "blue" : "red" }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seats;
