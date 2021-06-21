import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';





const CheckOut = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({});
  // const user = JSON.parse(localStorage.getItem('user'));

  const [createData, setCreateData] = useState({
    // UserName: user.name,
    productName: product.name,
    productPrice: product.price,
    // email: user.email

  })


  const handleDateChange = (e) => {
    const newCreateData = { ...createData };
    newCreateData.data = e.target.value;
    setCreateData(newCreateData);
  }

  const orderCheckOut = (e) => {
    e.preventDefault()
    fetch('https://limitless-badlands-88219.herokuapp.com/addCreate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(createData)
    })
      .then(res => res.json())
      .then(data =>{
        history.push('/checkOutDetail')

      })

  }
  useEffect(() => {
    fetch(`https://limitless-badlands-88219.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProduct(data);
        const newCreateData = { ...createData, ...data };
        // newCreateData.productName = data.name
        // newCreateData.productPrice = data.price
        // newCreateData.productPrice = data.date
        setCreateData(newCreateData);




      })
  }, [])

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
                  <h3>{createData.UserName}</h3>
                </td>
                <td>
                  <h3>1</h3>
                </td>
                <td>
                  <h3>{createData.Price}</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end">
          <Link to={`/checkOutDetail/${id}`} onClick={orderCheckOut}className="d-flex justify-content-end btn btn-success mt-3">Check Out</Link>
        </div>

      </div>
    </div>

  );
};

export default CheckOut;
