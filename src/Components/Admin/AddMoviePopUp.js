import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddMoviePopUp = (props) => {
  let navigate = useNavigate();

  const [movie, setMovie] = useState(
    {
      id: "",
      movieTitle: "",
      duration: "",
      rating: 0.0,
      category: "",
      language: "",
      movieImage: "",
      castList: [],
      releaseDate: "",
      noOfWeeks: 0,
    },
    []
  );

  function createMovie() {
    let reqBody = {
      id: movie.id,
      movieTitle: movie.movieTitle,
      duration: movie.duration,
      rating: movie.rating,
      category: movie.category,
      language: movie.language,
      movieImage: movie.movieImage,
      castList: movie.castList,
      releaseDate: movie.releaseDate,
      noOfWeeks: movie.noOfWeeks,
    };

    axios.post("http://localhost:8700/movie/", reqBody).then((response) => {
      console.log(response.data);
      alert("New movie added successfully!");
    });
  }

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
            Add Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Movie ID :</label>
            <span> </span>
            <input
              type="text"
              value={movie.id}
              onChange={(e) => {
                setMovie({ ...movie, id: e.target.value });
              }}
            />
            <span> </span>
            <label>Title :</label>
            <span> </span>
            <input
              type="text"
              value={movie.movieTitle}
              onChange={(e) => {
                setMovie({ ...movie, movieTitle: e.target.value });
              }}
            />
            <br />
            <label>Duration :</label>
            <span> </span>
            <input
              type="text"
              value={movie.duration}
              onChange={(e) => {
                setMovie({ ...movie, duration: e.target.value });
              }}
            />
            <span> </span>
            <label>Rating :</label>
            <span> </span>
            <input
              type="number"
              value={movie.rating}
              onChange={(e) => {
                setMovie({ ...movie, rating: e.target.value });
              }}
            />
            <br />
            <label>Category :</label>
            <span> </span>
            <input
              type="text"
              value={movie.category}
              onChange={(e) => {
                setMovie({ ...movie, category: e.target.value });
              }}
            />
            <span> </span>
            <label>Language :</label>
            <span> </span>
            <input
              type="text"
              value={movie.language}
              onChange={(e) => {
                setMovie({ ...movie, language: e.target.value });
              }}
            />
            <br />
            <label>Image Url :</label>
            <span> </span>
            <input
              type="text"
              value={movie.movieImage}
              onChange={(e) => {
                setMovie({ ...movie, movieImage: e.target.value });
              }}
            />
            <br />
            <label>Cast List :</label>
            <span> </span>
            <input
              type="text"
              value={movie.castList}
              onChange={(e) => {
                setMovie({ ...movie, castList: e.target.value.split(",") });
              }}
            />
            <br />
            <label>Release Date :</label>
            <span> </span>
            <input
              type="date"
              value={movie.releaseDate}
              onChange={(e) => {
                setMovie({ ...movie, releaseDate: e.target.value });
              }}
            />
            <span> </span>
            <label>No Of Weeks:</label>
            <span> </span>
            <input
              type="number"
              value={movie.noOfWeeks}
              onChange={(e) => {
                setMovie({ ...movie, noOfWeeks: e.target.value });
              }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              createMovie();
            }}
          >
            Add Movie
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMoviePopUp;
