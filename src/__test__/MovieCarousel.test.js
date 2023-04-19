import { render, screen } from "@testing-library/react";
import MovieCarousel from "../Components/User/Dashboard/MovieCarousel";

describe("MovieCarousel Testing", () => {

    const data = [
        {
            id: "M01",
            movieTitle: "Tu Jhoothi Main Makkaar",
            duration: "2hr 39min",
            rating: 7.7,
            category: "Comedy,Romantic",
            language: "Hindi",
            movieImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Egs8JiR6GmtZ7elHB3NOSAHaEK%26pid%3DApi&f=1&ipt=b9f5fc2c35bd0c5865da71f435062992bd303455397dffe1d3dc51f878a2d84a&ipo=images",
            castList: ["Ranbir Kapoor", "Shraddha Kapoor", "Anubhav Singh Bassi"],
            releaseDate: "2023-08-03",
            noOfWeeks: 3
        },
        {
            id: "M02",
            movieTitle: "John Wick: Chapter 4",
            duration: "2hr 51min",
            rating: 9.1,
            category: "Action,Thriller",
            language: "English, Hindi, Tamil",
            movieImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIF.9RwhjGOhw07bSo2mAM6fyg%26pid%3DApi&f=1&ipt=798db637c57faa59c7edd1a851359da818329f0bd1630ef444fa782b5fc335f2&ipo=images",
            castList: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgard"],
            releaseDate: "2023-03-24",
            noOfWeeks: 3
        }
    ];

    it('Check is Title is present in movieCarousel', () => {
        render(<MovieCarousel data={data} />);
        const titleElement = screen.getByText(/Tu Jhoothi Main Makkaar/i)
        expect(titleElement).toBeInTheDocument;
    })

    it('Check wether all movies are visible in movie corousel',() =>{
        render(<MovieCarousel data={data} />);
        const countMovies = screen.getAllByAltText("Second slide")
        expect(countMovies.length).toEqual(2);
    })
})
