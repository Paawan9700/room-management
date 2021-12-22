import React from "react";

const Allocate = () => {
  return (
    <div className="container">
      <form >
        <div className="contact-form">
          <h1 id="heading">ALLOCATE ROOM</h1>
          <p>Upload excel file containing list of students </p>
          <input
            name="StudentDetailsSheet"
            accept=".xls ,.xlsx "
            type="file"
          />
          <input
            name="UploadSheet"
            value="Allot"
            formmethod="post"
            formtarget="_self"
            type="submit"
          />
          <div className="admin"> </div>
        </div>
      </form>
    </div>
  );
};

export default Allocate;
