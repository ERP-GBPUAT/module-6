import React from 'react'
import { Link } from 'react-router-dom'

const UserDetails = ({inputDisabled,handleInputDisabled,handleChange}) => {
    return (
        
            <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h3 className="mb-0 text-oliveGreen">Student Details</h3>
                        </div>
                       </div>
                </div>
                <div className="card-body">
                    <form>
                       
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
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            type="text"
                                            id="input-username"
                                            className="form-control form-control-alternative"
                                            placeholder="Username"
                                            value="udit"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-email"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            type="email"
                                            id="input-email"
                                            className="form-control form-control-alternative"
                                            value="jesse@gmail.com"
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
                                            htmlFor="input-Phone-no."
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            type="tel"
                                            id="input-Phone-no."
                                            className="form-control form-control-alternative"
                                            placeholder="Phone No."
                                            value="847983758"
                                        />
                                    </div>
                                </div>
                           
                                <div className="col-lg-6">
                                    <div className="form-group focused">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-id"
                                        >
                                            Id No.
                                        </label>
                                        <input
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            type="text"
                                            id="input-id"
                                            className="form-control form-control-alternative"
                                            placeholder="Id no."
                                            value="54909"
                                        />
                                    </div>
                                </div>
                                </div>
                                <div className="row">

                                <div className="col-lg-6">
                                    <div className="form-group focused">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-Degree"
                                        >
                                            Degree
                                        </label>
                                        <input
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            type="text"
                                            id="input-degree"
                                            className="form-control form-control-alternative"
                                            placeholder="Degree"
                                            value="B.Tech"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group focused">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-branch"
                                        >
                                            Branch
                                        </label>
                                        <input
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            type="text"
                                            id="input-branch"
                                            className="form-control form-control-alternative"
                                            placeholder="Branch"
                                            value="Information Technology"
                                        />
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group focused">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-college"
                                        >
                                            College
                                        </label>
                                        <input
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            type="text"
                                            id="input-college"
                                            className="form-control form-control-alternative"
                                            placeholder="college"
                                            value="COT"
                                        />
                                    </div>
                                </div>
                                </div>
                        </div>
                        <hr className="my-4" />
                        <h6 className="heading-small text-darkOliveGreen mb-4">
                            Other information
                        </h6>
                        <div className="pl-lg-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group focused">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-address"
                                        >
                                         Address
                                        </label>
                                        <input
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            id="input-address"
                                            className="form-control form-control-alternative"
                                            placeholder="Address"
                                            value="xyz"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group focused">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-father-name"
                                        >
                                            Father's Name
                                        </label>
                                        <input
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            type="text"
                                            id="input-father-name"
                                            className="form-control form-control-alternative"
                                            placeholder="father name"
                                            value="shivansh"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group focused">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-father-no."
                                        >
                                            Father's mobile no.
                                        </label>
                                        <input
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            type="text"
                                            id="input-father-no."
                                            className="form-control form-control-alternative"
                                            placeholder="number"
                                            value="6457869345"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-mother-name"
                                        >
                                            Mother's name
                                        </label>
                                        <input
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            value="vasu"
                                            type="text"
                                            id="input-mother-name"
                                            className="form-control form-control-alternative"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group focused">
                                        <label
                                            className="form-control-label"
                                            htmlFor="input-mother-no."
                                        >
                                            Mother's mobile no.
                                        </label>
                                        <input
                                            disabled={inputDisabled}
                                            onChange={handleChange}
                                            type="text"
                                            id="input-mother-no."
                                            className="form-control form-control-alternative"
                                            placeholder="number"
                                            value="6457869345"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </form>
                </div>
            </div>
    )
}

export default UserDetails