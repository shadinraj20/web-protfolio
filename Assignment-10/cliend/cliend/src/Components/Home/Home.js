import React from 'react';
import TotalProduct from '../TotalProduct/TotalProduct';


const Home = () => {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 d-flex">
                    <input className="form-control" type="text" placeholder="Search Book" />
                    <button className="btn btn-success">Search</button>    
                </div>
            </div>
            <TotalProduct></TotalProduct>
        </div>
    );
};

export default Home;