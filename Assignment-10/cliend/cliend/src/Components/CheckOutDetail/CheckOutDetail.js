import React from 'react';
import { Link } from 'react-router-dom';

const CheckOutDetail = (props) => {
  const product = props.product;
  const { productName, productPrice,} = props;
  return (
    <div className="container mt-5">
    <div className="row">
      <h1>Check Out</h1>
      <div className="table-content  shadow rounded w-80 h-70 ">
      <table className="table container">
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h3>{productName}</h3>
                </td>
                <td>
                  <h3>1</h3>
                </td>
                <td>
                  <h3>{productPrice}</h3>
                </td>
              </tr>
            </tbody>
             </table>
      </div>
      <div className="d-flex justify-content-end">
      <Link to="/orders" className="d-flex justify-content-end btn btn-success mt-3">Check Out</Link>
      </div>
      
    </div>
    </div>
  );
};

export default CheckOutDetail;
