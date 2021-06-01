import React, { useContext,userContext } from 'react';
import './Navbar.css';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  
  const userName = JSON.parse(localStorage.getItem('user'));
  const {name}=userName
  console.log(userName);
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/"><img className="logo"src={logo}alt=""/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-5">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link active" to="/checkout">Orders</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link active" to="/AddProducts">Admin</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link active" to="/">Deals</Link>
        </li>
        <li>
        <Link className="nav-link active" to="/">{name}</Link>
        </li>
        
        <li className="nav-item me-5">
          <Link className="nav-link " to="/Login"><button className="btn btn-success">Log in</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;