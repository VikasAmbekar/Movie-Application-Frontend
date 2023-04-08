import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import classes from "./UserSignUp.module.css";
import { useNavigate } from "react-router-dom";

const UserSignUp = () => {
  let navigate = useNavigate();
  const initialValues = {
    name: "",
    mobileNo: "",
    email: "",
    password: "",
    city: "",
    state: "",
    pinCode: "",
    address: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    mobileNo: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "Mobile number must be 10 digits and contain only numbers"
      )
      .required("Mobile number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Password must match"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pinCode: Yup.string()
      .matches(
        /^[0-9]{6}$/,
        "PIN code must be 6 digits and contain only numbers"
      )
      .required("PIN code is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    async function postUser() {
      axios
        .post("http://localhost:8700/user/", values)
        .then(() => {
          resetForm();
          alert("User signed up successfully!");
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to sign up user!");
        })
        .finally(() => {
          setSubmitting(false);
        });
    }

    postUser();
  };

  return (
    <>
      <header className={classes.headerTop}>
        <div className={classes.logo}>
          <h5 className={classes.logolink} onClick={() => navigate("/")}>
            MovieMate
          </h5>
        </div>
        <div className={classes.adminlogin}>
          <button className={classes.adminbtn} onClick={() => navigate("/")}>
            Login
          </button>
        </div>
      </header>
      <div className={classes.SignupForm}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="name" className={classes.SignupLabel}>
                  Name
                </label>{" "}
                <br />
                <Field
                  type="text"
                  name="name"
                  className={classes.signupInput}
                  autoComplete="off"
                />{" "}
                <br />{" "}
                <span className={classes.formerror}>
                  <ErrorMessage name="name" />{" "}
                </span>
              </div>
              <br />
              <div>
                <label htmlFor="mobileNo" className={classes.SignupLabel}>
                  Mobile No
                </label>
                <br />
                <Field
                  type="text"
                  name="mobileNo"
                  className={classes.signupInput}
                  autoComplete="off"
                />{" "}
                <br />{" "}
                <span className={classes.formerror}>
                  <ErrorMessage name="mobileNo" />
                </span>
              </div>
              <br />
              <div>
                <label htmlFor="email" className={classes.SignupLabel}>
                  Email
                </label>{" "}
                <br />
                <Field
                  type="email"
                  name="email"
                  className={classes.signupInput}
                  autoComplete="off"
                />{" "}
                <br />
                <span className={classes.formerror}>
                  <ErrorMessage name="email" />
                </span>
              </div>
              <br />
              <div>
                <label htmlFor="password" className={classes.SignupLabel}>
                  Password
                </label>{" "}
                <br />
                <Field
                  type="password"
                  name="password"
                  className={classes.signupInput}
                  autoComplete="off"
                />{" "}
                <br />
                <span className={classes.formerror}>
                  <ErrorMessage name="password" />
                </span>
              </div>
              <br />
              <div>
                <label htmlFor="password" className={classes.SignupLabel}>
                  Confirm Password
                </label>{" "}
                <br />
                <Field
                  type="password"
                  name="confirmPassword"
                  className={classes.signupInput}
                  autoComplete="off"
                />{" "}
                <br />
                <span className={classes.formerror}>
                  <ErrorMessage name="confirmPassword" />
                </span>
              </div>
              <br />
              <div>
                <label htmlFor="city" className={classes.SignupLabel}>
                  City
                </label>{" "}
                <br />
                <Field name="city" as="select" className={classes.signupInput}>
                  <option value="">Select City</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Pune">Pune</option>
                </Field>
                <br />
                <span className={classes.formerror}>
                  <ErrorMessage name="city" />
                </span>
              </div>
              <br />
              <div>
                <label htmlFor="state" className={classes.SignupLabel}>
                  State
                </label>
                <br />
                <Field name="state" as="select" className={classes.signupInput}>
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Delhi">Delhi</option>
                </Field>
                <br />
                <span className={classes.formerror}>
                  <ErrorMessage name="state" />
                </span>
              </div>
              <br />
              <div>
                <label htmlFor="pinCode" className={classes.SignupLabel}>
                  PIN Code
                </label>
                <br />
                <Field
                  type="text"
                  name="pinCode"
                  className={classes.signupInput}
                  autoComplete="off"
                />{" "}
                <br />
                <span className={classes.formerror}>
                  <ErrorMessage name="pinCode" />
                </span>
              </div>
              <br />
              <div>
                <label htmlFor="address" className={classes.SignupLabel}>
                  Address
                </label>
                <br />
                <Field
                  as="textarea"
                  name="address"
                  className={classes.signupInput}
                  autoComplete="off"
                />
                <br />
                <span className={classes.formerror}>
                  <ErrorMessage name="address" />
                </span>
              </div>
              <br />

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={classes.signupButtom}
                autoComplete="off"
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </button>
              <br />
              <br />
              <p className={classes.SignUpLoginp}>
                Already have account click here&nbsp;
                <a
                  className={classes.SignUpLogin}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Log in
                </a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
      <footer className={classes.bottom}>
        <p>Copyright</p>
      </footer>
    </>
  );
};

export default UserSignUp;
