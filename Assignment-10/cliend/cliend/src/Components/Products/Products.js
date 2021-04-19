import React from 'react';
import { Link } from 'react-router-dom';
import "./products.css";

const Products = (props) => {
    const product = props.product;
    const { _id, name, img, price, } = product;
    return (
        <div className="col-md-3 mt-5">
           <div className="card h-100 shadow rounded">
      <img src={img} className="card-img-top img" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <div className="card-footer d-flex justify-content-between footer">
        <p className="text price">{price}</p>
       <Link to={`/CreateEvents/${_id}`}><button className="btn btn-success">Buy Now</button></Link> 
      </div>
        </div>
        </div>
        
    );
};

export default Products;