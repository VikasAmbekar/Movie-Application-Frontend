import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTheaterPopUp = (props) => {
  let navigate = useNavigate();
  const [theater, setTheater] = useState(
    {
      id: "",
      name: "",
      city: "",
      state: "",
      pinCode: 0,
      address: "",
      noOfSeats: 0,
      noOfScreens: 0,
      costOfTicket: 0.0,
      movieList: [],
    },
    []
  );

  const createTheater = (event) => {
    event.preventDefault();

    let reqBody = {
      id: theater.id,
      name: theater.name,
      city: theater.city,
      state: theater.state,
      pinCode: theater.pinCode,
      address: theater.address,
      noOfSeats: theater.noOfSeats,
      noOfScreens: theater.noOfScreens,
      costOfTicket: theater.costOfTicket,
      movieList: theater.movieList,
    };

    axios.post("http://localhost:8700/theater/", reqBody).then(() => {
      alert("New theater added successfully!");
    });
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Theater
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Theater ID :</label>
            <span> </span>
            <input
              type="text"
              value={theater.id}
              onChange={(e) => {
                setTheater({ ...theater, id: e.target.value });
              }}
            />
            <span> </span>
            <label>Theater Name :</label>
            <span> </span>
            <input
              type="text"
              value={theater.name}
              onChange={(e) => {
                setTheater({ ...theater, name: e.target.value });
              }}
            />
            <br />
            <label>City :</label>
            <span> </span>
            <input
              type="text"
              value={theater.city}
              onChange={(e) => {
                setTheater({ ...theater, city: e.target.value });
              }}
            />
            <span> </span>
            <label>State :</label>
            <span> </span>
            <input
              type="text"
              value={theater.state}
              onChange={(e) => {
                setTheater({ ...theater, state: e.target.value });
              }}
            />
            <br />
            <label>Pincode :</label>
            <span> </span>
            <input
              type="number"
              value={theater.pinCode}
              onChange={(e) => {
                setTheater({ ...theater, pinCode: e.target.value });
              }}
            />
            <span> </span>
            <label>Address :</label>
            <span> </span>
            <input
              type="text"
              value={theater.address}
              onChange={(e) => {
                setTheater({ ...theater, address: e.target.value });
              }}
            />
            <br />
            <label>No Of Seats :</label>
            <span> </span>
            <input
              type="number"
              value={theater.noOfSeats}
              onChange={(e) => {
                setTheater({ ...theater, noOfSeats: e.target.value });
              }}
            />
            <span> </span>
            <label>No Of Screens :</label>
            <span> </span>
            <input
              type="number"
              value={theater.noOfScreens}
              onChange={(e) => {
                setTheater({ ...theater, noOfScreens: e.target.value });
              }}
            />
            <br />
            <label>Cost Of Ticket :</label>
            <span> </span>
            <input
              type="number"
              value={theater.costOfTicket}
              onChange={(e) => {
                setTheater({ ...theater, costOfTicket: e.target.value });
              }}
            />
            <span> </span>
            <label>Movie ID List:</label>
            <span> </span>
            <input
              type="text"
              value={theater.movieList}
              onChange={(e) => {
                setTheater({
                  ...theater,
                  movieList: e.target.value.split(","),
                });
              }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={createTheater}>
            Add Theater
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddTheaterPopUp;
