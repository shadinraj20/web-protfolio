import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import RegistrationDetail from './RegistrationDetail/RegistrationDetail';

const RegistrationAll = () => {
    const [myRegistration, setMyRegistration] = useState([]);

    useEffect(() => {
        fetch(`https://limitless-badlands-88219.herokuapp.com/products/`)
            .then(res => res.json())
            .then(data => setMyRegistration(data));
    }, [])

    

    return (
        <div className="row ">
            <div className="col-md-4">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 mt-5">
                <table className="table container">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myRegistration.map(reg => <RegistrationDetail products={reg}></RegistrationDetail>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default RegistrationAll;