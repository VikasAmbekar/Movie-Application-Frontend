import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AdminNav from "./AdminNav";
import classes from "./AdminTheaterOps.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import UpdateTheaterPopUp from "./UpdateTheaterPopUp";
import UserFooter from "../User/UserGeneral/UserFooter";
import AdminHeader from "./AdminHeader";

const AdminTheaterOps = () => {
  let navigate = useNavigate();

  const [model, setModel] = useState(false);

  const [theaterData, setTheaterData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8700/theater/").then((response) => {
      setTheaterData(response.data);
    });
  }, []);

  const deleteTheater = (id) => {
    axios.delete(`http://localhost:8700/theater/${id}`);
    alert("Theater Deleted Successfully!");
    window.location.reload();
  };

  return (
    <>
      <AdminHeader />

      <div>
        <table className={classes.theaterTable}>
          <thead>
            <tr className={classes.theaterRow}>
              <th
                style={{
                  border: "1px solid black",
                  padding: "0.4rem",
                  margin: "0.3rem",
                }}
              >
                Theater ID
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "0.4rem",
                  margin: "0.3rem",
                }}
              >
                Theater Name
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
          <tbody>
            {theaterData.map((ele) => {
              return (
                <>
                  <tr className={classes.theaterRow}>
                    <td style={{ border: "1px solid black" }}>{ele.id}</td>
                    <td style={{ border: "1px solid black" }}>{ele.name}</td>
                    <td style={{ padding: "0.3rem" }}>
                      <div>
                        <Button
                          variant="warning"
                          onClick={() => {
                            setModel(true);
                          }}
                        >
                          Update Theater
                        </Button>
                        <UpdateTheaterPopUp
                          show={model}
                          onHide={() => {
                            setModel(false);
                          }}
                        />
                      </div>
                      <span> </span>
                      <Button
                        variant="danger"
                        onClick={() => deleteTheater(ele.id)}
                      >
                        Delete Theater
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <UserFooter />
    </>
  );
};

export default AdminTheaterOps;
