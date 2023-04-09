import React, { useEffect, useState } from "react";
import UserHeader from "./UserGeneral/UserHeader";
import UserFooter from "./UserGeneral/UserFooter";
import axios from "axios";
import classes from "./MyBooking.module.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

const MyBooking = () => {
  let mobileNumber = JSON.parse(localStorage.getItem("UserId"));
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8700/booking-details/mobile/${mobileNumber}`)
      .then((res) => {
        // console.log(res.data);
        setCustomerData(res.data);
      });
  }, []);

  const printTicket = () => {
    window.print();
  };

  return (
    <>
      <UserHeader />
      <div className={classes.mapFlex}>
        {customerData.map((ele) => {
          return (
            <>
              <div className={classes.cardMainDiv} id={classes.divToPrint}>
                <MDBCard alignment="center">
                  <MDBCardTitle className={classes.cardTitle}>
                    {ele.theaterName}
                  </MDBCardTitle>
                  <hr />
                  <MDBCardBody>
                    <table className={classes.cardMainDivTable}>
                      <tr>
                        <th className={classes.tableHeader}>Movie name: </th>
                        <td className={classes.tableData}>{ele.movieName}</td>
                      </tr>
                      <tr>
                        <th className={classes.tableHeader}>Booked seats: </th>
                        <td className={classes.tableData}>
                          {ele.seatsBooked.join(", ")}
                        </td>
                      </tr>
                      <tr>
                        <th className={classes.tableHeader}>
                          Number of seats:{" "}
                        </th>
                        <td className={classes.tableData}>{ele.numberSeats}</td>
                      </tr>
                      <tr>
                        <th className={classes.tableHeader}>Movie time: </th>
                        <td className={classes.tableData}>{ele.showTimings}</td>
                      </tr>
                      <tr>
                        <th className={classes.tableHeader}>Movie date: </th>
                        <td className={classes.tableData}>{ele.bookingDate}</td>
                      </tr>
                      <tr>
                        <th className={classes.tableHeader}>Total cost: </th>
                        <td className={classes.tableData}>₹{ele.totalCost}</td>
                      </tr>
                    </table>
                    <br />
                    <button
                      id={classes.btnId}
                      className={classes.cardButton}
                      onClick={() => printTicket()}
                    >
                      {" "}
                      Download{" "}
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </>
          );
        })}
      </div>
      <UserFooter />
    </>
  );
};

export default MyBooking;
