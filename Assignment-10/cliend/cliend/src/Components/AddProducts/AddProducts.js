import React, { useState } from 'react';
import { useHistory } from 'react-router';
import SideBar from '../SideBar/SideBar';

const AddProducts = () => {
  const history = useHistory()
  // https://limitless-badlands-88219.herokuapp.com/addProduct
  const [product, setProduct] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault(e)
    fetch('http://localhost:5000/addProduct', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        alert('Your product is successfully added')
        history.replace('/')
      });

  }

  const handleBlur = (e) => {
    const newProduct = product;
    newProduct[e.target.name] = e.target.value;
    setProduct(newProduct);
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <SideBar></SideBar>
        </div>

        <div className="col-md-8">
          <div className="container border rounded-2 py-3 mt-5">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <form className="mb-3" onSubmit={handleSubmit} >
                  <h6>Add A New Product</h6>
                  <input className="form-control mb-3" onBlur={handleBlur} type="text" name="UserName" placeholder="Product Name" required />
                  <input className="form-control mb-3" onBlur={handleBlur} type="price" defaultValue="0.00" name="Price" placeholder="Price" required />
                  <input className="form-control mb-3" onBlur={handleBlur} type="file" name="img" placeholder="img URL" required />

                  <input type="submit" className="btn btn-success" value="Add Product" />
                </form>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AddProducts;