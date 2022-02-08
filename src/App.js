import React, { useState, useEffect } from "react";
import AddStudenthtmlForm from "./Components/AddStudentForm";
import Nav from "./Components/Nav";
import MarkAttendence from "./Components/MarkAttendence";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  useEffect(async()=>{
   let {data} = await axios.get("https://attendence-management-backend.herokuapp.com/students");
   setStudents(data);
  },[])
  
  return (
    <div>
      <Nav />
      <AddStudenthtmlForm />
      {students.length > 0 ? <MarkAttendence students={students} /> : null}
    </div>
  );
}

export default App;
