import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CheckOutDetail = () => {
    const { id } = useParams();
   const[product,setProduct]=useState({});
   useEffect(() => {
    fetch(`https://limitless-badlands-88219.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        
    })
}, [])

     


  return (
    <div className="row">
        <div className="col-md-8 mt-5 container">
            <table className="table container">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td>{product.UserName}</td>
                <td>{product.Price}</td>
                <td></td>
               
            </tr>

                </tbody>
            </table>
        </div>

    </div>
  );
};

export default CheckOutDetail;
