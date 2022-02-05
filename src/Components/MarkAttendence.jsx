import React, { useState, useEffect } from "react";
// import DatePicker from "react-bootstrap-date-picker"

const MarkAttendence = ({student}) => {
      // console.log(student)
      // let Alldata = [student];
      const [Date, setDate] = useState(null);
      const [AttendenceStatus, setAttendenceStatus] = useState(null);
      let [value,setValue] = useState([]);
      // let arrClone = value.slice(0);
      // arrClone.push(student)
      // setValue(arrClone);

      // console.log(value)
useEffect(() => {
  // console.log(student) 
  if(student !== {}){
  let arrClone = value.slice(0);
  arrClone.push(student)
  setValue(arrClone);
}
  else{
    // console.log("student is empty")
  }
}, [student]);

// useEffect(() => {
  
//   // console.log(value)
// }, [value]);

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
            <th scope="col">Date</th>
            <th scope="col">Attendence</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            value.map((data, index)=>{
              console.log(data)
              if(index !== 0 ){
                return(
                  <tr key={index}>
                <th scope="row">{index }</th>
                <td>{data.Name}</td>
                <td>{data.Course}</td>
                <td>{data.Semester}</td>
                <td>{data.RollNo}</td>
                <td>{data.Batch}</td>
                <td>
                {/* DATE PICKER */}
                <input type="date" value={Date} onChange={e => setDate(e.target.value)}  />
                </td>
                <td style={{paddingTop:'15px', paddingBottom: '15px',  display: "flex", justifyContent: "space-evenly" }}>
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
                    onClick={()=>{
                      setAttendenceStatus("PRESENT")
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
                    onClick={()=>{
                      setAttendenceStatus("ABSENT")
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
                    onClick={()=>{
                      setAttendenceStatus("LATE")
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
                      // width: "10px",
                      // height: "25px",
                      // borderRadius: "50%",
                      padding:'5px',
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    SUBMIT
                  </button>
                </td>
              </tr>
                  )
              }
              else{
                console.log("DATA IS EMPTY!!!")
              }
              
            }) 
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default MarkAttendence;
