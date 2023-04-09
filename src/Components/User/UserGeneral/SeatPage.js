import React, { useEffect, useState } from "react";
import Seats from "./Seats";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";
import axios from "axios";
import { useLocation } from "react-router-dom";

function SeatPage(props) {
  const [theaterSeat, setTheaterSeat] = useState(null);

  let location = useLocation();

  const theaterId = useState(location.state.theaterId1);

  const movieId = useState(location.state.mId1);

  const time = useState(location.state.time1);

  async function getSeatDetails() {
    await axios
      .get(
        `http://localhost:8700/seats/${movieId[0]}/${theaterId[0]}/${time[0]}`
      )
      .then((res) => {
        setTheaterSeat(res.data);
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
      <Seats
        data={theaterSeat}
        theaterID={theaterId[0]}
        movieID={movieId[0]}
        Time={time[0]}
      />
      <UserFooter />
    </div>
  );
}

export default SeatPage;
