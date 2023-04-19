import { render, screen } from "@testing-library/react";
import UserHeader from "../Components/User/UserGeneral/UserHeader";
import { BrowserRouter } from "react-router-dom";

const MockUserHeader = () => {
  return (
    <BrowserRouter>
      <UserHeader />
    </BrowserRouter>
  );
};

test("user header test 1", () => {
  render(<MockUserHeader />);
  const text = screen.getByText(/moviemate/i);
  expect(text).toBeInTheDocument;
});

test("name render test", () => {
  render(<MockUserHeader />);
  const name = screen.getByText(/hi, null/i);
  expect(name).toBeInTheDocument;
});

// test("to contain html test", () => {
//   render(<MockUserHeader />);
//   const text = screen.getByText(/city/i);
//   expect(text).toContainHTML("select");
// });

test("user header test 2", () => {
  render(<MockUserHeader />);
  const text = screen.getByText(/mumbai/i);
  expect(text).toBeInTheDocument;
});

// test("user header test 3", () => {
//   render(<MockUserHeader />);
//   const text = screen.queryByText(/crops/i);
//   expect(text).not.toBeInTheDocument;
// });

test("user header test 4", () => {
  render(<MockUserHeader />);
  const text = screen.getAllByRole("option");
  expect(text.length).toBe(6);
});
