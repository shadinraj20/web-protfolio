import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash } from '@fortawesome/free-solid-svg-icons'


const RegistrationDetail = (props) => {
    const products = props.products;
    const {  UserName, Price, } = products;
    const deleteProduct = (id) => {
        console.log(id);
        fetch(`https://limitless-badlands-88219.herokuapp.com/deleteProducts/${id}`,{
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
                <td>{UserName}</td>
                <td>{Price}</td>
                <td><button onClick={()=> deleteProduct(products._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>

    );
};

export default RegistrationDetail;