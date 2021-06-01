import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../image/logo.png";

const SideBar = () => {
    return (
        <div style={{
            backgroundColor:'lightGray',
            height:'500px',
        }}>
           <div className="m-5 p-5">
               <img style={{width:'100px',height:"60px",paddingBottom:"30px"}} src={logo}alt=""/>
                    <li><Link to="/RegistrationAll">
                        <span className="icon"></span>
                        <span>RegistrationAll</span>
                    </Link> 
                    </li>
                   <li><Link to="/AddProducts">
                   <span className="icon"></span>
                       <span>AddProducts</span>
                       </Link>
                       </li> 
                </div> 
        </div>
    );
};

export default SideBar;