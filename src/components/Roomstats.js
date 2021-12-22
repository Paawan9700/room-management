import React from "react";

export const Roomstats = () => {
  return (
    <div className="container">
      <div className="contact-form">
        <h2> Get Room Details </h2>
        <form>
          <h2>Enter Room No. </h2>
          <input placeholder="Enter you Room No." type="text" />
          <h2> Type of Room </h2>
          <input type="text" />
          <h2> Status </h2>
          <input type="text" />
          <h2>Occupant 1 Name and Roll No.</h2>
          <input type="text" />
          <h2>Occupant 2 Name and Roll No.</h2>
          <input type="text" />
          <h2>Additional Comments </h2>
          <input type="text" />
          <div className="tooltip">
            {" "}
            <input name="Get Details" value="Get Details" type="button" />
            <span className="tooltiptext">
              Get Details of the students{" "}
            </span>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};
