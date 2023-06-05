import React, { useState, useEffect, useReducer } from "react";
import "./style.css";
import axios from "axios";
import UserDetails from "../UserDetails";
import { useNavigate } from "react-router-dom";
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

const Home = () => {
  const navigate = useNavigate();
  const [{ loading, error, data }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    data: {},
  });
  const [department, setDepartment] = useState();
  const [batch, setBatch] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const branches = [
    "Computer engineering",
    "Electrical engineering",
    "Mechanical engineering",
    "Civil engineering",
    "Agriculture engineering",
    "Information technology",
    "Industrial and Production engineering",
    "Electronics and Communication engineering",
  ];
  const batches = [2019,2020,2021,2022,2023]

  useEffect(() => {
    const fetchFaculty = async (facultyId) => {
      dispatch({ type: "FETCH_BEGIN" });
      try {
        if (!localStorage.getItem("token")) {
          dispatch({ type: "FETCH_FAIL", payload: "Please Login first" });
        }
        dispatch({
          type: "FETCH_SUCCESS",
          payload: JSON.parse(localStorage.getItem("data")),
        });
        if (data?.user?.isStudent) {
          navigate(`/student/${data?.student?.id}`);
        }
        console.log("userr", data);
      } catch (error) {
        console.log(error);
        dispatch({ type: "FETCH_FAIL", payload: error.msg });
      }
    };
    fetchFaculty();
  }, []);

  const onChangeDepHandler=(e)=>{
    setDepartment(e.target.value);
  }
  const onChangebatHandler=(e)=>{
    setBatch(e.target.value);
  }
  const handleSubmit=()=>{
    if(!department && !batch){
      setErrorMsg("please select a department or batch")
      return
    }
    navigate(`students/${batch}/${department}`)
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="mt-5 mx-5">
          {errorMsg?<div className="my-2 text-danger">{errorMsg}</div>:<></>}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationCustom03">Department:</label>
              <select
                className="form-control form-control-lg"
                name="department"
                id="validationCustom03"
                onChange={onChangeDepHandler}
                value={department}
                required
              >
                <option value="">Choose Department... </option>
                {branches.map((branch)=>{
                  return (<option key={branch} value={branch}>
                  {branch}
                </option>)
                })}
              </select>
              <div className="invalid-feedback">Please provide a category.</div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationCustom04">Batch:</label>
              <select
                className="form-control form-control-lg"
                id="validationCustom04"
                name="activity"
                onChange={onChangebatHandler}
                required
                value={batch}
              >
                <option value="">Choose batch... </option>
                {batches.map((branch)=>{
                  return (<option key={branch} value={branch}>
                  {branch}
                </option>)})}
              </select>
              {/* <div className="invalid-feedback">Please provide an activity.</div>
               */}
               <button className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
    // <UserDetails/>
  );
};

export default Home;
