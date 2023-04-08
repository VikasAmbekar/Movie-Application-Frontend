import React, { useState } from "react";
import classes from "./SeatBooker.module.css";
import { Button } from "react-bootstrap";

const SeatBooker = () => {
  const [isChecked, setIsChecked] = useState();

  const [seats, setSeats] = useState(
    {
      id: 0,
      movieId: "",
      theaterId: "",
      time: "",
      tickets: [],
    },
    []
  );

  const handleCheckBox = (e) => {
    setIsChecked(e.target.checked);
  };

  const confirmTicket = () => {
    let reqBody = {
      movieId: {},
      theaterId: {},
      time: seats.time,
      tickets: seats.tickets,
    };
  };

  return (
    <>
      <h1>Seat Booker</h1>
      <div className={classes.row1}>
        <input type="checkbox" checked={isChecked} value="A1" />
        <input type="checkbox" checked={isChecked} value="A2" />
        <input type="checkbox" checked={isChecked} value="A3" />
        <input type="checkbox" checked={isChecked} value="A4" />
        <input type="checkbox" checked={isChecked} value="A5" />

        <div>
          <Button variant="success" onClick={confirmTicket}>
            Confirm Selection
          </Button>
        </div>
      </div>
    </>
  );
};

export default SeatBooker;
