import React from "react";
import {render} from "@testing-library/react";
import AdminFooter from "../Components/Admin/AdminFooter";

describe("AdminFooter test case", () => {
    it("renders correctly", () => {
        const {getByText, container} = render(<AdminFooter/>);

        // Snapshot test
        expect(container).toMatchSnapshot();

        // Check if the footerDiv exists
        const footerDiv = container.querySelector(".footerDiv");
        expect(footerDiv).toBeTruthy();

        // Check if the text "MovieMate" exists within an anchor tag
        const movieMateLink = getByText("MovieMate");
        expect(movieMateLink).toBeTruthy();
    });
});
