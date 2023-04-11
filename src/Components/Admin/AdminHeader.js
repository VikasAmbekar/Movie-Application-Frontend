import React from "react";
import classes from "./AdminHeader.module.css";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className={classes.mainNav} id="grad">
        <a href="/dashboard" className={classes.mainLink}>
          MovieMate
        </a>
        <div className={classes.mainNav1}>
          <button className={classes.logOutBtn} onClick={() => navigate("/")}>
            Log-Out
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
