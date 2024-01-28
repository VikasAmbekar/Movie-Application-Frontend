import React from "react";
import {render, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../Components/Home/Home";
import {BrowserRouter as Router} from "react-router-dom";
import axios from "axios";

jest.mock("axios");
describe("Home Component", () => {

    it("matches snapshot", () => {
        const {asFragment} = render(
            <Router>
                <Home/>
            </Router>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders movie carousel with movie images and titles", async () => {
        const mockMovies = [
            { id: 1, movieImage: "movie1.jpg", movieTitle: "Movie 1" },
            { id: 2, movieImage: "movie2.jpg", movieTitle: "Movie 2" },
        ];

        axios.get.mockResolvedValueOnce({ data: mockMovies });

        const { getByAltText } = render(
            <Router>
                <Home />
            </Router>
        );

        await waitFor(() => {
            mockMovies.forEach((movie) => {
                const movieImage = getByAltText(movie.movieTitle);
                expect(movieImage).toBeInTheDocument();
                expect(movieImage).toHaveAttribute("src", movie.movieImage);
            });
        });
    });

    it("handles empty movie array from axios response", async () => {
        axios.get.mockResolvedValueOnce({ data: [] });

        render(
            <Router>
                <Home />
            </Router>
        );

        await waitFor(() => {
            // Assert that there's no carousel items when movies array is empty
            expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
        });
    });

});