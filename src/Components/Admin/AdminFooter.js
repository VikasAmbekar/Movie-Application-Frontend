import React from "react";
import classes from "./AdminFooter.module.css";
// Import only MDBFooter to potentially reduce bundle size
import { MDBFooter } from "mdb-react-ui-kit";

const AdminFooter = () => {
  return (
    <>
      <MDBFooter
        className={`${classes.footerBackground} text-center text-white`}
        aria-label="footer"
      >
        <div className={`${classes.copyrightContainer} p-3`}>
          © 2023 Copyright
          <a
            className={`${classes.copyrightLink}`}
            href="#"
            aria-label="MovieMate link"
          >
            MovieMate
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default AdminFooter;
