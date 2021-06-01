import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'


const RegistrationDetail = (props) => {
    const products = props.products;
    const {  name, price, } = products;
    // https://limitless-badlands-88219.herokuapp.com
    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/deleteProducts/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
               console.log(result);
            }
        })
    }
    return (
             <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td><button onClick={()=> deleteProduct(products._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>

    );
};

export default RegistrationDetail;