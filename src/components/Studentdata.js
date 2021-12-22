import React from "react";

export const Studentdata = () => {
  return (
    <div className="container">
      <div className="contact-form">
        <h2>Student Data</h2>
        <form action="">
          <p>Roll Number</p>
          <input id="name" placeholder="Enter Roll Number" />
          <div align="center">
            {" "}
            <input
              name="Get Details"
              value="Get Details"
              id="press"
              onClick="clicked()"
              type="button"
            />{" "}
          </div>
          <div id="hide">
            <table className="table">
              <tbody>
                <tr>
                  <th>Roll number</th>
                  <th>Name</th>
                  <th>Contact number</th>
                  <th>occupied room</th>
                  <th>Hostel Number</th>
                </tr>
                <tr>
                  <td id="namechange">19ucs127 </td>
                  <td> Abhishek</td>
                  <td> 98********</td>
                  <td>E-20* </td>
                  <td>Bh1 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
};
