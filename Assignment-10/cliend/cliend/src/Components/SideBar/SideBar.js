import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div style={{
            backgroundColor:'lightGray',
            height:'500px',
        }}>
           <div className="m-5 p-5">
                    <Link to="/RegistrationAll"><h3>RegistrationAll</h3></Link>
                    <Link to="/AddProducts"><h3>AddProducts</h3></Link>
                </div> 
        </div>
    );
};

export default SideBar;