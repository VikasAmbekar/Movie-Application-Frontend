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

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-signup" element={<UserSignUp />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin-login" element={<Admin />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/book-ticket" element={<BookTicket />} />
          <Route path="/admin-movie-ops" element={<AdminMovieOps />} />
          <Route path="/admin-theater-ops" element={<AdminTheaterOps />} />
        </Routes>
      </div>
      ;
    </>
  );
}

export default App;
