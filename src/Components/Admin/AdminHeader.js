import React from "react";
import classes from "./AdminHeader.module.css";
import { useNavigate } from "react-router-dom";
import { logOut } from "./CheckAdminLogin";

const AdminHeader = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className={classes.mainNav} id="grad">
        <a className={classes.mainLink} onClick={() => {}}>
          MovieMate
        </a>
        <div className={classes.mainNav1}>
          <button
            className={classes.logOutBtn}
            onClick={() => {
              navigate("/");
              logOut();
            }}
          >
            Log-Out
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
