import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import "../index.css"

const MarkAttendence = ({ students }) => {
  const [Date, setDate] = useState("");
  const [AttendenceStatus, setAttendenceStatus] = useState(null);
  let [value, setValue] = useState("");
  // let [currentDate , setCurrentDate] = useState("");
  // let dateCurr = new Date()
  // let month = dateCurr.getMonth()
  // month = parseInt(month) + 1 ;
  // let fullDateTime = `${dateCurr.getDate()} - ${month} - ${dateCurr.getFullYear()}`
  // setCurrentDate(fullDateTime);
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
      <h1 style={{ padding: "20px 0px" }}>Mark Attendence 8-02-2022</h1>
      <table className="table" style={{ width: "80%" }}>
        <thead>
          <tr>
            <th scope="col">Sr.no</th>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Semester</th>
            <th scope="col">Roll No</th>
            <th scope="col">Batch</th>
            <th scope="col">Date</th>
            <th scope="col">Attendence</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {students.map((data, index) => {
            // if (index !== 0) {
            return (
              <tr key={data._id}>
                <th scope="row">{index + 1}</th>
                <td>{data.Name}</td>
                <td>{data.Course}</td>
                <td>{data.Semester}</td>
                <td>{data.RollNo}</td>
                <td>{data.Batch}</td>
                <td>
                  <DatePicker
                    selected={Date}
                    onChange={(date) => setDate(date)}
                    dateFormat="dd/MM/yyy"
                    isClearable
                  />
                </td>
                <td
                  style={{
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
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
                    onClick={() => {
                      setAttendenceStatus("PRESENT");
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
                    onClick={() => {
                      setAttendenceStatus("ABSENT");
                    }}
                  >
                    A
                  </button>

                  <button
                    type="button"
                    className="btn btn-warning"
                    style={{
                      width: "10px",
                      height: "25px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      setAttendenceStatus("LATE");
                    }}
                  >
                    L
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      padding: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      let obj = {
                        id: data._id,
                        attendence: AttendenceStatus,
                        date: Date,
                      };
                      if (
                        data._id !== "" &&
                        AttendenceStatus !== "" &&
                        Date !== ""
                      ) {
                        axios
                          .post("https://attendence-management-backend.herokuapp.com/attendence", obj)
                          .then((res) => {
                            console.log(res);
                          })
                          .catch((e) => {
                            console.log(e);
                          });
                      } else {
                        setValue("Fill all Detalis");
                      }
                    }}
                  >
                    SUBMIT
                  </button>

                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    {value}
                  </span>
                </td>
                <td>
                <DeleteRoundedIcon className="deleterBtn"/>
                </td>

              </tr>
            );
            // } else {
            //   console.log("DATA IS EMPTY!!!");
            // }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MarkAttendence;
