import { render, screen, fireEvent } from "@testing-library/react";
import UserSignUp from "../Components/User/UserSignUp";
import { BrowserRouter } from "react-router-dom";

const MockUserSignUp = () => {
  return (
    <BrowserRouter>
      <UserSignUp />
    </BrowserRouter>
  );
};

describe("User Signup Form", () => {
  describe("Name Input Field", () => {
    it("check label element is rendered", () => {
      render(<MockUserSignUp />);
      const labelElement = screen.findByLabelText("Name");
      expect(labelElement).toBeInTheDocument;
    });

    it("Check field element is rendered", () => {
      render(<MockUserSignUp />);
      const inputElement = screen.findByPlaceholderText(/Enter Your Name/i);
      expect(inputElement).toBeInTheDocument;
    });

    it("Check wether able to type into name", () => {
      render(<MockUserSignUp />);
      const inputElement = screen.getByPlaceholderText(/Enter Your Name/i);
      fireEvent.click(inputElement);
      fireEvent.change(inputElement, { target: { value: "Pratik Waso" } });
      expect(inputElement.value).toBe("Pratik Waso");
    });

    it("should display error if field is empty", () => {
      render(<MockUserSignUp />);
      const inputElement = screen.getByPlaceholderText(/Enter Your Name/i);
      // const labelElement  = screen.findByLabelText("Name");
      fireEvent.click(inputElement);
      const buttonElement = screen.getByRole("button", { name: "Sign Up" });
      fireEvent.click(buttonElement);
      expect(screen.findByText("Name is required"));
    });
  });

  describe("Mobile Number Input ", () => {
    it("Check Input Field Mobile Number", () => {
      render(<MockUserSignUp />);
      const labelElement = screen.findByLabelText(/Mobile No/i);
      expect(labelElement).toBeInTheDocument;
    });

    it("Check Field Element is rendered", () => {
      render(<MockUserSignUp />);
      const inputElement = screen.getByPlaceholderText(/Enter mobile number/i);
      fireEvent.click(inputElement);
      fireEvent.change(inputElement, { target: { value: 7620121551 } });
      expect(inputElement.value).toBe("7620121551");
    });

    it("Empty Field Check", () => {
      render(<MockUserSignUp />);
      const inputElement = screen.getByPlaceholderText(/Enter Mobile Number/i);
      fireEvent.click(inputElement);
      const buttonElement = screen.getByRole("button", { name: "Sign Up" });
      fireEvent.click(buttonElement);
      expect(screen.findByText(/Mobile number is required/i));
    });

    it("Mobile number should be 10 digit", () => {
      render(<MockUserSignUp />);
      const inputElement = screen.getByPlaceholderText(/Enter Mobile Number/i);
      fireEvent.click(inputElement);
      fireEvent.change(inputElement, { target: { value: 76201 } });
      fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));
      expect(
        screen.findByText(
          /mobile number must be 10 digits and contain only numbers/i
        )
      );
    });
  });

  it("Check Input Field Email", () => {
    render(<MockUserSignUp />);
    const labelElement = screen.findByLabelText("Email");
    expect(labelElement).toBeInTheDocument;
  });
  describe("Password Check", () => {
    it("Check Input Field Password", () => {
      render(<MockUserSignUp />);
      const labelElement = screen.findByLabelText("Password");
      expect(labelElement).toBeInTheDocument;
    });
    it("Check Field Element is rendered", () => {
      render(<MockUserSignUp />);
      const inputElement = screen.getByPlaceholderText(/Enter Password/i);
      fireEvent.click(inputElement);
      fireEvent.change(inputElement, { target: { value: "Pratik@123" } });
      expect(inputElement.value).toBe("Pratik@123");
    });

    it("Check Empty field", () => {
      render(<MockUserSignUp />);
      const inputElement = screen.getByPlaceholderText(/Enter Password/i);
      fireEvent.click(inputElement);
      const buttonClick = screen.getByRole("button", { name: "Sign Up" });
      fireEvent.click(buttonClick);
      expect(screen.findByText(/Please Enter your password/i));
    });

    it("Check Input Field Confirm Password", () => {
      render(<MockUserSignUp />);
      const labelElement = screen.findByLabelText("Confirm Password");
      expect(labelElement).toBeInTheDocument;
    });
  });

  it("Check Input Field City", () => {
    render(<MockUserSignUp />);
    const labelElement = screen.findByLabelText("City");
    expect(labelElement).toBeInTheDocument;
  });
  it("Check Input Field State", () => {
    render(<MockUserSignUp />);
    const labelElement = screen.findByLabelText("State");
    expect(labelElement).toBeInTheDocument;
  });
  it("Check Input Field PIN Code", () => {
    render(<MockUserSignUp />);
    const labelElement = screen.findByLabelText("PIN Code");
    expect(labelElement).toBeInTheDocument;
  });
  it("Check Input Field Address", () => {
    render(<MockUserSignUp />);
    const labelElement = screen.findByLabelText("Address");
    expect(labelElement).toBeInTheDocument;
  });
});
