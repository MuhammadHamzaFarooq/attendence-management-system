import React, { useState } from "react";


const MarkAttendence = ({student}) => {
      // console.log(student)
      // let Alldata = [student];
      // let [value,setValue] = useState([]);
      // let arrClone = value.slice(0);
      // arrClone.push(student)
      // setValue(arrClone);

      // console.log(value)


  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
     <h1 style={{ padding: "20px 0px" }}>Mark Attendence 5-02-2022</h1>
      <table className="table" style={{ width: "80%" }}>
        <thead>
          <tr>
            <th scope="col">Sr.no</th>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Semester</th>
            <th scope="col">Roll No</th>
            <th scope="col">Batch</th>
            <th scope="col">Attendence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Muhammd Hamza Farooq</td>
            <td>Arifical Intelligence</td>
            <td>Sixth Semester</td>
            <td>AI02293</td>
            <td>Batch 10</td>
            <td style={{ display: "flex", justifyContent: "space-evenly" }}>
              <button
                type="button"
                className="btn btn-success"
                style={{
                  width: "10px",
                  height: "25px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                P
              </button>

              <button
                type="button"
                className="btn btn-danger"
                style={{
                  width: "10px",
                  height: "25px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                A
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MarkAttendence;
