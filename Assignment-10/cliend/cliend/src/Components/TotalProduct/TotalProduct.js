import React, { useEffect, useState } from 'react';
import Product from '../Products/Products';
// import productData from './../FakeData/FakeData.json';




const TotalProduct = () => {
    
    const handleAllProduct = () => {
        
        fetch('https://limitless-badlands-88219.herokuapp.com/addProducts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    const[productData,setProductData]=useState([]);

    useEffect(()=>{
        fetch('https://limitless-badlands-88219.herokuapp.com/Products')
        .then(res=>res.json())
        .then(data=>setProductData(data))
  },[])
    return (
        <div className="row">
            {/* <button onClick={handleAllProduct}>Add all products</button> */}

            {
                productData.map(pd => <Product product={pd} ></Product>)
            }
        </div>
    );
};

export default TotalProduct;