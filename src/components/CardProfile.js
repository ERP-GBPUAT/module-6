import React from "react";

const CardProfile = ({name, designation, age,department, cityAddress}) => {
    const handleChange=()=>{
        console.log("hi");
    }
  return (
    <div className="card card-profile shadow mt-12">
      <div className="row justify-content-center">
        <div className="col-lg-3 order-lg-2">
          <div className="card-profile-image mt--3">
            <a href="#">
              <img
                src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                className="rounded-circle"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
        <div className="d-flex justify-content-between">
          <a href="#" className="btn btn-sm btn-info mr-4">
            Connect
          </a>
          <a href="#" className="btn btn-sm btn-default float-right">
            Message
          </a>
        </div>
      </div>
      <div className="card-body pt-0 pt-md-4">
        <div className="text-center">
          <h3>

            {/* todo name and age from api */}
            Jessica Jones<span className="font-weight-light">, 27</span>
          </h3>
          <div className="h5 font-weight-300">

            {/* todo addreess from api */}
            <i className="ni location_pin mr-2"></i>Bucharest, Romania
          </div>
          <div className="h5 mt-4">

            {/* todo desgination from api */}
            <i className="ni business_briefcase-24 mr-2"></i>Solution Manager -
            Creative Tim Officer
          </div>
          <div>

            {/* todo deaprtment form api */}
            <i className="ni education_hat mr-2"></i>University of Computer
            Science
          </div>
          <hr className="my-4" />
          <a href="">Show more</a>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;