import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../Components/User/Dashboard/MovieCard";
import { BrowserRouter } from "react-router-dom";

const MockMovieCard = (movieData) => {
  return (
    <BrowserRouter>
      <MovieCard movieData />
    </BrowserRouter>
  );
};

describe("mocking Axios request", () => {
  const movie = {
    id: "M01",
    movieTitle: "Tu Jhoothi Main Makkaar",
    duration: "2hr 39min",
    rating: 7.7,
    category: "Comedy,Romantic",
    language: "Hindi",
    movieImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Egs8JiR6GmtZ7elHB3NOSAHaEK%26pid%3DApi&f=1&ipt=b9f5fc2c35bd0c5865da71f435062992bd303455397dffe1d3dc51f878a2d84a&ipo=images",
    castList: ["Ranbir Kapoor", "Shraddha Kapoor", "Anubhav Singh Bassi"],
    releaseDate: "2023-08-03",
    noOfWeeks: 3,
  };

  it("Movie Card Title Text", async () => {
    render(<MockMovieCard movieData={movie} />);
    const titleElement = screen.findByText("Tu Jhoothi Main Makkaar");
    expect(titleElement).toBeInTheDocument;
  });

  it("Movie Card Button", async () => {
    render(<MockMovieCard movieData={movie} />);
    const buttonElement = screen.findByRole("button", { name: /Book Now/i });
    expect(buttonElement).toBeInTheDocument;
    // fireEvent.click(await screen.findByRole("button", { name: /Book Now/i }));
    // const modalElement = screen.getByText("Available Theaters");
  });
});
