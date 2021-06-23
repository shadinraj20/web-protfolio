import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CheckOutDetail = () => {
   const[product,setProduct]=useState([]);
   useEffect(() => {
    fetch(`https://limitless-badlands-88219.herokuapp.com/products`)
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
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    {product.map((product) => (
          <tbody key={product._id}>
            <tr className="line-draw">
              <td>{product.UserName}</td>
              <td> 1 </td>
              <td>${product.Price}</td>
            </tr>
          </tbody>
        ))}






               
                {/* {
                  
                  product.map(product=><orderDetails product={product} key={product.id}></orderDetails>)
                } */}
                
            </table>
        </div>

    </div>
  );
};

export default CheckOutDetail;
