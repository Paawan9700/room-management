import React from "react";

const Reallocate = () => {
  return (
    <div className="container">
      <div className="contact-form">
        <h1 id="heading">REALLOCATE ROOM</h1>
        <div>
          <h3>Roll No</h3>
          <input
            name="roll no."
            placeholder="Enter student's roll no."
            type="text"
          />
        </div>
        <div className="tooltip">
          <h2>Contact No.</h2>
          <input
            name="contact no."
            placeholder="Enter contact no."
            type="text"
          />{" "}
        </div>
        <div>
          <h3>New Room To Allocate</h3>
        </div>
        <input name="new room" placeholder="Enter Room Details" type="text" />
        <div className="tooltip">
          {" "}
          <input name="Reallot" value="Reallot" type="button" />
          <span className="tooltiptext">Send details </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Reallocate;
