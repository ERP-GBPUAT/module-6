import React from "react";
import "./FacultyProfile.css";
// import MainDashboard from "./DashboardComponents/MainDashboard";
import { useLocation, useParams } from "react-router-dom";
import NavbarDash from "./NavbarDash";
import MainDashboard from "./MainDashboard";
// import AllResearchList from ".";


const FacultyProfile = ({isResearch}) => {
  const location = useLocation()
  const {id}=useParams()
  console.log(id);
  const handleChange = (e) => {
    console.log("input");
  };
  return (
    <div className="main-content">
        <NavbarDash />
        <MainDashboard btnData={"Edit Profile"} routeTo={"/facultyDashboard"} />
        
    </div>
    // <div className="main-content">
    //   <nav
    //     className="navbar navbar-top navbar-expand-md navbar-dark"
    //     id="navbar-main"
    //   >
    //     <div className="container-fluid">
    //       <a
    //         className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
    //         href="https://www.creative-tim.com/product/argon-dashboard"
    //         target="_blank"
    //       >
    //         User profile
    //       </a>
    //       {/* <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
    //         <div className="form-group mb-0">
    //           <div className="input-group input-group-alternative">
    //             <div className="input-group-prepend">
    //               <span className="input-group-text">
    //                 <i className="fas fa-search"></i>
    //               </span>
    //             </div>
    //             <input
    //               onChange={handleChange}
    //               className="form-control"
    //               placeholder="Search"
    //               type="text"
    //             />
    //           </div>
    //         </div>
    //       </form> */}
    //       <ul className="navbar-nav align-items-center d-md-flex">
    //           <li className="nav-item dropdown">
    //             <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //               <div className="media align-items-center">
    //                 <span className="avatar avatar-sm rounded-circle">
    //                   <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"/>
    //                 </span>
    //                 <div className="media-body ml-2 d-none d-lg-block">
    //                   <span className="mb-0 text-sm  font-weight-bold">Jessica Jones</span>
    //                 </div>
    //               </div>
    //             </a>
    //             <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
    //               <div className=" dropdown-header noti-title">
    //                 <h6 className="text-overflow m-0">Welcome!</h6>
    //               </div>
    //               <a href="../examples/profile.html" className="dropdown-item">
    //                 <i className="ni ni-single-02"></i>
    //                 <span>My profile</span>
    //               </a>
    //               <a href="../examples/profile.html" className="dropdown-item">
    //                 <i className="ni ni-settings-gear-65"></i>
    //                 <span>Settings</span>
    //               </a>
    //               <a href="../examples/profile.html" className="dropdown-item">
    //                 <i className="ni ni-calendar-grid-58"></i>
    //                 <span>Activity</span>
    //               </a>
    //               <a href="../examples/profile.html" className="dropdown-item">
    //                 <i className="ni ni-support-16"></i>
    //                 <span>Support</span>
    //               </a>
    //               <div className="dropdown-divider"></div>
    //               <a href="#!" className="dropdown-item">
    //                 <i className="ni ni-user-run"></i>
    //                 <span>Logout</span>
    //               </a>
    //             </div>
    //           </li>
    //         </ul>
    //     </div>
    //   </nav>
    // </div>
    //     <>
    //     <div className="main-content">
    //     <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
    //       <div className="container-fluid">
    //         <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="https://www.creative-tim.com/product/argon-dashboard" target="_blank">User profile</a>
    //         <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
    //           <div className="form-group mb-0">
    //             <div className="input-group input-group-alternative">
    //               <div className="input-group-prepend">
    //                 <span className="input-group-text"><i className="fas fa-search"></i></span>
    //               </div>
    //               <input onChange={handleChange} className="form-control" placeholder="Search" type="text"/>
    //             </div>
    //           </div>
    //         </form>
            
    //       </div>
    //     </nav>
    //     {/* header */}
        
    //     {/* <!-- Page content --> */}
        
    //   </div>
    //   <footer className="footer">
    //     <div className="row align-items-center justify-content-xl-between">
    //       <div className="col-xl-6 m-auto text-center">
    //         <div className="copyright">
    //           <p>Made with <a href="https://www.creative-tim.com/product/argon-dashboard" target="_blank">Argon Dashboard</a> by Creative Tim</p>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    //   </>



    
  );
};

export default FacultyProfile;