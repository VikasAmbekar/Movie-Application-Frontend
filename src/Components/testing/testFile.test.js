import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import TestFile from "./testFile";

const mockData = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
];

describe("testFile", () => {
  it("should match the snapshot", async () => {
    axios.get.mockResolvedValue({ data: mockData });

    const { asFragment } = render(<TestFile />);

    // Wait for the data to be fetched and the component to re-render
    await waitFor(() =>
      expect(screen.getByText("Product 1")).toBeInTheDocument()
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays products after fetching data", async () => {
    axios.get.mockResolvedValue({ data: mockData });

    render(<TestFile />);

    await waitFor(() =>
      expect(screen.getByText("Product 1")).toBeInTheDocument()
    );

    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Product 3")).toBeInTheDocument();
  });

  it("displays products after fetching data with provided id", async () => {
    axios.get.mockResolvedValue({ data: mockData });

    const props = {
      productId: 1,
    };
    render(<TestFile {...props} />);

    await waitFor(() =>
      expect(screen.getByText("Product 1")).toBeInTheDocument()
    );
  });
});
