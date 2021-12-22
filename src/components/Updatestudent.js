import React from "react";

export const Updatestudent = () => {
  return (
    <div className="container">
      <div className="contact-form">
        <h1>UPDATE STUDENT DATA</h1>
        <div className="tooltip">
          <h2>student's current roll no.</h2>
          <input name="student's current roll no." type="text" />{" "}
          <span className="tooltiptext">Enter student's roll no.</span>{" "}
        </div>
        <div className="tooltip">
          <h2>New Roll No.</h2>
          <input name="new roll no." type="text" />{" "}
          <span className="tooltiptext">Enter new roll no.</span>{" "}
        </div>
        <div className="tooltip">
          <h2>New Contact No.</h2>
          <input name="new contact no." type="text" />{" "}
          <span className="tooltiptext">Enter contact no.</span>{" "}
        </div>
        <div className="tooltip">
          {" "}
          <input
            name="For confirmation"
            value="Confirm"
            type="button"
          />{" "}
          <span className="tooltiptext">
            click when all details are filled correctly{" "}
          </span>{" "}
        </div>
        <div className="tooltip">
          {" "}
          <input
            name="Get Details"
            value="Get Details of student updates"
            type="button"
          />{" "}
          <span className="tooltiptext">Get The New Details </span>{" "}
        </div>
      </div>
    </div>
  );
};
 