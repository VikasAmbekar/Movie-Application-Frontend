import "./App.css";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import UserSignUp from "./Components/User/UserSignUp";
import UserDashboard from "./Components/User/Dashboard/UserDashboard";
import Admin from "./Components/Admin/Admin";
import AdminHome from "./Components/Admin/AdminHome";
import BookTicket from "./Components/User/UserGeneral/BookTicket";
import AdminMovieOps from "./Components/Admin/AdminMovieOps";
import AdminTheaterOps from "./Components/Admin/AdminTheaterOps";
import UserProfile from "./Components/User/UserGeneral/UserProfile";
import SeatPage from "./Components/User/UserGeneral/SeatPage";
import MyBooking from "./Components/User/MyBooking";
import PrivateRouteUser from "./Components/User/PrivateRouteUser";
import PrivateAdminRoute from "./Components/Admin/PrivateAdminRoute";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-signup" element={<UserSignUp />} />
          <Route
            path="/dashboard"
            element={<PrivateRouteUser children={<UserDashboard />} />}
          />
          <Route path="/admin-login" element={<Admin />} />
          <Route
            path="/admin-home"
            element={<PrivateAdminRoute children={<AdminHome />} />}
          />
          <Route
            path="/book-ticket"
            element={<PrivateRouteUser children={<BookTicket />} />}
          />
          <Route
            path="/admin-movie-ops"
            element={<PrivateAdminRoute children={<AdminMovieOps />} />}
          />
          <Route
            path="/admin-theater-ops"
            element={<PrivateAdminRoute children={<AdminTheaterOps />} />}
          />
          <Route
            path="/my-profile"
            element={<PrivateRouteUser children={<UserProfile />} />}
          />
          <Route
            path="/select-seat"
            element={<PrivateRouteUser children={<SeatPage />} />}
          />
          <Route
            path="/my-booking"
            element={<PrivateRouteUser children={<MyBooking />} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
