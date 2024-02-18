import React, { Fragment } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const token = localStorage.getItem('token')
  const navigate=useNavigate();
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
// const token = localStorage.getItem('token');
const role = localStorage.getItem("role");
const Logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
        <Fragment>
            {
                role  && (

                <div
                className={`d-flex flex-column bg-light text-dark p-2  ${
                  isSidebarOpen ? "expanded" : "collapsed"
                }`}
                style={{ minHeight: "87vh" }}
              >
                <div className="text-center mb-4">
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-dark"
                    onClick={toggleSidebar}
                    style={{ cursor: "pointer" }}
                    data-toggle="collapse" 
                    href="#sidebarCollapse"
                    role="button"
                  />
                </div>
           
                
           
                <div className={`collapse ${isSidebarOpen ? "show" : ""}`} id="sidebarCollapse">
                  <ul className="nav flex-column">
                  <li className="nav-item">
                  <Link to='/home' className="nav-link active text-dark" >
                        Home
                      </Link>
                    </li>
                    {(role === "Admin") && (
                  <li className="nav-item">
                    <Link to='/user/create' className="nav-link active text-dark" >
                        Add Users
                    </Link>
                    <Link to='/admindashboard' className="nav-link active text-dark" >
                        Manage Users
                    </Link>
                    </li>
                    )}
                     {(role === "Manager") && (
                    <li className="nav-item">
                      <Link to='/managerusers' className="nav-link active text-dark" >
                        All Users
                      </Link>
                      <Link to='/managerrequests' className="nav-link active text-dark" >
                        Requests
                      </Link>
                    </li>
                    )}
                    {(role === "Employee") && (
                    
                    <li className="nav-item">
                      <Link to='/requestform' className="nav-link active text-dark" >
                        Raise a request
                      </Link>
                      <Link to='previousrequests' className="nav-link active text-dark" >
                        Previous Requests
                      </Link>
                    </li>
                    
                    )}
                    {(role === "HRAdmin") && (
                    <li className="nav-item">
                      <Link to='approvedrequests' className="nav-link active text-dark" >
                        Approved Requests
                      </Link>
                    </li>
                    )}
                    <li className="nav-item">
                      <Link  to='/' onClick={Logout} className="nav-link active text-dark" >
                        Logout
                      </Link>
                    </li>
              
                    {/* <li className="nav-item">
                      <a className="nav-link text-dark" href="/products">
                        Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark" href="/contact-us">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark" href="/help">
                        Help
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>)
            }
        </Fragment>
   )
};

export default Sidebar;
