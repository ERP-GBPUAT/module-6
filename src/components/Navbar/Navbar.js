import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import gbpu from "../../images/gbpu.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"}> <img src={gbpu} alt="" /> </Link>
      </div>

      <Link className='tyu' to={"/login"}>Login</Link>
    </div>
  )
}

export default Navbar