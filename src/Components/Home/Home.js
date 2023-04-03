import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { Button, Carousel } from "react-bootstrap";
import UserLogin from "../User/UserLogin";
import axios from "axios";

const Home = () => {
  let navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    await axios
      .get(`http://localhost:8700/movie/`)
      .then((response) => {
        setMovies(response.data);
        console.log(movies);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  useEffect(() => {
    getMovies();
  }, []);

  if (movies === null) {
    return <div></div>;
  }

  return (
    <>
      <header className={classes.headerTop}>
        <div className={classes.logo}>
          <h5 className={classes.logolink} onClick={() => navigate("/")}>
            MovieMate
          </h5>
        </div>
        <div className={classes.adminlogin}>
          <button
            className={classes.adminbtn}
            onClick={() => navigate("/admin-login")}
          >
            Admin Login
          </button>
        </div>
      </header>
      <div className={classes.maininfo}>
        <div className={classes.carousel}>
          <Carousel fade>
            {movies.map((movie) => {
              return (
                <Carousel.Item className={classes.carouselImage}>
                  <img
                    className="d-block w-100 h-50"
                    src={movie.movieImage}
                    alt="Second slide"
                    style={{
                      borderRadius: "0.3rem",
                    }}
                  />
                  <Carousel.Caption>
                    <h3>{movie.movieTitle}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className={classes.loginForm}>
          <UserLogin />
        </div>
      </div>
      <footer className={classes.bottom}>
        <p>Copyright</p>
      </footer>
    </>
  );
};

export default Home;