import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./UserDashboard.module.css";
import UserHeader from "../UserGeneral/UserHeader";
import MovieCarousel from "./MovieCarousel";
import MovieCard from "./MovieCard";
import UserFooter from "../UserGeneral/UserFooter";

function UserDashboard(props) {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [filterMovie, setFilterMovie] = useState([]);

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

  useEffect(() => {
    const result = movies.filter((mov) => {
      return mov.movieTitle.toLowerCase().match(movieName.toLowerCase());
    });
    setFilterMovie(result);
  }, [movieName, movies]);

  if (movies === null) {
    return <div></div>;
  }
  return (
    <div>
      <UserHeader />
      <br />
      <MovieCarousel data={movies} />
      <input
        type="text"
        placeholder="Enter Movie Name"
        className={classes.searchBar}
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filterMovie.map((movie) => (
          <MovieCard movieData={movie} />
        ))}
      </div>
      <UserFooter />
    </div>
  );
}

export default UserDashboard;
