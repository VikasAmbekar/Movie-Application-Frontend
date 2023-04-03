import React from "react";
import { Button } from "react-bootstrap";
import classes from "./BookTicket.module.css";
import { useNavigate } from "react-router-dom";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";

const BookTicket = () => {
  let navigate = useNavigate();
  return (
    <>
      <UserHeader />
      <div className={classes.bookTicketBody}>
        <h1>Theater name</h1>
        <h2>Theater Details</h2>
        <p> Movie name</p>
        <p>Seats Logic</p>
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
    </>
  );
};

export default BookTicket;
