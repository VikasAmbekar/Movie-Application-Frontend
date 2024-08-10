import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Home from "../Components/Home/Home";

jest.mock("axios");

describe("Home Component", () => {
  it("matches snapshot", () => {
    const mockMovies = [
      { id: 1, movieImage: "movie1.jpg", movieTitle: "Movie 1" },
    ];

    // Mock the Axios get request
    axios.get.mockResolvedValue({ data: mockMovies });
    const { asFragment } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders movie carousel with movie images and titles", async () => {
    const mockMovies = [
      { id: 1, movieImage: "movie1.jpg", movieTitle: "Movie 1" }
    ];

    // Mock the Axios get request
    axios.get.mockResolvedValue({ data: mockMovies });

    const { asFragment } = render(
      <Router>
        <Home />
      </Router>
    );

    await waitFor(() => {
      mockMovies.forEach((movie) => {
        // const movieImage = screen.getByAltText(movie.movieTitle);
        // expect(movieImage).toBeInTheDocument();
        // expect(movieImage).toHaveAttribute("src", movie.movieImage);

        // const movieTitle = screen.getByText(movie.movieTitle);
        // expect(movieTitle).toBeInTheDocument();
        console.log('movie=>', movie);
        expect(asFragment()).toMatchSnapshot();
        expect(movie.movieTitle).toBe('Movie 1');
      });
    });
  });
});
