import React from 'react'
import "./FacultyProfile.css"
import { Link } from 'react-router-dom'

const NavbarDash = () => {
  return (
    <nav
        className="navbar navbar-expand-md navbar-dark"
        id="navbar-main"
      >
        <div className="container-fluid">
          <div>
          <Link
            className="h5 mr-4 mb-0 text-darkOliveGreen text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            Student profile
          </Link>
          
          </div>
          {/* <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div className="form-group mb-0">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <input
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>
          </form> */}
          
        </div>
      </nav>
  )
}

export default NavbarDash