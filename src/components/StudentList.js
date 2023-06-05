import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const StudentList = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState();
  const [{ loading, error, data }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    data: [],
  });

  const { batch, department } = useParams();

  useEffect(() => {
    const fetchStudents = async () => {
      dispatch({ type: "FETCH_BEGIN" });
      try {
        const res = await fetch("http://localhost:8080/student/getStudentsByFilter", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "token": localStorage.getItem("token"),
          },
          body:JSON.stringify({discipline:department,batch})
        });
        const data = await res.json();
        if (data.msg) {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: data.data,
          });
        } else {
          dispatch({ type: "FETCH_FAIL", payload: data.error });
        }
      } catch (error) {
        dispatch({
          type: "FETCH_FAIL",
          payload: "Unable to fetch students. Please try after sometime",
        });
      }
    };
    fetchStudents();
  }, []);
  const handleStudent = (id) => {
    if (id && id !== undefined) {
      console.log("student id",id);
      navigate(`/student/${id}`);
    } else {
      // console.log("Not possible");
      setErrorMsg(
        "Unable to get student. Please reload or try after some time"
      );
      navigate(`/students/${batch}/${department}`);
    }
  };

  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : error ? (
        <div>{error}</div>
      ) : errorMsg? <div>{errorMsg}</div>:(
      <div className="d-flex align-items-center justify-content-center">
        <div className="container-fluid mx-4 my-4 w-75 ">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr className="text-white">
                <th scope="col">Student Id</th>
                <th scope="col">Name</th>
                <th scope="col">Degree</th>
                <th scope="col">Advisor id</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleStudent(null);
                }}
              > */}
                {/* <th scope="row">55115</th>
                <td>Udit Goyal</td>
                <td>B.Tech</td>
                <td>TITAK</td>
                <td>55115_uditgoyal@gbpuat-tech.ac.in</td>
              </tr>
              <tr>
                <th scope="row">55116</th>
                <td>Vaibhav Sharma</td>
                <td>B.Tech</td>
                <td>TITAK</td>
                <td>55116_vaibhavsharma@gbpuat-tech.ac.in</td>
              </tr>
              <tr>
                <th scope="row">55117</th>
                <td>Vikrant Vasu</td>
                <td>B.Tech</td>
                <td>TITAK</td>
                <td>55117_vikrantvasu@gbpuat-tech.ac.in</td>
              </tr> */}
              {data.map((student) => {
                return (
                  <tr
                    style={{cursor:"pointer"}}
                    key={student?.id}
                    onClick={() => {
                      handleStudent(student?.id);
                    }}
                  >
                    <th scope="row">{student?.id}</th>
                    <td>{student?.User?.name}</td>
                    <td>{student?.degree}</td>
                    <td>{student?.FacultyId}</td>
                    <td>{student?.User?.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
       )}
    </>
  );
};

export default StudentList;
