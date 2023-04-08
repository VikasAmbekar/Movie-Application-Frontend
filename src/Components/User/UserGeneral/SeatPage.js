import React, { useEffect, useState } from "react";
import Seats from "./Seats";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";
import axios from "axios";

function SeatPage(props) {
  const [theaterSeat, setTheaterSeat] = useState(null);

  async function getSeatDetails() {
    await axios
      .get("http://localhost:8700/seats/M12/T22/3:00PM")
      .then((res) => {
        setTheaterSeat(res.data);
        console.log(res.data);
      });
  }

  useEffect(() => {
    getSeatDetails();
  }, []);

  if (theaterSeat === null) {
    return <div></div>;
  }

  return (
    <div>
      <UserHeader />
      <Seats data={theaterSeat} />
      <UserFooter />
    </div>
  );
}

export default SeatPage;
