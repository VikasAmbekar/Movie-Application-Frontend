import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import UserLogin from "../User/UserLogin";
import axios from "axios";

const Home = () => {
    let navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    async function getMovies() {
        try {
            const response = await axios.get(`http://localhost:8700/movie/`);
            setMovies(response.data);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response);
            throw error;
        }
    }


    useEffect(() => {
        getMovies()
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
                        onClick={() => navigate("/user-signup")}
                    >
                        User SignUp
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
                                        className="d-block"
                                        src={movie.movieImage}
                                        alt="Second slide"
                                        style={{
                                            borderRadius: "10px",
                                            width: "100%",
                                            height: "78vh",
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
