import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';





const CreateEvents = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({});
  const user = JSON.parse(localStorage.getItem('user'));

  const [createData, setCreateData] = useState({
     userName:user.name,
    productName: product.name,
    productPrice: product.price,
    email:user.email

  })


  const handleDateChange = (e) => {
    const newCreateData = { ...createData };
    newCreateData.data = e.target.value;
    setCreateData(newCreateData);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://limitless-badlands-88219.herokuapp.com/addCreate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(createData)
    })
      .then(res => res.json())
      .then(data => {
        alert('Your Account create done')
        history.push('/checkOut')

      })

  }
  useEffect(() => {
    fetch(`https://limitless-badlands-88219.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        const newCreateData = { ...createData };
        newCreateData.productName = data.name
        newCreateData.productPrice = data.price
        setCreateData(newCreateData);




      })
  }, [])

  return (
    <div className="container border rounded-2 py-3">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form className="mb-3" >
            <h1>Create an Account</h1>
            <input className="form-control mb-3" type="text" name="UserName" placeholder="UserName" value={user.name} />
            <input className="form-control mb-3" type="text" name="productName" placeholder="productName" value={product.name} />
            <input className="form-control mb-3" type="password" name="password" placeholder="password" required />
            <input className="form-control mb-3" type="date" onChange={handleDateChange} name="date" placeholder="date" />
            <input type="submit" onClick={handleSubmit} className="btn btn-success" value="Create an Account" />
          </form>
        </div>
      </div>
    </div>








  );
};

export default CreateEvents;
