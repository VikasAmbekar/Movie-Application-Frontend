import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AdminNav from "./AdminNav";
import classes from "./AdminMovieOps.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UpdateMoviePopUp from "./UpdateMoviePopUp";
import UserFooter from "../User/UserGeneral/UserFooter";

const AdminMovieOps = () => {
  let navigate = useNavigate();

  const [model, setModel] = useState(false);

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8700/movie/").then((response) => {
      setMovieData(response.data);
    });
  }, []);

  const deleteMovie = (id) => {
    axios.delete(`http://localhost:8700/movie/${id}`);
    alert("Movie Deleted Successfully!");
    window.location.reload();
  };

  return (
    <>
      <AdminNav />
      <div>
        <table className={classes.movieTable}>
          <thead>
            <tr className={classes.movieRow}>
              <th
                style={{
                  border: "1px solid black",
                  padding: "0.4rem",
                  margin: "0.3rem",
                }}
              >
                Movie ID
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "0.4rem",
                  margin: "0.3rem",
                }}
              >
                Movie Name
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "0.4rem",
                  margin: "0.3rem",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>

          {movieData.map((ele) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td style={{ border: "1px solid black" }}>{ele.id}</td>
                    <td style={{ border: "1px solid black" }}>
                      {ele.movieTitle}
                    </td>
                    <td style={{ padding: "0.3rem" }}>
                      <div>
                        <Button
                          variant="warning"
                          onClick={() => {
                            setModel(true);
                          }}
                        >
                          Update Movie
                        </Button>
                        <UpdateMoviePopUp
                          show={model}
                          onHide={() => {
                            setModel(false);
                          }}
                        />
                      </div>
                      <span> </span>
                      <Button
                        variant="danger"
                        onClick={() => deleteMovie(ele.id)}
                      >
                        Delete Movie
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
      <UserFooter />
    </>
  );
};

export default AdminMovieOps;
