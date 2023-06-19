import React, { useState, useEffect, useReducer } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
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
  const batches = [2019, 2020, 2021, 2022, 2023];
  
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
        console.log("userData", data);
        if (JSON.parse(localStorage.getItem("data"))?.user?.isStudent) {
          navigate(
            `/student/${JSON.parse(localStorage.getItem("data"))?.student?.id}`
            );
          }
          console.log("userr", data);
        } catch (error) {
          console.log(error);
          dispatch({ type: "FETCH_FAIL", payload: error.msg });
        }
    };
    fetchFaculty();
  }, []);
  console.log("errros", errors);
  
  const onChangeDepHandler = (e) => {
    setDepartment(e.target.value);
  };
  const onChangebatHandler = (e) => {
    setBatch(e.target.value);
  };
  const handleDSubmit = () => {
    if (!department && !batch) {
      setErrorMsg("please select a department or batch");
      return;
    } else {
      navigate(`students/${batch}/${department}`);
    }
  };
  const handleSearchSubmit = (data) => {
    console.log(data);
    navigate(`student/${data?.search}`);
  };
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="mt-5 mx-5">
          {errorMsg ? (
            <div className="my-2 text-danger">{errorMsg}</div>
          ) : (
            <></>
          )}
          <form onSubmit={handleSubmit(handleSearchSubmit)}>
            <div className="row">
              <h2>Search Student by Student Id</h2>
              <div className="col-md-6 mb-3">
                <label>Student Id:</label>
                <Controller
                  control={control}
                  name="search"
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "Student Id is required",
                    },
                    pattern: {
                      value: /^[0-9+-]+$/,
                      message: "Student Id should be numeric",
                    },
                  }}
                  render={({ field: { onChange, value, ref } }) => (
                    <input
                      className="form-control form-control-lg"
                      style={{color:"black"}}
                      placeholder="Student Id"
                      onChange={onChange}
                      value={value}
                      ref={ref}
                    />
                  )}
                />

                <div style={{ color: "red", margin: "10px 5px" }}>
                  {errors?.search?.type ? (
                    <div>{errors?.search?.message}</div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                {/* <div className="invalid-feedback">Please provide an activity.</div>
                 */}
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="row" style={{marginTop:"20px"}}>
            <h2>Search Students by Department and batch</h2>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationCustom03">Department:</label>
              <select
                className="form-control form-control-lg"
                name="department"
                id="validationCustom03"
                style={{color:"black"}}
                onChange={onChangeDepHandler}
                value={department}
                required
              >
                <option value="">Choose Department... </option>
                {branches.map((branch) => {
                  return (
                    <option key={branch} style={{color:"black"}} value={branch}>
                      {branch}
                    </option>
                  );
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
                style={{color:"black"}}
                onChange={onChangebatHandler}
                required
                value={batch}
              >
                <option value="">Choose batch... </option>
                {batches.map((branch) => {
                  return (
                    <option key={branch} style={{color:"black"}} value={branch}>
                      {branch}
                    </option>
                  );
                })}
              </select>
              {/* <div className="invalid-feedback">Please provide an activity.</div>
               */}
              <button className="btn btn-primary mt-4" onClick={handleDSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
    // <UserDetails/>
  );
};

export default Home;
