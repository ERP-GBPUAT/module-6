import React, { useEffect, useReducer, useState } from "react";
import "./FacultyProfile.css";
import { useLocation, useParams } from "react-router-dom";
import NavbarDash from "./NavbarDash";
import MainDashboard from "./MainDashboard";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BEGIN":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
  }
};


const StudentProfile = ({isResearch}) => {
  const location = useLocation()
  const [err,setErr] = useState(false)
  const {studentId}=useParams()
  const [{ loading, error, data }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    data: {},
  });
  useEffect(() => {
    const fetchStudent = async () => {
      dispatch({ type: "FETCH_BEGIN" });
      try {
        const res = await fetch(`http://localhost:8080/student/getStudent/${studentId}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "token": localStorage.getItem("token"),
          },
        });
        const data = await res.json();
        if (data.msg==="success") {
          dispatch({ type: "FETCH_SUCCESS", payload: data.data});
          console.log(data);
        } else {
          setErr(true)
          dispatch({ type: "FETCH_FAIL", payload: data.error });
        }
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error });
      }
    };
    fetchStudent()
  }, []);
  console.log("error",error);
  if(loading) return <div>Loading....</div>
  else if(err) return <div style={{display:"flex",justifyContent:"center",margin:"60px",fontSize:"30px",fontWeight:"600"}}>{error}</div>
  else return (
    <div className="main-content">
        <NavbarDash />
        <MainDashboard data={data} />
    </div>
    
  );
};

export default StudentProfile;