import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const UpdateMoviePopUp = (props) => {
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

  const {
    movieTitle,
    duration,
    rating,
    category,
    language,
    movieImage,
    castList,
    releaseDate,
    noOfWeeks,
  } = movie;

  const { id } = useParams();

  //   useEffect(() => {
  //     showMovie();
  //   }, []);

  const updateMovie = () => {
    let requestBody = movie;

    axios.put(`http://localhost:8700/movie/${id}`, requestBody);
    alert("Movie Updated Successfully!");
    window.location.reload();
  };

  const showMovie = () => {
    axios.get(`http:localhost:8700/movie/${id}`).then((response) => {
      setMovie(response.data);
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
            Update Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Movie ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setMovie({ ...movie, id: e.target.value })}
            />
            <span> </span>
            <label>Title :</label>
            <span> </span>
            <input
              type="text"
              value={movieTitle}
              onChange={(e) => {
                setMovie({ ...movie, movieTitle: e.target.value });
              }}
            />
            <br />
            <label>Duration :</label>
            <span> </span>
            <input
              type="text"
              value={duration}
              onChange={(e) => {
                setMovie({ ...movie, duration: e.target.value });
              }}
            />
            <span> </span>
            <label>Rating :</label>
            <span> </span>
            <input
              type="number"
              value={rating}
              onChange={(e) => {
                setMovie({ ...movie, rating: e.target.value });
              }}
            />
            <br />
            <label>Category :</label>
            <span> </span>
            <input
              type="text"
              value={category}
              onChange={(e) => {
                setMovie({ ...movie, category: e.target.value });
              }}
            />
            <span> </span>
            <label>Language :</label>
            <span> </span>
            <input
              type="text"
              value={language}
              onChange={(e) => {
                setMovie({ ...movie, language: e.target.value });
              }}
            />
            <br />
            <label>Image Url :</label>
            <span> </span>
            <input
              type="text"
              value={movieImage}
              onChange={(e) => {
                setMovie({ ...movie, movieImage: e.target.value });
              }}
            />
            <br />
            <label>Cast List :</label>
            <span> </span>
            <input
              type="text"
              value={castList}
              onChange={(e) => {
                setMovie({ ...movie, castList: e.target.value.split(",") });
              }}
            />
            <br />
            <label>Release Date :</label>
            <span> </span>
            <input
              type="date"
              value={releaseDate}
              onChange={(e) => {
                setMovie({ ...movie, releaseDate: e.target.value });
              }}
            />
            <span> </span>
            <label>No Of Weeks:</label>
            <span> </span>
            <input
              type="number"
              value={noOfWeeks}
              onChange={(e) => {
                setMovie({ ...movie, noOfWeeks: e.target.value });
              }}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={updateMovie}>
            Update Movie
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateMoviePopUp;
