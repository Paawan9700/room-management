import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container">
      <div className="contact-form">
        <h2>&nbsp;Admin MENU</h2>
        <div className="admin">
          {" "}
          <Link
            to="/allocate"
            className="btn btn-danger btn-block"
            title="Allocate"
          >
            Allocate
          </Link>{" "}
        </div>
        <div className="admin">
          {" "}
          <Link
            to="/reallocate"
            className="btn btn-danger btn-block"
            name="Reallocate"
          >
            Reallocate
          </Link>{" "}
        </div>
        <div className="admin">
          {" "}
          <Link
            to="/roomstats"
            name="Room Stats"
            className="btn btn-danger btn-block"
          >
            Room Stats
          </Link>{" "}
        </div>
        <div className="admin">
          {" "}
          <Link
            to="/attendence"
            name="Attendance"
            className="btn btn-danger btn-block"
          >
            Attendance
          </Link>
        </div>
        <div className="admin">
          {" "}
          <Link
            to="/updatestudent"
            name="Update Student"
            className="btn btn-danger btn-block"
          >
            Update Students Details
          </Link>{" "}
        </div>
        <div className="admin">
          {" "}
          <Link
            to="/studentdata"
            name="View Student"
            className="btn btn-danger btn-block"
          >
            View Student Details
          </Link>{" "}
        </div>
        <span style={{color: "white"}}>
          (Allocate ,Hostel stats windows are yet to be implemented){" "}
        </span>{" "}
      </div>
    </div>
  );
};

export default Menu;
