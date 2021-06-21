import React, { useState } from 'react';
import { useHistory } from 'react-router';
import SideBar from '../SideBar/SideBar';
import axios from 'axios';

const AddProducts = () => {
  const history = useHistory()
  const [product, setProduct] = useState({});
  const [imageUrl, setImageUrl] = useState('');
  const[isButtonDisable, setIsButtonDisable]=useState(true);

  const handleSubmit = (e) => {
    product.img = imageUrl
    console.log(product);
    e.preventDefault(e)
    fetch('https://limitless-badlands-88219.herokuapp.com/addProducts', {
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
  const handleImageUpload = (event) => {
		const ImageData = new FormData();
		ImageData.set("key", "a0a0d9caa0384637720b4ffbc0806ece");
		ImageData.append("image", event.target.files[0]);

		axios.post("https://api.imgbb.com/1/upload", ImageData)
			.then(function (response){
        console.log(response);
        setImageUrl(response.data.data.display_url);
        setIsButtonDisable(false)
			})
			.catch(function (error) {
				console.log(error);
			});
	};
  // const handleImageUpload=(e)=>{
  //   const img = e.target.files[0];
  //   const imgData = new FormData();
  //   imgData.set('key','a0a0d9caa0384637720b4ffbc0806ece')
  //   imgData.append("image",img)
  //   console.log(imgData);

  //   axios.post('https://api.imgbb.com/1/upload',imgData)
  //   .then(res => {
  //   console.log(res);
  //   setImageUrl(res.data.data.display_url)  
  //   setIsButtonDisable(false)
  //   })
  //   .catch(error => console.log(error))
  // }


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
                  <input className="form-control mb-3"  onChange={handleImageUpload}  type="file" name="img" placeholder="img URL" required />

                  <input type="submit" disabled={isButtonDisable} className="btn btn-success" value="Add Product" />
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