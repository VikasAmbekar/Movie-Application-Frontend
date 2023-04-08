import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const MyVerticallyCenteredModal = (props) => {
  let navigate = useNavigate();
  const [theater, setTheater] = useState([]);

  let city = localStorage.getItem("city");

  // async function getTheaterByCity() {
  //   // let movieList = theater.map((list) => {
  //   //   console.log(
  //   //     list.movieList.map((list1) => {
  //   //       // console.log(list1);
  //   //     })
  //   //   );
  //   // });
  //   // // console.log(movieList);

  //   const movieId = props.movieId;
  //   console.log(movieId);
  //   await axios
  //     .get(`http://localhost:8700/theater/${city}/${movieId}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     });

  //   // await axios.get("http://localhost:8700/theater/").then((res) => {
  //   //   setTheater(res.data);
  //   // });
  // }

  // useEffect(() => {
  //   getTheaterByCity();
  // }, []);

  useEffect(() => {
    const movieId = props.movieId;

    axios
      .get(`http://localhost:8700/theater/${city}/${movieId}`)
      .then((res) => {
        setTheater(res.data);
      });
  }, []);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Theaters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <li>
            <ul>Theater1</ul>
            <Button onClick={() => navigate("/book-ticket")}>
              Book Tickets
            </Button>
            <ul>Theater2</ul>
          </li>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyVerticallyCenteredModal;
