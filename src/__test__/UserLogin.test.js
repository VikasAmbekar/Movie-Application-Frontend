import { fireEvent, render, screen } from "@testing-library/react";
import UserLogin from "../Components/User/UserLogin";
import { BrowserRouter } from "react-router-dom";
// import axios from "axios";
// jest.mock("react-router-dom");
// const axios = require("axios");

// jest.spyOn(global, "fetch").mockImplementation(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve([{ mobileNo: "1234567890", password: "password123" }]),
//   })
// );

const MockUserLogin = () => {
  return (
    <BrowserRouter>
      <UserLogin />
    </BrowserRouter>
  );
};

// test("displays the login form", () => {
//   render(<MockUserLogin />);
//   const mobileInput = screen.getByLabelText("Mobile Number");
//   const passwordInput = screen.getByLabelText("Password");
//   expect(mobileInput).toBeInTheDocument();
//   expect(passwordInput).toBeInTheDocument();
// });

// test("displays an error message when fields are empty on form submission", () => {
//   render(<MockUserLogin />);
//   const loginButton = screen.getByRole("button", { name: "Login" });
//   fireEvent.click(loginButton);
// });

describe("User login component testing", () => {
  it("renders mobileNo label in login form", async () => {
    render(<MockUserLogin />);
    const mobileNumber = await screen.findByLabelText(/Mobile Number/i);
    expect(mobileNumber).toBeInTheDocument;
  });

  it("renders password label in login form", async () => {
    render(<MockUserLogin />);
    const mobileNumber = await screen.findByLabelText(/Password/i);
    expect(mobileNumber).toBeInTheDocument;
  });

  it("renders login checking", () => {
    render(<MockUserLogin />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument;
    // fireEvent.click(loginButton);
    // const errorMessage = screen.getByText(
    //   "Please enter mobile number and password"
    // );
    // expect(errorMessage).toBeInTheDocument;
  });
});
