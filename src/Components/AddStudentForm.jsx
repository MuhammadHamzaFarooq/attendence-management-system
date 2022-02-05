import React, { useState } from "react";
import MarkAttendence from "./MarkAttendence";


const AddStudenthtmlForm = () => {
  const [Name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [batch, setBatch] = useState("");
  const [student,setStudent] = useState({});

  const submitValue = (e) => {
    e.preventDefault();
    const studentObj = {
      Name: Name,
      Course: course,
      RollNo: rollNo,
      Batch: batch,
      Semester: semester
    };

    setStudent(studentObj)
    //  return(<MarkAttendence student={student} />)
  };

  return (
    <>
    <div
      className="fluid-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ padding: "20px 0px" }}>Add Student</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputStudentName" className="form-label">
            Student Name
          </label>
          <input type="text" className="form-control" id="inputStudentName" onChange={e => setName(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputRollNo" className="form-label">
            Roll No
          </label>
          <input type="text" className="form-control" id="inputRollNo"  onChange={e => setRollNo(e.target.value)} />
        </div>
        <div className="col-md-4">
          <label htmlFor="Course" className="form-label">
            Course
          </label>
          <select id="Course" className="form-select" value={course} onChange={e => setCourse(e.target.value)}>
            <option selected>Choose Course</option>
            <option value="AI">Artificial Inteligence</option>
            <option value="CB">ChatBot</option>
            <option value="BC">BlockChain</option>
            <option value="CNC">Cloud Native Computing</option>
            <option value="OOP">Object Oriented Programming</option>
            <option value="SE">Software engineering</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="Semester" className="form-label">
            Semester
          </label>
          <select id="Semester" className="form-select"  value={semester}   onChange={e => setSemester(e.target.value)} >
            <option defaultValue="" selected>
              Choose Semester
            </option>
            <option value="one">First Semester</option>
            <option value="two">Second Semester</option>
            <option value="three">Third Semester</option>
            <option value="four">Fourth Semester</option>
            <option value="five">Fifth Semester</option>
            <option value="six">Sixth Semester</option>
            <option value="seven">Seventh Semester</option>
            <option value="eight">eight Semester</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="Batch" className="form-label">
            Batch
          </label>
          <select id="Batch" className="form-select"  value={batch}   onChange={e => setBatch(e.target.value)}>
            <option defaultValue="" selected>
              Choose Batch
            </option>
            <option value="B1">Batch 01</option>
            <option value="B2">Batch 02</option>
            <option value="B3">Batch 03</option>
            <option value="B4">Batch 04</option>
            <option value="B5">Batch 05</option>
            <option value="B6">Batch 06</option>
            <option value="B7">Batch 07</option>
            <option value="B8">Batch 08</option>
            <option value="B9">Batch 09</option>
            <option value="B10">Batch 10</option>
          </select>
        </div>
        <div
          className="col-12"
          style={{ textAlign: "center", marginTop: "50px" }}
        >
          <button onClick={submitValue} className="btn btn-primary" style={{ width: "100%" }}>
            Add Student
          </button>
        </div>
      </form>
    </div>
     <MarkAttendence student={student} />
    </>

  );
};

export default AddStudenthtmlForm;
