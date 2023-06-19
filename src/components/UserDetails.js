import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserDetails = ({
  inputDisabled,
  handleInputDisabled,
  handleChange,
  faculty,
  user,
}) => {
  const [luser,setLuser]=useState({})
  useEffect(() => {
    setLuser(JSON.parse(localStorage.getItem('data')))
  }, [])
  return (
    <div className="card bg-white shadow">
      <div className="card-header bg-white border-0">
        <div className="row align-items-center">
          <div className="col-8">
            {JSON.parse(localStorage.getItem('data'))?.staff?.isAdmin?<h3 className="mb-0 text-oliveGreen">Student account</h3>:
            <h3 className="mb-0 text-oliveGreen">My account</h3>}
          </div>
          <div className="col-4 text-right">
            {/* {JSON.parse(localStorage.getItem('data'))?.staff?.isAdmin &&  (inputDisabled ? (
              <Link
                onClick={() => handleInputDisabled(true)}
                className="btn btn-sm btn-primary"
              >
                Edit Profile
              </Link>
            ) : (
              <Link
                onClick={() => handleInputDisabled(false)}
                className="btn btn-sm btn-primary"
              >
                Update
              </Link>
            ))} */}
          </div>
        </div>
      </div>
      <div className="card-body">
        <form>
          <div className="">
            <h6 className="heading-small fw-bolder text-darkOliveGreen mb-4">
              User information
            </h6>
          </div>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Name
                  </label>
                  <input
                    name="username"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="input-username"
                    className="form-control form-control-alternative"
                    placeholder="Username"
                    value={user?.name}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-email">
                    Email address
                  </label>
                  <input
                    name="email"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="email"
                    id="input-email"
                    className="form-control form-control-alternative"
                    value={user?.email}
                    placeholder="jesse@example.com"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-first-name"
                  >
                    {"Student Id"}
                  </label>
                  <input
                    name="id"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="number"
                    id="input-first-name"
                    className="form-control form-control-alternative"
                    placeholder="Student Id"
                    value={faculty?.id}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="Qualification">
                    {"Advisor id"}
                  </label>
                  <input
                    name="FacultyId"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="Qualification"
                    className="form-control form-control-alternative"
                    placeholder="Advisor code"
                    value={faculty?.FacultyId}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <h6 className="heading-small fw-bolder text-darkOliveGreen mb-4">
            Other information
          </h6>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="input-phone">
                    Date of Birth
                  </label>
                  <input
                    name="dob"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="input-phone"
                    className="form-control form-control-alternative"
                    placeholder="Date of birth"
                    value={user?.dob}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-designation"
                  >
                    Father's Name
                  </label>
                  <input
                    name="fatherName"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="input-designation"
                    className="form-control form-control-alternative"
                    placeholder="Father's name"
                    value={faculty?.fatherName}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-department"
                  >
                    Mother's Name
                  </label>
                  <input
                    name="motherName"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    placeholder="Mother's Name"
                    type="text"
                    id="motherName"
                    className="form-control form-control-alternative"
                    value={faculty?.motherName}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="input-phone">
                    Batch
                  </label>
                  <input
                    name="batch"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="number"
                    id="input-phone"
                    className="form-control form-control-alternative"
                    placeholder="Batch"
                    value={faculty?.batch}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-designation"
                  >
                    Parent phone
                  </label>
                  <input
                    name="parentPhone"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="number"
                    id="input-designation"
                    className="form-control form-control-alternative"
                    placeholder="Parent phone"
                    value={faculty?.parentPhone}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-department"
                  >
                    Parent email
                  </label>
                  <input
                    name="parentEmail"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    placeholder="Parent email"
                    type="email"
                    id="parentEmail"
                    className="form-control form-control-alternative"
                    value={faculty?.parentEmail}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label className="form-control-label" htmlFor="input-phone">
                    Phone number
                  </label>
                  <input
                    name="phoneNo"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="number"
                    id="input-phone"
                    className="form-control form-control-alternative"
                    placeholder="Phone number"
                    value={user?.phoneNo}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-designation"
                  >
                    Degree
                  </label>
                  <input
                    name="degree"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="input-designation"
                    className="form-control form-control-alternative"
                    placeholder="Designation"
                    value={faculty?.degree}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label
                    className="form-control-label"
                    htmlFor="input-department"
                  >
                    {"Branch"}
                  </label>
                  <input
                    name="discipline"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    placeholder="eg: Information Technology"
                    type="text"
                    id="input-department"
                    className="form-control form-control-alternative"
                    value={faculty?.discipline}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label
                  className="form-control-label"
                  htmlFor="input-department"
                >
                  Address
                </label>
                <input
                  name="address"
                  disabled={inputDisabled}
                  onChange={handleChange}
                  placeholder="Address"
                  type="text"
                  id="address"
                  className="form-control form-control-alternative"
                  value={user?.address}
                />
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <h6 className="heading-small fw-bolder text-darkOliveGreen mb-4">
            Hostel Information
          </h6>
          <div className="pl-lg-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group focused">
                  <label
                    className="form-control-label"
                    htmlFor="input-username"
                  >
                    Hostel Name
                  </label>
                  <input
                    name="hostel"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="input-username"
                    className="form-control form-control-alternative"
                    placeholder="Hostel name"
                    value={faculty?.hostel}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="form-control-label" htmlFor="input-email">
                    Room No.
                  </label>
                  <input
                    name="roomNo"
                    disabled={inputDisabled}
                    onChange={handleChange}
                    type="text"
                    id="input-email"
                    className="form-control form-control-alternative"
                    value={faculty?.roomNo}
                    placeholder="Room No."
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
