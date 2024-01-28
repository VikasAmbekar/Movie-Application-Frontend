import React from "react";
import classes from "./AdminFooter.module.css";
import {MDBFooter} from "mdb-react-ui-kit";

const AdminFooter = () => {
    return (
        <div className={classes.footerDiv}>
            <MDBFooter
                className="text-center text-white"
                style={{backgroundColor: "#f1f1f1"}}
            >
                <div
                    className="text-center text-dark p-3"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        bottom: "0",
                        marginTop: "3rem",
                    }}
                >
                    © 2023 Copyright
                    <a className="text-dark" href="#">
                        MovieMate
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
};

export default AdminFooter;
